import React, { useCallback, useMemo, useRef,useEffect, forwardRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Button } from '../../../ui/Button';
export const BootomModal = forwardRef(({},ref) =>{

    const snapPoints = useMemo(() => ['30%'], []);
    return (
      <View style={styles.container}>
        <BottomSheetModal
          ref={ref}
          index={0}
          snapPoints={snapPoints}
        >
          <View style={styles.contentContainer}>
            <Text style = {styles.text}>Загрузить купон</Text>
            <View style = {{marginTop:20,paddingHorizontal:20}}>
                <Text style = {styles.text2}>Введите код купона</Text>
                <BottomSheetTextInput 
                    onBlur={() => {ref.current?.snapToIndex(0)}}  
                    onFocus = {()=>ref.current?.snapToIndex(0)}
                    style = {styles.input}/>
                <View style = {{marginTop:30}}>
                    <Button text={'Загрузить'}/>
                </View>
            </View>
          </View>
        </BottomSheetModal>
      </View>
    );
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    contentContainer: {
      flex: 1,
    //   alignItems: 'center',
      backgroundColor:'#FFFFFF'
    },
    text:{
        color:'#2A2B2D',
        fontWeight:700,
        fontSize:16,
        textAlign:'center',
    },
    text2:{
        color:'#748189',
        fontWeight:500,
        fontSize:10,
        marginBottom:-18,
    },
    input:{
        borderBottomWidth:1.3,
        color:"#748189",
        paddingLeft:0,
        fontSize:15,
        borderColor:'#40A789'
    }
  });
  