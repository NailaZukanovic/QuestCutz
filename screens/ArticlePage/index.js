import React from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Animated,
  ActivityIndicator
} from "react-native";

import Slider from "../../components/Slider";
import TopBar from "../../components/TopBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import tempSlides from "./data";
import { dw, dh } from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceOpened: false,
      arrowDown: true,
      loading: true
    };
    this.transformer = new Animated.Value(0);
    this.rotater = new Animated.Value(1);
  }

  static navigationOptions = {
    drawerLabel: "Article Page",
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="ios-bookmark" size={23 * dw} color={tintColor} />
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
  togglePrice = () => {
    if (this.state.priceOpened === false) {
      this.setState({ priceOpened: true, arrowDown: false });
      Animated.timing(this.transformer, {
        duration: 300,
        toValue: 1
      }).start(() => {});
      Animated.timing(this.rotater, {
        duration: 300,
        toValue: 0
      }).start(() => {});
    } else {
      Animated.timing(this.transformer, {
        duration: 300,
        toValue: 0
      }).start(() => {
        this.setState({ priceOpened: false });
      });
      Animated.timing(this.rotater, {
        duration: 300,
        toValue: 1
      }).start(() => {
        this.setState({ arrowDown: true });
      });
    }
  };
  showPrice = () => {
    if (this.state.priceOpened === true) {
      return (
        <Animated.View
          style={{
            height: this.transformer.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 50 * dh]
            }),
            backgroundColor: variable.whiteColor,
            paddingHorizontal: variable.contentPadding2x * dw,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: variable.contentPadding2x * dh
          }}
        >
          <View style={styles.news} />
          <Text style={styles.textNews}>
            DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid.
          </Text>
        </Animated.View>
      );
    } else {
      null;
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.articleContainer}>
          <StatusBar barStyle="light-content" hidden={false} />
          <TopBar
            leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
            rightIcon={{
              name: "ios-person",
              action: this.onFav,
              size: 30
            }}
            topbarText="Barber Shop"
          />
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.articleContainer}>
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          rightIcon={{
            name: "ios-person",
            action: this.onFav,
            size: 30
          }}
          topbarText="Marucs"
        />
        <ScrollView style={styles.scrollArticle}>
          <View style={styles.date}>
            <Text style={styles.textDate}>March 21 2018</Text>
          </View>
          <View style={styles.articleTitle}>
            <Text style={styles.weeklyNews}>Good House Hotel</Text>
          </View>

          <View style={styles.mainTitle}>
            <Slider slides={tempSlides} />
            <View style={styles.topicBlock}>
              <View style={styles.mainTopic}>
                <Text style={styles.textDate}>We have Non-smoking rooms</Text>
                <Text style={styles.textDate}>We have Heating rooms</Text>
                <Text style={styles.textDate}>We have Free WiFi</Text>
              </View>
            </View>
            <View style={styles.articleNews}>
              <Text style={styles.mainText}>
                Good House is located in London, 1.9 km from Brixton Academy.
                Around 2.4 km from Battersea, the property is also 3.7 km away
                from Westminster Abbey and offers free WiFi. At the guesthouse,
                each room is equipped with a closet and a TV. Rooms contain a
                shared bathroom with a hair dryer. London City Airport is 17.7
                km from the property. Lambeth is a great choice for travelers
                interested in tourist attractions, city walks and history.
                London Airport is 13.7 km from the other place.
              </Text>
            </View>
          </View>
          <View style={styles.lastBlock} />
        </ScrollView>
      </View>
    );
  }
}
