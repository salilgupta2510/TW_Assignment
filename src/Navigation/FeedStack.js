import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import FeedsScreen from '../Modules/feeds';
import SubFeed from '../Modules/feeds/subFeed';
import {fp, hp, spH} from '../Styles/normalize'
const Stack = createStackNavigator();


export default function FeedStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Feed"
        component={FeedsScreen}
        options={{
            title: 'Recipes',
            headerStyle: {
              backgroundColor: '#73c700',
              height: hp(100)
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: fp(34),
                fontWeight: '400',
                marginRight: spH(220)
            },
          }}
      />
      <Stack.Screen
        name='Details'
        component={SubFeed}
        options={({ navigation }) => ({
            headerLeft: (props) => (
                <HeaderBackButton
                  {...props}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />),     
          headerBackTitleVisible: true,
          headerStyle: {
            backgroundColor: '#73c700',
            height: hp(100)
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontSize: fp(34),
            fontWeight: '400'},
        })}
      />
    </Stack.Navigator>
  );
}
