import {StyleSheet} from "react-native"

export const Globalstyles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:30,
    },
    Bgimage:{
        width:"100%",
        height:"100%",
    },
    block:{
        marginTop:70,
        paddingHorizontal:30,
        width:"100%",
    },
    main:{
        marginTop:20,
        paddingHorizontal:15
    },
    sportBlock:{
        width:'99%',
        padding:10,
        height:210,
        backgroundColor:'#ffffff',
        marginVertical:5,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius:8,
    },
    confficentTitle:{
        color:'#2A2B2D',
        fontSize:12,
        fontFamily:"Inter",
        fontWeight:500,
        marginBottom:5,
    },
})