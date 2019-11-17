import React from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import TopBar from "../../components/TopBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import DescriptionObject from "../../components/DescriptionObject";
import Menu from "../../assets/images/svg/Menu";
import ProfileTopTabNavigator from "../../navigation/ProfileTopTabNavigator";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingsOpened: true,
      loading: true
    };
  }
  static router = ProfileTopTabNavigator.router;
  static navigationOptions = {
    drawerLabel: "User Profile Page",
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="ios-person" size={23} color={tintColor} />
    )
  };
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 0);
  }

  renderMyBookings = objects => {
    return objects.map((item, i) => {
      if (this.state.bookingsOpened === true) {
        return (
          <View key={i}>
            <TouchableOpacity
              style={{ paddingHorizontal: variable.contentPadding2x }}
              key={i}
              onPress={() => {
                this.props.navigation.navigate({
                  routeName: "BookPage",
                  key: "BookPage"
                });
              }}
            >
              <DescriptionObject
                key={i}
                title={item.title}
                text={item.text}
                date={item.dateText}
                image={item.image}
                price={item.price}
                secondDate={item.secondDate}
                textColor={variable.darkColor}
                imagePosition="left"
              />
            </TouchableOpacity>
            <View style={styles.divider} />
          </View>
        );
      } else {
        null;
      }
    });
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" hidden={false} />
          <TopBar
            leftIconComponent={<Menu />}
            leftIcon={{ action: this.toggleDrawer }}
            topbarText="Profile"
          />
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIconComponent={<Menu />}
          leftIcon={{ action: this.toggleDrawer }}
          topbarText="Profile"
        />
        <View style={styles.mainView}>
          <View style={styles.mainView}>
            <View style={styles.firstImageBlock}>
              <View style={styles.imageBlock}>
                <Image
                  source={require("../../assets/images/photos/face.png")}
                  style={styles.imageStyle}
                />
              </View>
              <View style={styles.personBlock}>
                <Text style={styles.textName}>Alex Stones</Text>
              </View>
            </View>
          </View>
          <View style={styles.topTabNav}>
            <ProfileTopTabNavigator navigation={this.props.navigation} />
          </View>
        </View>
      </View>
    );
  }
}
