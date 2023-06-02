import {ScrollView,StyleSheet} from 'react-native'
import { GamesBlcok } from '../GamesBlock'

export const Games = () =>{
    const data = [{},{},{},{},{},]
    return <ScrollView showsVerticalScrollIndicator = {false} style = {{marginBottom:238}}>
        {
            data.map((elm,i)=>{
              return <GamesBlcok key={i} index = {i} />

            })
        }
    </ScrollView>
}
export const styles = StyleSheet.create({

})