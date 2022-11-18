import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export default StyleSheet.create({
    Input:{
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        width: 250,
        borderColor : '#99A3A4',
        marginBottom: 15,
        color: 'black',
        fontSize: 16, 
        fontWeight: 'bold',
    },
    text:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',

    },
    
    textContactosTitulo:{
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        paddingBottom: 50,

    },
    textTurnos:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contenedorContacto:{
       backgroundColor: '#2d2d2d',
       width: '100%',
       height: 350,
       borderRadius: 20,
       padding: 10,
    },
    botonContenedorContacto:{
        backgroundColor: '#343431',
        marginBottom: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        borderRadius: 10,

    },
    botonContenedor:{
        backgroundColor: '#577eb8',
        marginBottom: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,

    },
    botonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    }, 

    textHeader: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 25,
        textAlign: 'center',
        
    }, 
    textHeaderUser: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        
    }, 
    carga: {
        flex: 1, 
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerPromos: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      itemPromos: {
        backgroundColor: '#2d2d2d',
        marginVertical: 8,
        marginHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 13,
        borderRadius: 8,

      },
      contenedorTitulo:{ 
        backgroundColor: '#2d2d2d',
        flexDirection: 'column-reverse'

      },
      titlePromos: {
        fontSize: 26,
        display: 'flex',
        padding: 10,
        color: 'white',
       
        
      },
    imgPromos:{
        display: 'flex',
        height: 250,

    }


})
    