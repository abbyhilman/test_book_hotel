import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import AddGuest from '../pages/AddGuest';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Payment Details',
          headerStyle: {backgroundColor: '#325897'},
          headerTintColor: '#c3d8eb',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AddGuest"
        component={AddGuest}
        options={{
          title: 'Tambah Data Tamu',
          headerStyle: {backgroundColor: '#325897'},
          headerTintColor: '#c3d8eb',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
