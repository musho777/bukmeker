import { StyleSheet, View,Text} from "react-native"
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Button } from "../../../ui/Button";
import { forwardRef } from "react";

export const BootomSheetTicket = forwardRef(({},ref) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.text}>Загрузить купон</Text>
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text style={styles.text2}>Введите код купона</Text>
        <BottomSheetTextInput
          onBlur={() => {
            ref.current?.snapToIndex(0);
          }}
          onFocus={() => ref.current?.snapToIndex(0)}
          style={styles.input}
        />
        <View style={{marginTop: 30}}>
          <Button text={'Загрузить'} />
        </View>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
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
        marginBottom:-5,
    },
    input:{
        borderBottomWidth:1.3,
        color:"#748189",
        paddingLeft:0,
        fontSize:15,
        borderColor:'#40A789',
        paddingBottom:-5
    }
})