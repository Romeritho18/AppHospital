import React, { useState } from "react";
import { View, Text, TextInput, Image, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Boton from "../../components/Boton";
import ErrorLog from "../../components/Error_login";
import style from '../estilos/Estilos'

const Home = ({navigation}) => {
  
  // const [user, setUser] = useState('')
  // const [pass, setPass] = useState('')
  // const [log, setLog] = useState(0)

  // registro =() =>{
  //   fetch('https://10.0.1.82/app_hospital/controler_app/login/login.php', {
  //     method: 'POST', 
  //     header: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user : user,
  //       pass : pass,
  //     })
  //   })
  //   .then((respuesta) => respuesta.json())

  //   .then((responseJson) =>{ 
  //     console.log(respuesta)
  //     if(responseJson != 8){
  //       setLog(responseJson);
  //     }else{
  //       navigation.navigate('BotonTab');
  //     }
  //     }
      
  //     // alert(responseJson);
  //   )
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

  return (
    <SafeAreaView style={{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center', 
      backgroundColor: '#ffff',
    }}>

      <View>
        <Image
          source={require('../Imagenes/hospital-app.png')}
          style={{ width: 250, height: 270, alignSelf: 'center'}}
          resizeMode = 'cover'
          
        />
        <Text
          style={style.textHeader}
        >
        Bienvenidos al Sistema de Alertas
        </Text>
        
        {/* <ErrorLog>
          {valor = log}
        </ErrorLog> */}
        <Text

          style={style.text}
        >
          Usuario 
        </Text>
        <TextInput
          style={style.Input}
          onChangeText={(text) => setUser(text)}
        />
        <Text
          style={style.text}
        >
          Contraseña 
        </Text>
        <TextInput
          style={style.Input}
          onChangeText={(text) => setPass(text)}
        />

        <Boton
          text="Ingresar"
          onPress={() => {
            navigation.navigate('BotonTab')
          }}
        />
        <Boton
          text="Crear Usuario"
          onPress={() => {
            navigation.navigate('CrearUser');

          }}
        />
        <Text 
          style={{padding: 10, color:'black' }}
        >
          Version 1.0.0 Alpha
        </Text>
      </View>
    </SafeAreaView>
  )

}

export default Home