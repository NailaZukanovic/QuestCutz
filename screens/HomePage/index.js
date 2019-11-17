import React from "react";
import {
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
  Keyboard
} from "react-native";
import TopBar from "../../components/TopBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import Logo from "../../assets/images/svg/Logo";
import Gift from "../../assets/images/svg/Gift";
import Menu from "../../assets/images/svg/Menu";
import CheckBox from "../../components/CheckBox";
import LabeledInput from "../../components/LabeledInput";
import CalendarRangeInput from "../../components/CalendarRangeInput";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { dw, dh } from "../../components/Scaler";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      purpose: "leisure",
      subscribeFocus: false,
      calendarOpened: false,
      checkInFocused: false,
      checkOutFocused: false,
      checkInValue: "",
      checkOutValue: "",
      wrongEmail: false,
      email: null
    };
    this.viewHeight = new Animated.Value(1);
    this.calendarHeight = new Animated.Value(0);
  }
  static navigationOptions = {
    drawerBackgroundColor: variable.darkColor,
    drawerLabel: "Search Home Page",
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="ios-home" size={23} color={tintColor} />
    )
  };
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  onSubscribeFocus = () => {
    this.setState({ subscribeFocus: true });
  };
  onSubscribeBlur = () => {
    this.setState({ subscribeFocus: false });
  };
  componentDidMount() {
    if (Platform.OS === "ios") {
      this.keyboardShowListener = Keyboard.addListener(
        "keyboardWillShow",
        this.keyboardShow
      );
      this.keyboardHideListener = Keyboard.addListener(
        "keyboardWillHide",
        this.keyboardHide
      );
    } else {
      this.keyboardShowListener = Keyboard.addListener(
        "keyboardDidShow",
        this.keyboardShow
      );
      this.keyboardHideListener = Keyboard.addListener(
        "keyboardDidHide",
        this.keyboardHide
      );
    }
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = event => {
    if (this.state.subscribeFocus) {
      Animated.timing(this.viewHeight, {
        duration: 250,
        toValue: 0
      }).start();
    }
  };
  keyboardHide = event => {
    if (!this.state.subscribeFocus) {
      Animated.timing(this.viewHeight, {
        duration: 250,
        toValue: 1
      }).start();
    }
  };
  onCheck = val => {
    if (this.state.purpose !== val) {
      this.setState({ purpose: val });
    } else {
      this.setState({ purpose: "" });
    }
  };
  renderLogoWithText = () => {
    return (
      <View style={styles.logoWithText}>
        {/* <Logo style={styles.logoStyle} /> */}
        <Text style={styles.topbarText}>QuestCuts</Text>
      </View>
    );
  };
  onSubmit = () => {
    if (this.state.email === null) {
      this.setState({ email: "" });
    }
    if (
      this.state.wrongEmail !== true &&
      this.state.email !== null &&
      this.state.email !== ""
    ) {
      this.props.navigation.navigate({
        routeName: "SubscribeResultScreen",
        key: "SubscribeResultScreen"
      });
    }
  };
  render() {
    let mailValid = null;

    if (this.state.email === "") {
      mailValid = <Text style={styles.requiredField}>Required field</Text>;
    }
    if (this.state.wrongEmail === true) {
      mailValid = <Text style={styles.requiredField}>Invalid field</Text>;
    }
    return (
      <ScrollView
        style={{ flex: 1, zIndex: 0 }}
        scrollEnabled={false}
        contentContainerStyle={styles.scrollViewBlock}
      >
        <StatusBar barStyle="light-content" />
        <TopBar
          style={{ zIndex: 1 }}
          leftIconComponent={<Menu />}
          leftIcon={{ action: this.toggleDrawer }}
          rightIcon={{
            name: "ios-person",
            action: () => {
              this.props.navigation.navigate({
                routeName: "ProfileScreen",
                key: "ProfileScreen"
              });
            },
            size: 30
          }}
          renderTitle={this.renderLogoWithText}
        />
        <Animated.View
          style={{
            backgroundColor: variable.darkColor,
            opacity: this.viewHeight,
            transform: [
              {
                translateY: this.viewHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-461 * dh, 0]
                })
              }
            ]
          }}
        >
          <View style={styles.secondContainer}>
            <Text style={styles.searchHeader}>Search</Text>
            <FontAwesomeIcon
              name="minus"
              size={15}
              color={variable.whiteColor}
            />
          </View>
          <View style={styles.destination}>
            <Text style={styles.searchText}>Barbers around you</Text>
          </View>
          <View
            style={[
              styles.searchFormRow,
              {
                alignItems: "center",
                height: 50 * dh,
                borderTopLeftRadius: variable.borderRadiusBase * dw,
                borderTopRightRadius: variable.borderRadiusBase * dw,
                backgroundColor: variable.semiDarkColor
              }
            ]}
          >
            <TextInput
              onSubmitEditing={() => {}}
              name="cardHolder"
              style={styles.textInputField}
              onChangeText={text => this.setState({ searchText: text })}
              placeholderTextColor={variable.whiteColor}
              underlineColorAndroid="transparent"
              placeholder="Roma, Italy"
              keyboardAppearance="dark"
              selectionColor={variable.whiteColor}
            />
          </View>
          <View style={styles.dividerDark} />
          <View
            style={[
              styles.searchFormRow,
              { height: 62 * dh, paddingHorizontal: 0 }
            ]}
          >
            <CalendarRangeInput label={["Check-In", "Check-Out"]} />
          </View>
          <View style={styles.dividerDark} />
          <View
            style={[
              styles.searchFormRow,
              {
                zIndex: -1,
                height: 62 * dh,
                backgroundColor: variable.semiDarkColor
              }
            ]}
          >
            <LabeledInput
              containerStyle={{ width: 125 * dw }}
              value="1"
              label="Rooms"
              maxLength={3}
              keyboardType="numeric"
            />
            <LabeledInput
              containerStyle={{ width: 100 * dw }}
              value="2"
              label="Adults"
              maxLength={3}
              keyboardType="numeric"
            />
            <LabeledInput
              containerStyle={{ width: 75 * dw }}
              value="0"
              label="Children"
              maxLength={3}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.dividerDark} />
          <View
            style={[
              styles.searchFormRow,
              {
                zIndex: -1,
                justifyContent: "center",
                alignItems: "center",
                height: 50 * dh,
                borderBottomLeftRadius: variable.borderRadiusBase * dw,
                borderBottomRightRadius: variable.borderRadiusBase * dw,
                backgroundColor: variable.semiDarkColor
              }
            ]}
          >
            <Text style={styles.travelText}>??</Text>
            <View style={{ flex: 3 }}>
              <CheckBox
                onCheck={() => this.onCheck("work")}
                label="Work"
                active={this.state.purpose === "work"}
              />
            </View>
            <View style={{ flex: 3 }}>
              <CheckBox
                onCheck={() => this.onCheck("leisure")}
                label="Leisure"
                active={this.state.purpose === "leisure"}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[styles.button, { zIndex: -1 }]}
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "ResultSearchPage",
                key: "ResultSearchPage"
              });
            }}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
          <View
            style={{
              zIndex: -1,
              backgroundColor: variable.whiteColor,
              paddingHorizontal: variable.contentPadding2x * dh,
              paddingVertical: variable.contentPaddingBase * dw,
              marginVertical: variable.contentPaddingBase * dw,
              flexDirection: "row",
              height: "auto"
            }}
          >
            <View
              style={{
                backgroundColor: variable.accentColor,
                height: 45,
                width: 45,
                borderRadius: variable.borderRadiusBase,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Gift />
            </View>
            <View
              style={{
                zIndex: -1,
                flex: 1,
                paddingLeft: variable.contentPadding2x * dw,
                justifyContent: "flex-start",
                height: "auto"
              }}
            >
              <Text
                style={[
                  styles.titleText,
                  { color: variable.darkColor, marginBottom: 8 * dh }
                ]}
              >
                Make your first booking
              </Text>
              <Text style={styles.simpleText}>
                Get discount 10 % by first booking
              </Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            zIndex: -1,
            height: 124 * dh,
            backgroundColor: variable.darkColor,
            paddingHorizontal: variable.contentPadding2x * dh,
            paddingVertical: variable.contentPadding2x * dw,
            transform: [
              {
                translateY: this.viewHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-461 * dh, 0]
                })
              }
            ]
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={styles.titleText}>SUBSCRIBE</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: variable.contentPadding2x * dh
            }}
          >
            <View style={styles.textInputBlock}>
              <TextInput
                onFocus={this.onSubscribeFocus}
                onBlur={this.onSubscribeBlur}
                style={styles.secondTextInput}
                placeholderTextColor="#1C1E2C"
                selectionColor="#1C1E2C"
                underlineColorAndroid="transparent"
                placeholder="email@mail.com"
                onChangeText={text => {
                  this.setState({ email: text });
                  if (text.indexOf("@") <= 0 || text.indexOf(".") <= 0) {
                    this.setState({ wrongEmail: true });
                  } else {
                    this.setState({ wrongEmail: false });
                  }
                }}
              />
              <TouchableOpacity
                onPress={this.onSubmit}
                style={styles.TouchableOpacityBlock}
              >
                <Text style={styles.subscribeButtonText}>subscribe</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.valid}>{mailValid}</View>
          </View>
        </Animated.View>
      </ScrollView>
    );
  }
}
