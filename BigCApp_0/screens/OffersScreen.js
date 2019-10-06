import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';



export default class OffersScreen extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Offers Screen</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
      color: "#000"
  }
 
});