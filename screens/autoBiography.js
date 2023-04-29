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

export default class AutoBioScreen extends Component {
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

        <Text style={styles.titleText}> Learn more about world reknown people! </Text>

        <View style={{ justifyContent: 'flex-start', marginTop: 15 }}>
          <Text style={styles.text}>
            1. Billy Connolly's Route 66: The Big Yin on the Ultimate American Road Trip
          </Text>
          <Text style={styles.text}>
            2.The Escape Artist: The Man Who Broke Out of Auschwitz to Warn the World
          </Text>
          <Text style={styles.text}>3. The Boys In The Boat: An Epic Journey to the Heart of Hitler's Berlin</Text>
          <Text style={styles.text}>4.Autobiography of George Thomas Clark</Text>
          <Text style={styles.text}>5. Diddly Squat: A Year on the Farm</Text>
          
          <Text style={styles.text}>
            6. Becoming By Michelle Obama
          </Text>
          <Text style={styles.text}>
            7. Long Walk To Freedom By Nelson Mandela
          </Text>
          <Text style={styles.text}>
            8. The Diary of a Young Girl By Anne Frank
          </Text>
          <Text style={styles.text}>
            9. Wings Of Fire By A.P.J. Abdul Kalam
          </Text>
          <Text style={styles.text}>
            10. The Story of My Life By Helen Keller
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
