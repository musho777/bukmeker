import {ScrollView,StyleSheet} from 'react-native'
import { GameCard } from '../GameCard/GameCard'
import { GamesBlcok } from '../GamesBlock'

export const Games = () =>{
    const data = [{},{},{},{},{},]
    const data2 = [{},{},{},{},{},]
    return <ScrollView showsVerticalScrollIndicator = {false} style = {{marginBottom:253}}>
        {data.map((elm,i)=>{
              return  <GamesBlcok index={i} key={i}>
              {data2.map((elm,i)=>{
            return <GameCard key={i} name = {'Crystal'}/>
        })}
        </GamesBlcok>

            })
        }
    </ScrollView>
}
export const styles = StyleSheet.create({

})