import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Usuario from "../Recursos/pantallas/Usuario";
import Pacientes from "../Recursos/pantallas/Pacientes";
import Llamadas from "../Recursos/pantallas/Llamadas"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mdiCalendarCheckOutline } from '@mdi/js';
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";



const Tab = createMaterialBottomTabNavigator();

export const BotonTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#0a2995"
            inactiveColor="#82877b"
            barStyle={{ backgroundColor: '#d9d9db' }}
            screenOptions = { ({ route }) => ({
                tabBarIcon: ({ color, focused, size }) => { 

                    let iconName = '';
                    switch (route.name) {
                        case 'Llamadas':
                            iconName = 'phone-alert';
                            break;
                        case 'Pacientes':
                            iconName = 'file-chart';
                            break;
                        // case 'Usuario':
                        //     iconName = 'account';
                        //     break;
                    }
                    return <Icon name = {iconName} size={26} color = {color} />  
                }
            })}

        >

            <Tab.Screen
                name='Llamadas'
                component={Llamadas}

            />

            <Tab.Screen
                name='Pacientes'
                component={Pacientes}
            />

            {/* <Tab.Screen
                name='Usuario'
                component={Usuario}
            /> */}
        </Tab.Navigator>
    )


}

// phone
// marker




