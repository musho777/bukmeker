import {View,ScrollView} from 'react-native'
import { TennisLiveBlock } from '../TennisLiveBlcok'
export const Tennis = () =>{
    const data = [{},{},{},{},{},{},{},{},]
    return <ScrollView showsVerticalScrollIndicator = {false} style = {{marginBottom:238}}>
        {data.map((elm,i)=>{
            return <View key={i} style = {{justifyContent:'center',alignItems:'center'}}> 
                    <TennisLiveBlock lenght = {data.length} index = {i} /> 
                </View>
        })}
    </ScrollView>
}