import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import RotaInterna from './pages/rotaInterna';


const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen
                name="index"
                component={Bem_Vindo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="rotaInterna"
                component={RotaInterna}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    )
}