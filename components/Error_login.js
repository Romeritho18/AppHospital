import React from'react';
import { View, Text, } from 'react-native';

const ErrorLog = () =>{
    switch (valor) {
        case 1:
            return (
                    <View>
                        <Text style = {{color: 'black' }} >
                            Contraseña Incorrecta
                        </Text>
                    </View>
            );

        case 2:
            return (
                    <View>
                        <Text style = {{color: 'black' }}>
                            Usuario no encontrado
                        </Text>
                    </View>
            );

        case 3:
            return (
                    <View>
                        <Text style = {{color: 'black' }} >
                        Usuario inhabilitado
                        </Text>
                    </View>
            );

        case 4:
            return (
                    <View>
                        <Text style = {{color: 'black' }} >
                        Debes completar los campos
                        </Text>
                    </View>
            );

        default:
            break;
    }
}


export default ErrorLog