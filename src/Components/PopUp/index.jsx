import { Modal, View,StyleSheet, TouchableOpacity, Text } from "react-native"

export const PopUp = ({children,open,button1,button2,onPress1,onPress2}) =>{
    return <View>
        <Modal 
            animationType="slide"
            visible = {open}
            hasBackdrop={true}
            backdropOpacity={10}
            backdropColor={"rgba(255, 0, 0, 0.8)"}
            transparent = {true}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style = {{paddingVertical:20}}>
                    {children}
                </View>
                <TouchableOpacity style = {styles.button}>
                    <Text style= {styles.text}>{button1}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress2} style = {styles.button}>
                    <Text style= {styles.text}>{button2}</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
    </View>
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)'
      },
      modalView: {
        width:'85%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button:{
        borderTopWidth:1,
        borderColor:'#F5F6FA',
        width:'100%',
        paddingVertical:15,
      },
      text:{
        color:'#40A789',
        textAlign:'center',
      }
})