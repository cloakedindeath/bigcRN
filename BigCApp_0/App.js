import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import OffersScreen from './screens/OffersScreen';
import MenuScreen from './screens/MenuScreen';
import AccountScreen from './screens/AccountScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Offers: { screen: OffersScreen },
  Menu: { screen: MenuScreen },
  Account: { screen: AccountScreen }
},
{
  headerLayoutPreset: 'center'
},
{
  defaultNavigationOptions: {
    headerLeft: null,
    headerTintColor: '#FFf',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#fff',
      height: 60,
    },
    headerTitleStyle: {
      color: '#192A56',
      fontWeight: 'bold'
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
