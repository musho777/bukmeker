import React, { useCallback, forwardRef, useState} from 'react';
import { View,StyleSheet,Text, Image,TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal ,BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {  } from 'react-native-gesture-handler';
export const BootomSheet = forwardRef(({snapPoints,share,close},ref) =>{
    console.log(share)
    const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        animatedIndex={{
          value: 1,
        }}
        opacity={0.85}
      />
    ), [])
    const windowWidth = Dimensions.get('window').width;
        const renderItem = useCallback(
          ({ item }) => {
            return <View style={[styles.container,{width:(windowWidth),height:'80%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}]}>
                    {
                      data1.map((elm,i)=>(
                      <View key={i} style = {{width:(windowWidth/5),height:70,marginBottom:10,justifyContent:'center',alignItems:'center'}}>
                          <Image style = {{width:50,height:50}} source={require('../../Assets/images/f.svg.webp')}/>
                          <Text style = {{ color:'#2A2B2D',fontSize:10,textAlign:'center'}}>facebook </Text>
                      </View>
                      ))
                    }
            </View>
          },
          []
        );
        const data = [
          1,2
        ]
        const data1 = [{},{},{},{},{},{},{},{},]
        const [imgActive, setInmageActive] = useState(0);
        const change = (nativeEvent) => {
          const slider = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
          );
          if (slider !== imgActive) {
            setInmageActive(slider);
          }
        }
    return (
      <View style={[styles.container]}>
        <BottomSheetModal
          ref={ref}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          enableContentPanningGesture = {false}
        >
        <BottomSheetFlatList 
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={data}
          onScroll={({ nativeEvent }) => change(nativeEvent)}
          renderItem={renderItem}
        />
          <View  style = {{justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
          {data.map((elm,i)=>(
            <View  key={i} style = {[{width:5,height:5,borderRadius:50,backgroundColor:'#F5F6FA',marginHorizontal:1},imgActive ===i && {backgroundColor:'blue'}]} ></View>
            ))
          }
          </View>

        <TouchableOpacity onPress={close} style = {{backgroundColor:"#F5F6FA",paddingVertical:15,margin:15,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
          <Text  style = {{fontSize:14,color:'#2A2B2D'}}>Отмена</Text>
        </TouchableOpacity>
        </BottomSheetModal>
      </View>
    );
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:24,
    },
    text:{
        color:'red',
        fontSize:14,
        fontFamily:'Inter-Regular',
        textAlign:'center',
        paddingHorizontal:35,
        paddingVertical:5,
    }
  });
  