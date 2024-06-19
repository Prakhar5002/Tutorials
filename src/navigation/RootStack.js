import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MAIN_TAB_STACK} from './screenNames';
import MainTabStack from './navigators/MainTabNavigator';
import Cart from '@app/screens/cart';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAIN_TAB_STACK} component={MainTabStack} />
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default RootStack;
