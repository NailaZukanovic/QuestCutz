import React, { Component } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import tempSlides from "./data";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopBar from "../../components/TopBar";
import Slider from "../../components/Slider";
import HotelTopTabNavigator from "../../navigation/HotelTopTabNavigator";
import { dw } from "../../components/Scaler";

export default class HotelPageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "About",
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 0);
    this.props.navigation.state.routes.forEach(route => {
      route.params = { onChangeView: this.onChangeView };
    });
  }
  onChangeView = view => {
    this.setState({ currentView: view });
  };
  static router = HotelTopTabNavigator.router;
  static navigationOptions = {
    drawerLabel: "Hotel Page",
    header: null,
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="ios-cart" size={23 * dw} color="white" />
    )
  };
  OnBack = () => {
    this.props.navigation.goBack(null);
  };
  onFav = () => {
    this.props.navigation.navigate({
      routeName: "ProfileScreen",
      key: "ProfileScreen"
    });
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.containerBlock}>
          <StatusBar barStyle="light-content" hidden={false} />
          <TopBar
            leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
            rightIcon={{
              name: "ios-person",
              action: this.onFav,
              size: 30
            }}
            topbarText={"Hyatt Roma Lounge"}
          />
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      );
    }
    let slider = null;
    if (this.state.currentView !== "Map") {
      slider = <Slider slides={tempSlides} />;
    }
    return (
      <View style={styles.containerBlock}>
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          rightIcon={{
            name: "ios-person",
            action: this.onFav,
            size: 30
          }}
          topbarText={"Hyatt Roma Lounge"}
        />
        {slider}
        <View style={styles.underSlider}>
          <View style={styles.navigationBlock}>
            <HotelTopTabNavigator navigation={this.props.navigation} />
          </View>
        </View>
      </View>
    );
  }
}
