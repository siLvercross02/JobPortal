import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from '@rneui/themed';
import Header from '../../components/layout/HeaderAuth';
import Gradient from '../../components/layout/GradientHeader';
import tw from 'twrnc';
import Dashboard from '../client/Dashboard/Dashboard';
import ViewJob from '../client/Job/ViewJob';
import ApplyJob from '../client/Job/ApplyJob';
import Success from '../client/Job/Success';

const DashboardStack = createStackNavigator();

export const DashboardStackScreen = ({navigation}) => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name="DashboardScreen"
      component={Dashboard}
      options={{
        headerTitle: () => <Header title="Dashboard" />,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          borderColor: '#0052e2',
          shadowOpacity: 0,
          shadowColor: '#0052e2',
          width: '100%',
        },
        headerBackground: () => <Gradient />,
        headerLeft: () => (
          <Icon
            name="menu"
            type="material"
            size={25}
            color="#fff"
            iconStyle={tw`ml-4`}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />

    <DashboardStack.Screen
      name="ViewJobScreen"
      component={ViewJob}
      options={{
        headerTitle: () => <Header title="Job Details" />,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          borderColor: '#0052e2',
          shadowOpacity: 0,
          shadowColor: '#0052e2',
          width: '100%',
        },
        headerBackground: () => <Gradient />,
        headerLeft: () => (
          <Icon
            name="arrow-back"
            type="material"
            size={25}
            color="#fff"
            iconStyle={tw`ml-4`}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

    <DashboardStack.Screen
      name="ApplyJobScreen"
      component={ApplyJob}
      options={{
        headerTitle: () => <Header title="Job Details" />,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          borderColor: '#0052e2',
          shadowOpacity: 0,
          shadowColor: '#0052e2',
          width: '100%',
        },
        headerBackground: () => <Gradient />,
        headerLeft: () => (
          <Icon
            name="arrow-back"
            type="material"
            size={25}
            color="#fff"
            iconStyle={tw`ml-4`}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />

    <DashboardStack.Screen
      name="SuccessScreen"
      component={Success}
      options={{
        headerTitle: () => <Header title="Job Details" />,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          borderColor: '#0052e2',
          shadowOpacity: 0,
          shadowColor: '#0052e2',
          width: '100%',
        },
        headerBackground: () => <Gradient />,
        headerLeft: () => (
          <Icon
            name="arrow-back"
            type="material"
            size={25}
            color="#fff"
            iconStyle={tw`ml-4`}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    />
  </DashboardStack.Navigator>
);

export default {
  DashboardStackScreen,
};
