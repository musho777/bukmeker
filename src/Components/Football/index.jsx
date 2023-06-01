import { View,ScrollView } from "react-native"
import { FootballBlock } from "../footballBlock"

export const Football = () =>{
    const data = [{},{},{},{},{}]
    return <ScrollView showsVerticalScrollIndicator = {false} style = {{marginBottom:238}}>
        {data.map((elm,i)=>{
            return <View key={i} style = {{justifyContent:'center',alignItems:'center'}}>
                <FootballBlock index={i}/>
            </View>
        })}
    </ScrollView>
}