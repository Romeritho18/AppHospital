import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pantallas/Home";
import Llamadas from "../pantallas/Llamadas";
import Vibracion_p from "../pantallas/Vibracion_p";
import style from "../estilos/Estilos";
import CrearUser from "../pantallas/CrearUser";
import { BotonTab } from "../../components/BotonTab";
const Stack = createNativeStackNavigator()

const MainStack = () =>{


        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,


                }}

            >
                {/* <Stack.Screen
                    name="Vibracion_p"
                    component={Vibracion_p}

                /> */}

                <Stack.Screen
                    name="Home"
                    component={Home}

                />
                
                <Stack.Screen
                    name = "BotonTab"
                    component={BotonTab}
                />

                <Stack.Screen
                    name="Llamadas"
                    component={Llamadas}

                />
                <Stack.Screen
                    name="CrearUser"
                    component={CrearUser}

                />
            </Stack.Navigator>
        )
    }
export default MainStack