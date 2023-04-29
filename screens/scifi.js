import React, { Component } from "react";
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
} from "react-native";

export default class SciFiScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {"<-- "}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}> Explore The World Of Science & Fiction </Text>

        <View style={{ justifyContent: "flex-start", marginTop: 15 }}>
          <Text style={styles.text}>
            1. The Martian Chronicles
          </Text>
          <Text style={styles.text}>
            2.Fahrenheit 451
          </Text>
          <Text style={styles.text}>3. Dune</Text>
          <Text style={styles.text}>4.Do Androids Dream of Electric Sheep?</Text>
          <Text style={styles.text}>5. Dragonflight</Text>
          
          <Text style={styles.text}>
            6.The Forever War
          </Text>
          <Text style={styles.text}>7. Avalon</Text>
          <Text style={styles.text}>
            8.Necromancer
          </Text>
          <Text style={styles.text}>
            9. Dawn
          </Text>
          <Text style={styles.text}>
            10.The Player of Games
          </Text>
          <Text style={styles.text}>
            11. Hyperion
          </Text>
          <Text style={styles.text}>
            12.Star Wars: Heir to the Empire
          </Text>
          <Text style={styles.text}>
            13. The Sandman: Preludes & Nocturnes
          </Text>
          <Text style={styles.text}>
            14.Ammonite
          </Text>
          <Text style={styles.text}>
            15. Snow Crash
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e8d166",
    padding: 8,
  },
  backButton: {
    marginTop: 30,
    width: 40,
    height: 25,
    borderRadius: 30,
    backgroundColor: "beige",
  },
  titleText: {
    margin: 24,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    marginTop: 15,
  },
  button: {
    marginTop: 30,
    width: 150,
    height: 60,
    borderRadius: 40,
    backgroundColor: "#440083",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "algerian",
    color: "white",
    textAlign: "center",
  },
});
