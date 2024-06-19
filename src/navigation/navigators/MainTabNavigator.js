import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MAIN_TAB_CONFIG} from '@app/configs';
import Home from '@app/screens/home';
import {Image} from 'react-native';
import images from '@app/assets/images/images';

const Tab = createBottomTabNavigator();

const MainTabStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {MAIN_TAB_CONFIG.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.screen}
          options={{
            tabBarIcon: () => (
              <Image style={{width: 20, height: 20}} source={tab.icon} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainTabStack;
