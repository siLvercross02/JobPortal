import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardStackScreen} from './DashboardStackScreen';
import {Icon} from '@rneui/themed';
import tw from 'twrnc';

const Tabs = createBottomTabNavigator();

export const TabStackScreen = () => (
  <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName;
        let size;
        let color;
        if (route.name === 'Home') {
          iconName = 'dashboard';
          size = focused ? 20 : 15;
          color = focused ? '#002FD6' : '#848484';
        } else if (route.name === 'Profile') {
          iconName = 'person';
          size = focused ? 20 : 15;
          color = focused ? '#002FD6' : '#848484';
        } else if (route.name === 'Inbox') {
          iconName = 'inbox';
          size = focused ? 20 : 15;
          color = focused ? '#002FD6' : '#848484';
        }
        return (
          <Icon
            name={iconName}
            type="material"
            color={color}
            size={size}
            style={tw`mt-2`}
          />
        );
      },
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
      name="Home"
      component={DashboardStackScreen}
      options={{headerShown: false}}
    />
    <Tabs.Screen
      name="Profile"
      component={DashboardStackScreen}
      options={{headerShown: false}}
    />
    <Tabs.Screen
      name="Inbox"
      component={DashboardStackScreen}
      options={{headerShown: false}}
    />
  </Tabs.Navigator>
);

export default {
  TabStackScreen,
};
