import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import style from '../Recursos/estilos/Estilos';

const Boton = (props) => {

    const { onPress, text} = props

    return(
        <TouchableOpacity 
        style = { style.botonContenedor}
        onPress = {onPress} 
        >
            <Text style = { style.botonText} >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Boton