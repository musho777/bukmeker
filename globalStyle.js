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
        paddingHorizontal:10
    },
    sportBlock:{
        width:'99%',
        padding:10,
        height:190,
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
    count:{
        color:'#748189',
        fontFamily:'Inter',
        fontWeight:500,
        fontSize:12,
        backgroundColor:"#E5EDF0",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:27,
    },
    sportBlock2:{
        width:'98%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        paddingVertical:8,
        backgroundColor:'#ffffff',
        marginVertical:2,
        borderRadius:15,
    },
})