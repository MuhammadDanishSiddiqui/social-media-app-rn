import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import {SCREENS} from './constants/screens';
import Create from './screens/CreatePostScreen'
import MyPostsScreen from './screens/MyPostsScreen';
import AccountScreen from './screens/AccountScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name={SCREENS.SIGNUP} component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.CREATE} component={Create} />
        <Stack.Screen name={SCREENS.MYPOSTS} component={MyPostsScreen} />
        <Stack.Screen name={SCREENS.ACCOUNT} component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
