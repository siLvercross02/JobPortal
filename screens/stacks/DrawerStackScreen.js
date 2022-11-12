import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/layout/DrawerContent';
import {TabStackScreen} from './TabStackScreen';

const Drawer = createDrawerNavigator();

export const DrawerStackScreen = () => (
  <Drawer.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Dashboard" component={TabStackScreen} />
  </Drawer.Navigator>
);

export default {
  DrawerStackScreen,
};
