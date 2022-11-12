import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardStackScreen, ViewJobStackScreen} from './DashboardStackScreen';

const Tabs = createBottomTabNavigator();

export const TabStackScreen = () => (
  <Tabs.Navigator
    screenOptions={() => ({
      tabBarActiveTintColor: '#0052e1',
      tabBarInactiveTintColor: '#555',
      tabBarActiveBackgroundColor: '#fff',
      tabBarInactiveBackgroundColor: '#e6e6e6',
      tabBarShowLabel: true,
      tabBarLabelStyle: {
        fontFamily: 'Karla-Medium',
        fontSize: 9,
        paddingBottom: 5,
      },
    })}>
    <Tabs.Screen
      name="Dashboard"
      component={DashboardStackScreen}
      options={{headerShown: false}}
    />
    <Tabs.Screen
      name="ViewJob"
      component={ViewJobStackScreen}
      options={{headerShown: false}}
    />
  </Tabs.Navigator>
);

export default {
  TabStackScreen,
};
