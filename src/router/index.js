import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { Akun, Beranda, GetStarted, History, Keranjang, Login, Register, Splash } from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigator } from "../components";

// const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => { 
    return( 
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={Beranda} />
            <Tab.Screen name="Keranjang" component={Keranjang}/>
            <Tab.Screen name="History" component={History}/>
            <Tab.Screen name="Akun" component={Akun}/>
        </Tab.Navigator>
    )
}

const Router = () =>  {
    return(
        <Stack.Navigator initialRouteName="MaonApp">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router;