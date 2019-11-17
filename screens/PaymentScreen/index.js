import React from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  Platform,
  TextInput,
  Animated,
  ActivityIndicator
} from "react-native";
import TopBar from "../../components/TopBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import TouchableBackground from "../../components/TouchableBackground";
import Visa from "../../assets/images/svg/Visa";
import Mastercard from "../../assets/images/svg/Mastercard";
import DismissKeyboard from "dismissKeyboard";
import { dw, dh } from "../../components/Scaler";
import styles from "./styles";
import variable from "../../variables/commonColors";

const METHODS = [
  { name: "Visa", svg: <Visa /> },
  { name: "Mastercard", svg: <Mastercard /> },
  { name: "Discover", svg: <Visa /> },
  { name: "Mastercard", svg: <Mastercard /> }
];
export default class PaymentScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Order",
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="md-bookmarks" size={23 * dw} color={tintColor} />
    )
  };
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      expireDate: "",
      cardHolder: "",
      CCV: "",
      method: "",
      keyboardOpen: false,
      loading: true
    };
    this.viewTransform = new Animated.Value(1);
    this.one = React.createRef();
    this.two = React.createRef();
    this.three = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 0);
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
  keyboardShow = e => {
    Animated.timing(this.viewTransform, {
      duration: 250,
      toValue: 0
    }).start(() => {
      this.setState({ keyboardOpen: true });
    });
  };
  keyboardHide = e => {
    Animated.timing(this.viewTransform, {
      duration: 250,
      toValue: 1
    }).start(() => {
      this.setState({ keyboardOpen: false });
    });
  };
  onChose = method => {
    this.setState({ method: method });
  };
  OnBack = () => {
    this.props.navigation.goBack(null);
  };

  focusNextFieldOne() {
    this.one.current.focus();
  }
  focusNextFieldTwo() {
    this.two.current.focus();
  }
  focusNextFieldThree() {
    this.three.current.focus();
  }

  renderMethod = availableMethods => {
    let methods = availableMethods.map((method, i) => {
      return (
        <TouchableBackground
          key={i}
          style={styles.payment}
          backgroundColor={variable.whiteColor}
          underlayColor={variable.accentColor}
          onPress={() => this.onChose(method)}
          active={this.state.method === method}
        >
          <View style={{ marginTop: 18 * dh }}>{method.svg}</View>
          <View>
            <Text
              style={[
                styles.changingText,
                this.state.method === method
                  ? { color: variable.whiteColor }
                  : { color: variable.blackColor }
              ]}
            >
              {method.name}
            </Text>
          </View>
        </TouchableBackground>
      );
    });
    return (
      <Animated.View
        style={[
          styles.method,
          {
            transform: [
              {
                scale: this.viewTransform
              }
            ],
            maxHeight: this.viewTransform.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"]
            })
          }
        ]}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {methods}
        </ScrollView>
      </Animated.View>
    );
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.scrollViewBlock}>
          <StatusBar barStyle="light-content" hidden={false} />
          <TopBar
            leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
            topbarText={"Payment"}
          />
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      );
    }
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
        style={styles.scrollViewBlock}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          topbarText={"Payment"}
        />
        <View style={styles.main}>
          <View style={{ paddingVertical: 10 }}>
            <View style={styles.firstBlock}>
              <View style={styles.paymentMethod}>
                <Ionicons
                  name="ios-lock"
                  size={23}
                  color={variable.successColor}
                />
              </View>
              <View style={styles.paymentMethodBlock}>
                <Text style={styles.paymentTextandlock}>Payment method</Text>
              </View>
              <TouchableOpacity onPress={this.OnBack}>
                <View style={styles.backToRoomBlock}>
                  <Text style={styles.textBack}>Back to room</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {this.renderMethod(METHODS)}
          <Animated.View
            style={[
              {
                flex: this.viewTransform.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 2]
                })
              },
              styles.firstAnimatedBlock
            ]}
          >
            <View style={styles.firstCardBlock}>
              <Text style={styles.name}>Card number</Text>
              <View style={styles.input}>
                <Ionicons
                  name="ios-card"
                  size={23}
                  color={variable.whiteColor}
                  style={styles.iconStyle}
                />
                <TextInput
                  blurOnSubmit={false}
                  maxLength={20}
                  name="cardNumber"
                  keyboardType="numeric"
                  onSubmitEditing={() => this.focusNextFieldOne()}
                  style={styles.textInputStyle}
                  onChangeText={text => {
                    if (text && text.length === 19) {
                      this.focusNextFieldOne();
                    } else {
                      if (text.length > this.state.cardNumber.length) {
                        if (
                          text.length > 1 &&
                          text.replace(/ /g, "").length % 4 === 1
                        ) {
                          var char = text.charAt(text.length - 1);
                          text = text.slice(0, -1) + " " + char;
                        }
                      } else {
                        if (text.charAt(text.length - 1) === " ") {
                          text = text.slice(0, -1);
                        }
                      }
                    }

                    this.setState({ cardNumber: text });
                  }}
                  value={this.state.cardNumber}
                  placeholderTextColor={variable.whiteColor}
                  selectionColor={variable.whiteColor}
                  underlineColorAndroid="transparent"
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </View>
            </View>
            <View style={styles.secondCardBlock}>
              <Text style={styles.name}>Expire date</Text>
              <View style={styles.input}>
                <Ionicons
                  name="ios-calendar"
                  size={23}
                  color={variable.whiteColor}
                  style={styles.iconStyle}
                />
                <TextInput
                  blurOnSubmit={false}
                  maxLength={5}
                  onSubmitEditing={() => this.focusNextFieldTwo()}
                  ref={this.one}
                  name="cardNumber"
                  keyboardType="numeric"
                  style={styles.textInputStyle}
                  onChangeText={text => {
                    if (text && text.length === 5) {
                      this.focusNextFieldTwo();
                    } else {
                      if (text.length > this.state.expireDate.length) {
                        if (text.length === 3) {
                          var char = text.charAt(text.length - 1);
                          text = text.slice(0, -1) + "|" + char;
                        }
                      } else {
                        if (text.charAt(text.length - 1) === "|") {
                          text = text.slice(0, -1);
                        }
                      }
                    }
                    this.setState({ expireDate: text });
                  }}
                  value={this.state.expireDate}
                  placeholderTextColor={variable.whiteColor}
                  selectionColor={variable.whiteColor}
                  underlineColorAndroid="transparent"
                  placeholder="XX|XX"
                />
              </View>
            </View>
          </Animated.View>

          <Animated.View
            style={[
              {
                flex: this.viewTransform.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 2]
                })
              },
              styles.secondAnimatedBlock
            ]}
          >
            <View style={styles.firstCardBlock}>
              <Text style={styles.name}>Card holder</Text>
              <View style={styles.input}>
                <Ionicons
                  name="ios-person"
                  size={23}
                  color={variable.whiteColor}
                  style={styles.iosIcons}
                />
                <TextInput
                  blurOnSubmit={false}
                  ref={this.two}
                  onSubmitEditing={() => this.focusNextFieldThree()}
                  name="cardHolder"
                  autoCapitalize="characters"
                  style={styles.textInputStyle}
                  onChangeText={text => this.setState({ cardHolder: text })}
                  placeholderTextColor={variable.whiteColor}
                  selectionColor={variable.whiteColor}
                  underlineColorAndroid="transparent"
                  placeholder="Surname Name"
                />
              </View>
            </View>
            <View style={styles.secondCardBlock}>
              <Text style={styles.name}>CCV</Text>
              <View style={styles.input}>
                <Ionicons
                  name="ios-lock"
                  size={23}
                  color={variable.whiteColor}
                  style={styles.iosIcons}
                />
                <TextInput
                  blurOnSubmit={false}
                  ref={this.three}
                  name="CCV"
                  maxLength={3}
                  keyboardType="numeric"
                  style={styles.textInputStyle}
                  onChangeText={text => {
                    this.setState({ CCV: text });
                    if (text && text.length === 3) {
                      DismissKeyboard();
                    }
                  }}
                  placeholderTextColor={variable.whiteColor}
                  selectionColor={variable.whiteColor}
                  underlineColorAndroid="transparent"
                  selectTextOnFocus={false}
                  secureTextEntry={true}
                  placeholder="XXX"
                />
              </View>
            </View>
          </Animated.View>

          <Animated.View
            style={[
              {
                marginTop: this.viewTransform.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, 0]
                })
              },
              styles.thirdAnimatedBlock
            ]}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("PaymentResultScreen");
              }}
            >
              <Text style={styles.buttonText}>Pay</Text>
            </TouchableOpacity>
          </Animated.View>
          <View style={{ flex: 2 }} />
        </View>
      </ScrollView>
    );
  }
}
