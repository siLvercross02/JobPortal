import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
// Screens
import {SignInStackScreen} from './screens/auth/AuthPageStack';
import {DrawerStackScreen} from './screens/stacks/DrawerStackScreen';

// // Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);
// // Ignore all log notifications:
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInStackScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabs"
          component={DrawerStackScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
