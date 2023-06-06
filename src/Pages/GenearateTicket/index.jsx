import { StyleSheet, View } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import { Globalstyles } from "../../../globalStyle"
import { Input } from "../../../ui/Input"
import { DropDownIcon } from "../../Assets/svg"

export const GenereateTicket = () =>{
    return <View style = {styles.block}>
        <View style = {{alignItems:'center'}}>
            <Input value={'Сумма ставки'} paddingVertical = {10}  />
        </View>
        <View style = {{marginVertical:25}}>
            <Input value={'Желаемый выигрыш'} paddingVertical = {10} />
        </View>
        <View>
        <SelectDropdown 
            renderDropdownIcon = {()=><DropDownIcon />}
            defaultButtonText = {'Выберите время до начала'}
            buttonStyle = {[styles.DropDownStyle,{width:'100%'}]}
            buttonTextStyle = {{
                color:'#748189',
                textAlign:"left",
                left:15,fontSize:18
        }}
        />
        </View>
    </View>
}
const styles = StyleSheet.create({
    block:{
        backgroundColor:'#FFFFFF',
        height:'100%',
        paddingHorizontal:20,
        paddingVertical:30,
    },
    DropDownStyle:{
        backgroundColor:'white',
        borderBottomWidth:1.3,
        borderBottomColor:'#748189',
    },
})