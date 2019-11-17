import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import variable from "./variables/commonColors";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/photos/b1.jpeg"),
        require("./assets/images/photos/b2.jpeg"),
        require("./assets/images/photos/b3.png"),
        require("./assets/images/photos/4.jpeg"),
        require("./assets/images/photos/5.jpeg"),
        require("./assets/images/photos/01.jpeg"),
        require("./assets/images/photos/02.jpeg"),
        require("./assets/images/photos/03.jpeg"),
        require("./assets/images/photos/04.jpeg"),
        require("./assets/images/photos/05.jpeg"),
        require("./assets/images/photos/06.jpeg"),
        require("./assets/images/photos/07.jpeg"),
        require("./assets/images/photos/08.jpeg"),
        require("./assets/images/photos/face.png"),
        require("./assets/images/photos/f1.jpg"),
        require("./assets/images/photos/f2.jpeg"),
        require("./assets/images/photos/f3.jpg"),
        require("./assets/images/photos/f4.jpeg"),
        require("./assets/images/photos/f5.jpeg")
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    //console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variable.darkColor
  }
});
