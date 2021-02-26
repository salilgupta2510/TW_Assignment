import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantScreen from '../Modules/restaurant';
import {fp, hp} from '../Styles/normalize'
const Stack = createStackNavigator();


export default function RestaurantStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{
            title: 'Recipes',
            headerStyle: {
              backgroundColor: '#73c700',
              height: hp(120)
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: fp(34)
            },
          }}
      />
    </Stack.Navigator>
  );
}
