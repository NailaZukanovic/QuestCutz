import React from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopBar from "../../components/TopBar";
import DescriptionObject from "../../components/DescriptionObject";
import Recommendation from "../../components/Recommendation";
import { dh } from "../../components/Scaler";
import { tempObjects, RECS } from "./data";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class SearchHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1,
      loading: true
    };
  }
  static navigationOptions = {
    drawerLabel: "Result Search Page",
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="md-search" size={23} color={tintColor} />
    )
  };
  OnBack = () => {
    this.props.navigation.navigate("HomePage");
  };
  onFav = () => {
    this.props.navigation.navigate({
      routeName: "ProfileScreen",
      key: "ProfileScreen"
    });
  };
  onChangeRecommendation = i => {
    if (this.state.active === i) {
      this.setState({ active: -1 });
    } else {
      this.setState({ active: i });
    }
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 0);
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _keyboardDidShow = () => {};
  _keyboardDidHide = () => {};
  renderRecommendations = () => {
    return RECS.map((rec, i) => {
      if (this.state.active === i) {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => this.onChangeRecommendation(i)}
          >
            <Recommendation
              active={true}
              source={rec.source}
              rating={rec.rating}
              hotelsNum={rec.hotelsNum}
              title={rec.title}
            />
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => this.onChangeRecommendation(i)}
          >
            <Recommendation
              active={false}
              source={rec.source}
              rating={rec.rating}
              hotelsNum={rec.hotelsNum}
              title={rec.title}
            />
          </TouchableOpacity>
        );
      }
    });
  };
  renderObjects = objects => {
    return objects.map((item, i) => {
      return (
        <View key={i} style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "HotelPage",
                key: "HotelPage"
              });
            }}
          >
            <DescriptionObject
              title={item.title}
              text={item.text}
              rating={item.rating}
              priceText={item.priceText}
              image={item.image}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      );
    });
  };
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
            topbarText={"Barber Search"}
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
          topbarText={"Barber Search"}
        />
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.main}>
            <Text style={styles.text}>Find a barber near you</Text>
            <Text style={styles.textDistricts}>Popular barbers</Text>
            <ScrollView horizontal={true} style={styles.photo}>
              {this.renderRecommendations()}
            </ScrollView>
          </View>
          <View style={styles.bottomBlock}>
            <View style={styles.paddingBlock}>
              <Text style={styles.textRecommended}>Recommended</Text>
              <TouchableOpacity
                style={styles.touchableOpacityBlock}
                onPress={() => {
                  this.props.navigation.navigate({
                    routeName: "FilterPage",
                    key: "FilterPage"
                  });
                }}
              >
                <Text style={styles.filter}>Filter</Text>
                <Ionicons
                  name="md-options"
                  size={23 * dh}
                  color={variable.blackColor}
                />
              </TouchableOpacity>
            </View>
            {this.renderObjects(tempObjects)}
          </View>
          <View style={styles.lastBlock} />
        </ScrollView>
      </View>
    );
  }
}
