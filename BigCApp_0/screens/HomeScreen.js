import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

const soundList = {
  one: require('../assets/themeLoop.wav')
};

export default class HomeScreen extends React.Component {
  
  playSound = async number => {
    const soundObject = new Audio.Sound();
      try{
        let path = soundList[number];
        await soundObject.loadAsync(path);
        await soundObject
        .playAsync()
        .then( async playbackStatus => {
         setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(error => {
          console.log(error);
        })
      }catch (error) {
        console.log(error);
      }
  };
  
  render(){
    return (
      <View style={styles.container}>
        <Image style = {styles.logo} source={require('../assets/logo.png')}/>
        <Text style={styles.text}>Big C App</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.iconHolder} onPress={() => { }}>
          <Button  
                title="Home"
                onPress={ () => {
                    //this.props.navigation.navigate("Home");
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
                    //this.props.navigation.navigate("Offers");
                } }
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconHolder} onPress={() => { }}>
          <Button  
                title="Account"
                onPress={ () => {
                    //this.props.navigation.navigate("Account");
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
    //marginBottom: 15
  },
  iconHolder: {
    flex: 1,
      alignItems: 'stretch',
      alignSelf: 'flex-end'
  },
  icon: {
    color: '#fff'
  }
 
});