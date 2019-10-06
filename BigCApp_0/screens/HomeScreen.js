import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

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

  static navigationOptions = {
    title: "Big C Waffles"
  };
  
  render(){
    return (
      <ImageBackground style={styles.container} source={require('../assets/cropped-people.jpg')} >
        <Image style = {styles.logo} source = {require('../assets/logo.png')} />  
        <Text style={styles.bannerText}>Welcome to Big C Waffles</Text>
        <Text style={styles.bannerSubtext}>The best waffles on earth</Text>
        <View style={{flex: 1, backgroundColor: "#fff", marginTop: 100}}>
          <Text style={styles.Hourstext}>HOURS OF OPERATION</Text>
          <Text style={styles.HoursSubtext}>Monday: CLOSED</Text>
          <Text style={styles.HoursSubtext}>Tuesday through Friday: 11am - 10pm</Text>
          <Text style={styles.HoursSubtext}>Saturday: 11am - 10pm</Text>
          <Text style={styles.HoursSubtext}>Sunday: 11am - 4pm</Text>
        </View>
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
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  logo: {
    marginTop: 15,
    height: 150,
    width: 150
    
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
    color: '#192A56'
  },
  backgroundImage: {
    height: 650
  },
  bannerText: {
    marginTop: 40,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6,
    shadowRadius: 1,
    borderColor: "#fff",
    borderRadius:  1,
    borderStyle: 'solid',
    fontStyle: 'italic'
  },
  bannerSubtext: {
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic',
    alignSelf: 'center'
  },
  Hourstext: {
    color: '#192A56',
    textDecorationLine: 'underline',
    alignItems: 'center'

  }
});




