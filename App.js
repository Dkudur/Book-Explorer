import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/home';
import SciFiScreen from './screens/scifi';
import ActionScreen from "./screens/action"
import FantasyScreen from './screens/fantasy';
import MysteryScreen from './screens/mystery';
import HorrorScreen from './screens/horror'
import AutoBioScreen from './screens/autoBiography'
import ReligousScreen from './screens/religous'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Home : HomeScreen,
  SciFi : SciFiScreen,
  Action : ActionScreen,
  Fantasy : FantasyScreen,
  Mystery  : MysteryScreen,
  Horror  : HorrorScreen,
  AutoBio : AutoBioScreen,
  Religous : ReligousScreen,

});


const AppContainer = createAppContainer(AppNavigator);
