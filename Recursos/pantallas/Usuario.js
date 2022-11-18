// import React from'react';
// import { View, Text, SafeAreaView } from 'react-native';
// import { Linking } from 'react-native';
// import style from '../estilos/Estilos';
// import BotonContacto from '../../components/BotonContacto';

// const handleWhatsAppPress = async () =>{
//     await Linking.openURL("https://wa.me/+5493704387224?text=Me guataria saber el estado de mi vehiculo");
    
// }
// const handleInstPress = async () =>{
//     await Linking.openURL("https://www.instagram.com/esteban_salinas02/");

// }
// const handlePagPress = async () =>{
//     await Linking.openURL("https://192.168.145.46/pagina_web2/");

// }
// const handleUbiPress = async () =>{
//     await Linking.openURL("https://www.google.com.ar/maps/place/Av.+25+de+Mayo+1202,+P3600+AEI,+Formosa/@-26.1866782,-58.1801354,17z/data=!3m1!4b1!4m5!3m4!1s0x945ca5fcaac7fde9:0x3689529b704155a5!8m2!3d-26.186683!4d-58.1779467");

// }

// const Contacto = () =>{
//     return (
//         <SafeAreaView style={{
//             alignItems: 'center',
//             flex: 1,
//             justifyContent: 'center', backgroundColor: '#2d2d2d',
//           }}>
//         <View>
//             <Text style = {style.textContactosTitulo}>
//                 Contactanos
//             </Text>
//         </View>
//         <View style={style.contenedorContacto}>
//         <BotonContacto
//           text="WhatsApp"
//           onPress={ handleWhatsAppPress}
//         />
//         <BotonContacto
//           text="Instagram"
//           onPress={ handleInstPress}
//         />
//         <BotonContacto
//           text="Sitio Oficial"
//           onPress={ handlePagPress}
//         />
//         <BotonContacto
//           text="¿Donde nos podes Ubicar?"
//           onPress={ handleUbiPress}
//         />
//         </View>
            
        
//         </SafeAreaView>

    
//     )
// }

// export default Contacto