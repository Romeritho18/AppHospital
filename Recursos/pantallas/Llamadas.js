import React, { useState } from "react";
import { View, Text, SafeAreaView,FlatList, ImageBackground } from "react-native";
import styles from '../estilos/Estilos';
import Boton from "../../components/Boton";
import { BotonTab } from "../../components/BotonTab";


const DATA = [
    {
      id: '1',
      title: 'Fecha: 18/11/2022  \n hora: 05:15 \n Area: Emergencias',
    },
    {
      id: '2',
      title: 'Fecha: 18/11/2022  \n hora: 07:00 \n Area: Emergencias',
    },
    {
      id: '3',
      title: 'Fecha: 18/11/2022  \n hora: 9:20 \n Area: Quirofano',
    },
    {
      id: '4',
      title: 'Fecha: 18/11/2022  \n hora: 10:13 \n Area: Traumatologia',
    },
  ];

  const Item = ({ title, img}) => (
    <View style={styles.itemPromos}>
      <View style={styles.contenedorTitulo}>
      <Text style={styles.titlePromos}>{title}
      
      </Text>
      </View>
    </View>
  );

const Turnos = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.img} />
      );
    return (

        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#ffff',
            }}>

            <View style={{
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 15,
            }} >

                <Text
                    style={styles.textHeader}
                >
                    Registro de Llamados

                </Text>
            </View>
            

    <SafeAreaView style={styles.containerPromos}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  
        </SafeAreaView>
    )
}

export default Turnos