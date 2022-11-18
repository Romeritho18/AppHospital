import React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Image, Alert, ScrollView } from "react-native";
import style from "../estilos/Estilos";
import Boton from "../../components/Boton";

const CrearUser = ({ navigation }) => {
    const [corre, setCorre] = useState('')
    const [nomus, setNomus] = useState('')
    const [contra, setContra] = useState('')

    registro =() =>{
        fetch('https:///192.168.0.21controler_app/login/login.php', {
          method: 'POST', 
          header: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            user : user,
            pass : pass,
          })
        })
        .then((respuesta) => respuesta.json())
        .then((responseJson) =>{ 
          if(responseJson != 8){
            setLog(responseJson);
          }else{
            navigation.navigate('BotonTab');
          }
          }
          
          // alert(responseJson);
        )
        .catch((error) => {
          console.log(error);
        })
      }
    return (
        <SafeAreaView style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center', backgroundColor: '#fff',
        }}>

            <View>
                <ScrollView>
                <Text
                    style={style.textHeaderUser}
                >
                    REGISTRARSE
                </Text>
                <Image
                    source={require('../Imagenes/hospital-app.png')}
                    style={{ width: 100, height: 100, alignSelf: 'center' }}
                    resizeMode='cover'
                />

                <Text
                    style={style.text}
                >
                    Nombre
                </Text>
                <TextInput
                    style={style.Input}
                    onChangeText={(text) => setCorre(text)}
                />
                <Text
                    style={style.text}
                >
                    Apellido
                </Text>
                <TextInput
                    style={style.Input}
                    onChangeText={(text) => setCorre(text)}
                />
                <Text
                    style={style.text}
                >
                    Fecha de nacimiento
                </Text>
                <TextInput
                    style={style.Input}
                    onChangeText={(text) => setNomus(text)}
                />
                <Text
                    style={style.text}
                >
                    telefeno
                </Text>
                <TextInput
                    style={style.Input}
                    onChangeText={(text) => setContra(text)}
                />
                <Text
                    style={style.text}
                >
                    Correo Electronico
                </Text>
                <TextInput
                    style={style.Input}
                    onChangeText={(text) => setContra(text)}
                />
                <Text
                    style={style.text}
                >
                    Domicilio
                </Text>
                <TextInput
                    style={style.Input}
                    onChangeText={(text) => setContra(text)}
                />
                <Text
                    style={style.text}
                >
                    Sexo
                </Text>
                <TextInput
                    style={style.Input}
                    onChangeText={(text) => setContra(text)}
                />
                <Text
                    style={style.text}
                >
                    Dni
                </Text>
                <TextInput
                    style={style.Input}
                    onChangeText={(text) => setContra(text)}
                />
                <Boton
                    text="Registrarse"
                    onPress={() => {
                        Alert.alert ("Usuario creado con exito")
                        navigation.navigate('Home');

                    }}
                />
                </ScrollView>
            </View>
        </SafeAreaView>
    )

}

export default CrearUser