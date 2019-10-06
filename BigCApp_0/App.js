import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import OffersScreen from './screens/OffersScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Offers: { screen: OffersScreen }
},
{
  defaultNavigationOptions: {
    headerTintColor: '#FFf',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#3498DB',
      height: 55
    },
    headerTitleStyle: {
      color: "#FFF"
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
