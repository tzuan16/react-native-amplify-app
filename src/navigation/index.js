import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignInScreen from "../screens/Auth/SignIn";
import SignUpScreen from "../screens/Auth/SignUp";
// import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from "../screens/Home";
import ServiceScreen from "../screens/Service";
import AboutScreen from "../screens/About";
import ProfileScreen from "../screens/Profile";
import { Hub } from "aws-amplify";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LifeRebuildScreen from "../screens/Service/LifeRebuild";
import AppForm from "../components/AppForm";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ServiceScreenStack = createNativeStackNavigator();
const ProfileScreenStack = createNativeStackNavigator();

const ServiceScreenNavigation = () => {
  return (
    <ServiceScreenStack.Navigator headerMode="screen">
      <ServiceScreenStack.Screen
        name="ServiceIndex"
        component={ServiceScreen}
        options={{ headerShown: false }}
      />
      <ServiceScreenStack.Screen
        name="LifeRebuild"
        component={LifeRebuildScreen}
      />
    </ServiceScreenStack.Navigator>
  );
};

const ProfileScreenNavigation = ({ user }) => {
  return (
    <ProfileScreenStack.Navigator
      headerMode="screen"
      initialRouteName={user ? "ProfileIndex" : "SignIn"}
    >
      {user ? (
        <ProfileScreenStack.Screen
          name="ProfileIndex"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <ProfileScreenStack.Screen name="SignIn" component={SignInScreen} />
          <ProfileScreenStack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </ProfileScreenStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: "#878686",
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            backgroundColor: colors.secondary,
            borderTopWidth: 2,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Form" component={AppForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
