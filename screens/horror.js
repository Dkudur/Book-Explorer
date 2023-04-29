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

export default class HorrorScreen extends Component {
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

        <Text style={styles.titleText}> Do you like goosebumps? </Text>

        <View style={{ justifyContent: 'flex-start', marginTop: 15 }}>
          <Text style={styles.text}>
            1. The House
          </Text>
          <Text style={styles.text}>
            2.Creature
          </Text>
          <Text style={styles.text}>3. The Playroom</Text>
          <Text style={styles.text}>4.Infested</Text>
          <Text style={styles.text}>5. Twilight Eyes</Text>
          <Text style={styles.text}>
            6.Madhouse
          </Text>
          <Text style={styles.text}>7. Forest Of The Damned</Text>
          <Text style={styles.text}>
            8. Feral
          </Text>
          <Text style={styles.text}>
            9.Hospital
          </Text>
          <Text style={styles.text}>
            10. Pinata
          </Text>
          <Text style={styles.text}>
            11.One by One
          </Text>
          <Text style={styles.text}>
            12. Fairy Tale
          </Text>
          <Text style={styles.text}>
            13.If You Tell
          </Text>
          <Text style={styles.text}>
            14. Hell Bent
          </Text>
          <Text style={styles.text}>
            15.The Push
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
