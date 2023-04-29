import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class ActionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate("Home")}
          >
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
              }}>
              {'<-- '}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}> How About Some Action?! </Text>

        <View style={{ justifyContent: 'flex-start', marginTop: 15 }}>
          <Text style={styles.text}>
            1. Winter Soldier
          </Text>
          <Text style={styles.text}>
            2.The Hunger Games
          </Text>
          <Text style={styles.text}>3. Divergent</Text>
          <Text style={styles.text}>4.Insurgent</Text>
          <Text style={styles.text}>5. The Lightning Thief</Text>
          <Text style={styles.text}>
            6.The Maze Runner
          </Text>
          <Text style={styles.text}>7. Catching Fire</Text>
          <Text style={styles.text}>
            8. Mockingjay
          </Text>
          <Text style={styles.text}>
            9.City of Bones
          </Text>
          <Text style={styles.text}>
            10. Harry Potter the Philospher's Stone
          </Text>
          <Text style={styles.text}>
            11.Ready Player One
          </Text>
          <Text style={styles.text}>
            12. Crooked Kingdom
          </Text>
          <Text style={styles.text}>
            13.Scarlet
          </Text>
          <Text style={styles.text}>
            14. Deception Point
          </Text>
          <Text style={styles.text}>
            15.Die Trying
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e8d166',
    padding: 8,
  },
  backButton:{
     marginTop: 30, width:40 , height:25,borderRadius:30 ,
     backgroundColor:"beige" 
  },
  titleText: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 15,
  },
  button: {
    marginTop: 30,
    width: 150,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#440083',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'algerian',
    color: 'white',
    textAlign: 'center',
  },
});
