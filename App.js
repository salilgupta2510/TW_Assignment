import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FeedStack from './src/Navigation/FeedStack';
import RestaurantStack from './src/Navigation/RestaurantStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen 
            name="Feeds" 
            component={FeedStack} 
            options={{ title: 'Feeds'}} 
            listeners={({ navigation }) => ({
            tabPress: () => {
              navigation.navigate('Feed', {
                screen: 'Feeds',
              });
            },
          })} />
          <Tab.Screen 
            name="Restaurants" 
            component={RestaurantStack} 
            options={{ title: 'Restaurants'}} 
            listeners={({ navigation }) => ({
            tabPress: () => {
              navigation.navigate('Restaurant', {
                screen: 'Restaurants',
              });
            },
          })} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}