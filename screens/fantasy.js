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

export default class FantasyScreen extends Component {
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

        <Text style={styles.titleText}> Feeling abit superhuman? </Text>

        <View style={{ justifyContent: 'flex-start', marginTop: 15 }}>
          <Text style={styles.text}>
            1. Moon Rising
          </Text>
          <Text style={styles.text}>
            2.The Dragonet Prophecy
          </Text>
          <Text style={styles.text}>3. Escaping Peril</Text>
          <Text style={styles.text}>4.Shadow and Bone</Text>
          <Text style={styles.text}>5. Siege and Strom</Text>
          <Text style={styles.text}>
            6.Ruin and Rising
          </Text>
          <Text style={styles.text}>7. Talons of Power</Text>
          <Text style={styles.text}>
            8. The Lost Heir
          </Text>
          <Text style={styles.text}>
            9.The Secret Kingdom
          </Text>
          <Text style={styles.text}>
            10. The Brightest Night
          </Text>
          <Text style={styles.text}>
            11.The Lost Continent
          </Text>
          <Text style={styles.text}>
            12. The Dangerous Gift
          </Text>
          <Text style={styles.text}>
            13.The Flames Of Hope
          </Text>
          <Text style={styles.text}>
            14. Winter Turning
          </Text>
          <Text style={styles.text}>
            15. The Dark Secret
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
