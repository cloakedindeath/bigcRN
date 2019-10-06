import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';



export default class AccountScreen extends React.Component {
  
    static navigationOptions = {
        title: "Account"
      };

  render(){
    return (
        <View style={styles.container}>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.iconHolder} onPress={() => { }}>
            <Button  
                  title="Home"
                  onPress={ () => {
                      this.props.navigation.navigate("Home");
                  } }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconHolder} onPress={() => { }}>
            <Button  
                  title="Offers"
                  onPress={ () => {
                      this.props.navigation.navigate("Offers");
                  } }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconHolder} onPress={() => { }}>
            <Button  
                  title="Menu"
                  onPress={ () => {
                      this.props.navigation.navigate("Menu");
                  } }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconHolder} onPress={() => { }}>
            <Button  
                  title="Account"
                  full
                  onPress={ () => {
                      this.props.navigation.navigate("Account");
                  } }
              />
            </TouchableOpacity>
          </View>
          
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3498DB',
      alignItems: 'center'
    },
    logo: {
      height: 300,
      width: 300,
      alignItems: "center",
      marginTop: 15
    },
    text: {
      color: "#fff",
      fontSize: 25,
      fontWeight: "bold"
    }, 
    btnText: {
      color: '#fff'
    },
    actionContainer: {
      flex: 1,
      flexDirection: 'row',
     
    },
    iconHolder: {
      flex: 1,
      alignItems: 'stretch',
      alignSelf: 'flex-end'
    },
    icon: {
      color: '#fff',
    }
   
  });