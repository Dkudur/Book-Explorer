import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <ImageBackground
          source={require("../assets/book.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.titleBar}>
            <Text style={styles.titleText}> Book Explorer </Text>
          </View>

          <View style={{ marginTop: 50 }}>
            <Text style={styles.routeText}> Pick Your Genre </Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate("SciFi");
            }}
          >
            <Text style={styles.routeText}>Sci-fi</Text>

            <Image
              source={require("../assets/chemical.png")}
              style={[styles.iconImage , {marginTop:30, marginLeft:20}]}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate("Action");
            }}
          >
            <Text style={styles.routeText}>Action</Text>
            <Image
              source={require("../assets/boxing.png")}
              style={[styles.iconImage , {marginTop:30, marginLeft:20}]}
            ></Image>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate("Fantasy");
            }}
          >
            <Text style={styles.routeText}>Fantasy</Text>

            <Image
              source={require("../assets/ball.png")}
              style={[styles.iconImage , {marginTop:30, marginLeft:20}]}
            ></Image>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate("Mystery");
            }}
          >
            <Text style={styles.routeText}>Mystery</Text>

            <Image
              source={require("../assets/mystery-hat.png")}
              style={[styles.iconImage , {marginTop:30, marginLeft:20}]}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate("AutoBiography");
            }}
          >
            <Text style={styles.routeText}>AutoBio</Text>

            <Image
              source={require("../assets/th.png")}
              style={[styles.iconImage , {marginTop:30, marginLeft:20}]}
            ></Image>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate("Horror");
            }}
          >
            <Text style={styles.routeText}>Horror</Text>

            <Image
              source={require("../assets/claw.png")}
              style={[styles.iconImage , {marginTop:30, marginLeft:20}]}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate("Religous");
            }}
          >
            <Text style={styles.routeText}>Religous</Text>

            <Image
              source={require("../assets/yinyang.png")}
              style={[styles.iconImage , {marginTop:30, marginLeft:20}]}
            ></Image>
          </TouchableOpacity>



        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: "#FFB6C1",
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    textAlign:"center"
  },
  iconImage: {
    height: 70,
    width: 70,
    resizeMode: "contain",
    right: 20,
    top: -80,
  },
});
