import React from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopBar from "../../components/TopBar";
import DescriptionObject from "../../components/DescriptionObject";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class BookPageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  static navigationOptions = {
    drawerLabel: "Book page",
    header: null,
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="md-basket" size={23} color="white" />
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
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 0);
  }
  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            backgroundColor: variable.darkColor,
            flex: 1
          }}
        >
          <StatusBar barStyle="light-content" hidden={false} />
          <TopBar
            leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
            rightIcon={{
              name: "ios-person",
              action: this.onFav,
              size: 30
            }}
            topbarText={"Marcus Booking"}
          />
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      );
    }
    return (
      <View
        style={{
          backgroundColor: variable.darkColor,
          flex: 1,
          paddingTop: variable.contentPadding4x
        }}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          rightIcon={{
            name: "ios-person",
            action: this.onFav,
            size: 30
          }}
          topbarText={"Marcus Booking"}
        />
        <View style={styles.bookHeader}>
          <DescriptionObject
            title="Twin Room"
            text="Marcus D."
            containerStyle={styles.description}
            textColor={variable.whiteColor}
            image={require("../../assets/images/photos/01.jpeg")}
          />
          <View style={styles.dates}>
            <View style={styles.checkinout}>
              <Text style={styles.textInOut}>Check-In</Text>
              <Text style={styles.textDate}>21 mar 2018</Text>
            </View>

            <View style={styles.checkinout}>
              <Text style={styles.textInOut}>Check-Out</Text>
              <Text style={styles.textDate}>24 mar 2018</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.book}
            onPress={() => this.props.navigation.navigate("PaymentScreen")}
          >
            <Text style={styles.textDate}>Book now</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 4 }}>
          <ScrollView style={styles.bookingRules}>
            <Text style={[styles.rulesTitleMain]}>Booking Rules</Text>
            <View style={styles.rulesWrapper}>
              <View style={styles.rules}>
                <View style={styles.rulesIcon}>
                  <Ionicons
                    style={styles.iconstyle}
                    name="ios-checkmark-circle"
                    size={23}
                    color={variable.accentColor}
                  />
                </View>
                <Text style={styles.rulesTitle}>Do</Text>
              </View>
              <View style={styles.rulesContainer}>
                <Text>
                  By using or utilizing the Trip Service (e.g. by making a Trip
                  Reservation through the Trip Service), you enter into a direct
                  (legally binding) contractual relationship with the Trip
                  Provider.
                </Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.rules}>
                <View style={styles.rulesIcon}>
                  <Ionicons
                    style={styles.iconstyle}
                    name="ios-close-circle"
                    size={23}
                    color={variable.accentColor}
                  />
                </View>
                <Text style={styles.rulesTitle}>Don't</Text>
              </View>
              <View style={styles.rulesContainer}>
                <Text>
                  Smoking is not permitted anywhere in the our Hotel buildings.
                  Any guest found smoking inside the building, outside of the
                  designated areas, will be fined (£50.00 in London, €50 in
                  ClinkNOORD) and asked to leave the premises immediately.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
