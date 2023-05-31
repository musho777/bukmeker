import {View,Text, Dimensions} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { RegistrationWhiteFull } from '../../Pages/RegistrationWhiteFull'
import { RegistrationWhitePhone } from '../../Pages/RegistrationWhitePhone'
export const RegistrationWhite = ({route}) =>{
    const {index} = route.params
    const { width } = Dimensions.get('window');
    return <View style = {{flex:1}}>
        <SwiperFlatList  index={index}>
            <View  style = {{width:width}}>
                <RegistrationWhitePhone />
            </View>
            <View  style = {{width:width}}>
                <RegistrationWhiteFull />
            </View>
        </SwiperFlatList>
    </View>
}