import {View,ScrollView} from 'react-native'
import { TennisBlcok } from '../TennisBlcok'
export const Tennis = () =>{
    const data = [{},{},{},{},{},{},{},{},]
    return <ScrollView showsVerticalScrollIndicator = {false} style = {{marginBottom:238}}>
        {data.map((elm,i)=>{
            return <View key={i} style = {{justifyContent:'center',alignItems:'center'}}> 
                    <TennisBlcok lenght = {data.length} index = {i} /> 
                </View>
        })}
    </ScrollView>
}