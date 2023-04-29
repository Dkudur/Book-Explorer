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

export default class ReligousScreen extends Component {
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

        <Text style={styles.titleText}> Enlighten yourself </Text>

        <View style={{ justifyContent: "flex-start", marginTop: 15 }}>
          <Text style={styles.text}>1. Bible </Text>
          <Text style={styles.text}>2. Bhagawat Gita </Text>
          <Text style={styles.text}>3. Holy Quran </Text>
          <Text style={styles.text}>4. Faith</Text>
          <Text style={styles.text}>5. Guru Granth Sahib </Text>
          <Text style={styles.text}>6. The Promise of Beauty and Why It Matters</Text>
          <Text style={styles.text}>7. Catholic Prayers</Text>
          <Text style={styles.text}>8. Islam The Misunderstood Religion</Text>
          <Text style={styles.text}>9. The Holy Vedas</Text>
          <Text style={styles.text}>10. Behold, I Make All Things New</Text>
          <Text style={styles.text}>11. Why We're Catholics</Text>
          <Text style={styles.text}>12. Knowing God</Text>
          <Text style={styles.text}>13. A Complete Introduction to Judaism</Text>
          <Text style={styles.text}>14. A Desolation Called Peace</Text>
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
