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

export default class MysteryScreen extends Component {
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

        <Text style={styles.titleText}> Welcome To Mystery Land </Text>

        <View style={{ justifyContent: "flex-start", marginTop: 15 }}>
          <Text style={styles.text}>1. Time and Again</Text>
          <Text style={styles.text}>2.A Thief of Time</Text>
          <Text style={styles.text}>3. Rogue Male</Text>
          <Text style={styles.text}>4.The Killer Inside me</Text>
          <Text style={styles.text}>5. The Hunt for Red October</Text>
          <Text style={styles.text}>6.Beats In View</Text>
          <Text style={styles.text}>7. Little Caesar</Text>
          <Text style={styles.text}>8. Last Seen Wearing</Text>
          <Text style={styles.text}>9.A Time To Kill</Text>
          <Text style={styles.text}>10. Stick</Text>
          <Text style={styles.text}>11.Dracula</Text>
          <Text style={styles.text}>12. A Flicker In Thye Dark</Text>
          <Text style={styles.text}>13.The Guest List</Text>
          <Text style={styles.text}>14. Murder At Haven's Rock</Text>
          <Text style={styles.text}>15. Seven faceless Saints</Text>
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
