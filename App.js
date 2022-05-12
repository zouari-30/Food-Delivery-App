import { StatusBar } from "expo-status-bar";
import React from "react";
import home from "./screens/home";
import restaurent from "./screens/restaurent";
import orderdelivery from "./screens/orderdelivery";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import tabs from "./navigation/tabs";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <stack.Screen name="tab" component={tabs} />
        <stack.Screen name="restaurent" component={restaurent} />
        <stack.Screen name="orderdelivery" component={orderdelivery} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
