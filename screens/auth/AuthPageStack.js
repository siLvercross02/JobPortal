import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../../components/layout/HeaderAuth';
import Gradient from '../../components/layout/GradientHeader';
// Screens
import SignIn from './Login/SignIn';

const SignInStack = createStackNavigator();

export const SignInStackScreen = () => (
  <SignInStack.Navigator>
    <SignInStack.Screen
      name="SignInScreen"
      component={SignIn}
      options={{
        headerShown: false,
        // headerTitle: () => <Header title="Sign In" />,
        // headerBackground: () => <Gradient />,
        // headerTintColor: '#fff',
        // headerStyle: {
        //   backgroundColor: '#0052e2',
        // },
        // headerTitleAlign: 'center',
      }}
    />
  </SignInStack.Navigator>
);

export default {
  SignInStackScreen,
};
