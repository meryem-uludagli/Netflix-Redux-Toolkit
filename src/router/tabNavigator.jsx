import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import NetHot from '../screens/nethot';
import Downloads from '../screens/downloads';
import {HOME, NETHOT, SEARCH, DOWNLOADS} from '../utils/routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={NETHOT} component={NetHot} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
