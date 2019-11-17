import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Animated,
  Dimensions,
  Platform
} from "react-native";
import Host from "../../assets/images/svg/Host";
import Traveler from "../../assets/images/svg/Traveler";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
const window = Dimensions.get("window");
import { dw } from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default class CredentialScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: this.props.stage,
      role: this.props.role,
      email: null,
      password: null,
      wrongEmail: false,
      wrongPassword: false
    };
    this.flexes = new Animated.Value(1);
    this.viewTransform = new Animated.Value(1);
  }
  onLogin = () => {
    this.onSubmit();
  };
  onCreate = () => {
    this.onSubmit();
  };
  onSubmit = () => {
    if (this.state.email === null) {
      this.setState({ email: "" });
    }
    if (this.state.password === null) {
      this.setState({ password: "" });
    }

    if (
      this.state.wrongEmail !== true &&
      this.state.password !== "" &&
      this.state.password !== null
    ) {
      this.props.onNavigate();
    }
  };
  componentDidMount() {
    Animated.timing(this.viewTransform, {
      duration: 200,
      toValue: 0
    }).start(() => {});
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
    Animated.timing(this.flexes, {
      duration: 250,
      toValue: 0
    }).start();
  };
  keyboardHide = event => {
    Animated.timing(this.flexes, {
      duration: 250,
      toValue: 1
    }).start();
  };
  handleStage = stage => {
    this.setState({ stage: stage });
    this.props.onStageChange(stage);
  };
  renderSubmit = () => {
    if (this.state.stage === "create") {
      return (
        <TouchableOpacity onPress={this.onCreate} style={styles.typeSwitcher}>
          <Text style={styles.maintext}>Create</Text>
        </TouchableOpacity>
      );
    } else if (this.state.stage === "login") {
      return (
        <TouchableOpacity onPress={this.onLogin} style={styles.typeSwitcher}>
          <Text style={styles.maintext}>Log In</Text>
        </TouchableOpacity>
      );
    }
  };
  renderLink = () => {
    if (this.state.stage === "create") {
      return (
        <TouchableOpacity
          style={styles.variationBlock}
          onPress={() => this.handleStage("login")}
        >
          <Text style={styles.maintext}>or</Text>
          <Text style={styles.logInLink}>Log In</Text>
        </TouchableOpacity>
      );
    } else if (this.state.stage === "login") {
      return (
        <TouchableOpacity
          style={styles.variationBlock}
          onPress={() => this.handleStage("create")}
        >
          <Text style={styles.maintext}>or</Text>
          <Text style={styles.logInLink}>Create</Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    let mailValid = null;
    let passValid = null;
    let icon = null;
    let iconTitle = "";
    let title = "";
    if (this.state.stage === "login") {
      title = "Login in a member account";
    }
    if (this.state.stage === "create") {
      title = "Create a member account";
    }
    if (this.state.email === "") {
      mailValid = <Text style={styles.requiredField}>Required field</Text>;
    }
    if (this.state.wrongEmail === true) {
      mailValid = <Text style={styles.requiredField}>Invalid field</Text>;
    }
    if (this.state.password === "") {
      passValid = <Text style={styles.requiredField}>Required field</Text>;
    }
    if (this.state.wrongPassword === true) {
      passValid = <Text style={styles.requiredField}>Invalid field</Text>;
    }
    if (this.state.role === "traveler") {
      icon = <Traveler />;
      iconTitle = "Client";
    }
    if (this.state.role === "host") {
      icon = <Host />;
      iconTitle = "Barber";
    }
    return (
      <Animated.View
        style={[
          styles.main,
          {
            transform: [
              {
                translateX: this.viewTransform.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, window.height]
                })
              }
            ]
          }
        ]}
      >
        <Animated.View
          style={{
            maxHeight: this.flexes.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"]
            }),
            transform: [
              {
                scale: this.flexes.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }
            ],
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {icon}
          <Text style={styles.iconText}>{iconTitle}</Text>
        </Animated.View>
        <View style={styles.mainBlock}>
          <Text style={styles.name}>{title}</Text>
          <View style={styles.input}>
            <Ionicons
              name="md-mail"
              size={23 * dw}
              color={variable.whiteColor}
              style={styles.iconStyle}
            />
            <TextInput
              style={styles.FirstTextInput}
              onChangeText={text => {
                this.setState({ email: text });
                if (text.indexOf("@") <= 0 || text.indexOf(".") <= 0) {
                  this.setState({ wrongEmail: true });
                } else {
                  this.setState({ wrongEmail: false });
                }
              }}
              placeholderTextColor={variable.whiteColor}
              selectionColor={variable.whiteColor}
              underlineColorAndroid="transparent"
              placeholder="email@email.com"
            />
          </View>
          <View style={styles.valid}>{mailValid}</View>
          <View style={styles.input}>
            <Ionicons
              name="md-lock"
              size={23 * dw}
              color={variable.whiteColor}
              style={styles.iconsStyle}
            />
            <TextInput
              keyboardType="email-address"
              style={styles.secondTextInput}
              onChangeText={text => this.setState({ password: text })}
              placeholderTextColor={variable.whiteColor}
              underlineColorAndroid="transparent"
              selectTextOnFocus={false}
              secureTextEntry={true}
              placeholder="Password"
              selectionColor={variable.whiteColor}
            />
          </View>
          <View style={styles.valid}>{passValid}</View>
        </View>
        <View style={styles.createButton}>{this.renderSubmit()}</View>
        {this.renderLink()}
      </Animated.View>
    );
  }
}
