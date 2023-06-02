import { StyleSheet, View,Text,ScrollView } from "react-native"
import { GamesBlcok } from "../GamesBlock"
import { SlotsBlock } from "../SlotsBlock"

export const LiveCasion = () =>{
    const data = [{},{},{},{},{},{},]
    const data2 = [{},{},{},{},{},{},]
    return <ScrollView showsVerticalScrollIndicator = {false} style = {{marginBottom:238}}>
        {data.map((elm,i)=>{
            return <GamesBlcok key={i} index = {i}>
                {data2.map((elm,i)=>{
                    return <SlotsBlock name1={'Royal Emirates'} name2 = {'Barbare Bang'} key={i}/>
                })}
            </GamesBlcok>
        })
            
        }
    </ScrollView>
}
