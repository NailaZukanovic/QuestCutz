import React from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopBar from "../../components/TopBar";
import FilterTopTabNavigator from "../../navigation/FilterTopTabNavigator";
import { dw } from "../../components/Scaler";
import styles from "./styles";
export default class FilterPageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  static navigationOptions = {
    drawerLabel: "Filter Page",
    header: null,
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="ios-options" size={23 * dw} color={tintColor} />
    )
  };
  OnBack = () => {
    this.props.navigation.goBack();
  };
  onFav = () => {
    this.props.navigation.navigate({
      routeName: "ProfileScreen",
      key: "ProfileScreen"
    });
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 0);
  }
  static router = FilterTopTabNavigator.router;
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.mainView}>
          <StatusBar barStyle="light-content" hidden={false} />
          <TopBar
            leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
            rightIcon={{
              name: "ios-person",
              action: this.onFav,
              size: 30
            }}
            topbarText={"Recommended Hotels in Roma"}
          />
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.mainView}>
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          rightIcon={{
            name: "ios-person",
            action: this.onFav,
            size: 30
          }}
          topbarText={"Recommended Hotels in Roma"}
        />
        <FilterTopTabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}
