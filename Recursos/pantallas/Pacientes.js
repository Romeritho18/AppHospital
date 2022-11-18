import React from 'react';
import { SafeAreaView, View, FlatList, ImageBackground, Text,Image } from 'react-native';
import styles from '../estilos/Estilos';

const DATA = [
  {
    id: '1',
    title: 'Nombre: Epifanio, Franco \n Sexo: Masculino \n Edad: 21 Años \n Condicion: Estable',
  },
  {
    id: '2',
    title: 'Nombre: Gauna, Elias \n Sexo: Masculino \n Edad: 18 Años \n Condicion: Grave',
  },
  {
    id: '3',
    title: 'Nombre: Acuña, Melanie \n Sexo: Femenino \n Edad: 41 Años \n Condicion: Embarazada de riesgo',
  },
  {
    id: '4',
    title: 'Nombre: Galarza, Gastón \n Sexo: Masculino \n Edad: 50 Años \n Condicion: Terapia intesiva',
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

const Promos = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} />
  );

  return (
    <SafeAreaView style={styles.containerPromos}>
      <Text style ={styles.textHeaderUser}>
        Ficha de Pacientes
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Promos;