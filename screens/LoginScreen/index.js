import React, { Component } from "react";
import {
  ScrollView,
  Text,
  Animated,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from "react-native";
import RoleScreen from "../RoleScreen";
import CredentialsScreen from "../CredentialsScreen";
const window = Dimensions.get("window");
import { dw, dh } from "../../components/Scaler";
import styles from "./styles";
import Logo from "../../assets/images/svg/Logo";
import variable from "../../variables/commonColors";

const AnimLogo = Animated.createAnimatedComponent(Logo);

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      stage: "start",
      role: ""
    };
    this.logoSize = new Animated.Value(0);
  }
  onStageChange = stage => {
    this.setState({ stage: stage });
  };
  onRoleChange = role => {
    this.setState({ role });
  };
  onLogin = () => {
    this.setState({ stage: "login" });
    this.onSubmit();
  };
  onCreate = () => {
    this.setState({ stage: "create" });
    this.onSubmit();
  };
  onSubmit = () => {
    let anm = Animated.timing(this.logoSize, {
      duration: 750,
      delay: 1,
      toValue: 1
    });
    anm.start(() => {});
  };

  render() {
    let credentialsScreen = null;
    let roleScreen = null;
    if (this.state.stage === "login" || this.state.stage === "create") {
      if (this.state.role !== "") {
        credentialsScreen = (
          <CredentialsScreen
            onNavigate={() => {
              this.props.navigation.navigate("Main");
            }}
            stage={this.state.stage}
            role={this.state.role}
            onStageChange={this.onStageChange}
          />
        );
      } else {
        roleScreen = (
          <RoleScreen
            onStageChange={this.onStageChange}
            stage={this.state.stage}
            onRoleChange={this.onRoleChange}
          />
        );
      }
    }
    return (
      <ScrollView
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.main}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <Animated.View
          style={[
            {
              flex: this.logoSize.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1]
              })
            },
            styles.firstAnimatedBlock
          ]}
        >
          <AnimLogo
            style={{
              height: 92,
              width: 76
            }}
          />
          <Animated.Text
            style={[
              {
                fontSize: this.logoSize.interpolate({
                  inputRange: [0, 1],
                  outputRange: [35 * dw, 15 * dw]
                }),
                marginTop: this.logoSize.interpolate({
                  inputRange: [0, 1],
                  outputRange: [34.5 * dh, 6.5 * dh]
                })
              },
              styles.secondAnimatedBlock
            ]}
          >
            Holistic
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={[
            {
              flex: this.logoSize.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 5]
              })
            },
            styles.thirdAnimatedBlock
          ]}
        >
          <Animated.View
            style={{
              flex: this.logoSize.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              }),
              opacity: this.logoSize.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0]
              }),
              transform: [
                {
                  scaleY: this.logoSize.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0]
                  })
                }
              ]
            }}
          >
            <TouchableOpacity
              style={[
                styles.startButton,
                { backgroundColor: variable.semiDarkColor }
              ]}
              onPress={this.onLogin}
            >
              <Text style={styles.maintext}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.startButton,
                { backgroundColor: variable.accentColor }
              ]}
              onPress={this.onCreate}
            >
              <Text style={styles.maintext}>Register</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={{
              height: this.logoSize.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 511 * dh]
              }),
              opacity: this.logoSize.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              }),
              justifyContent: "flex-start",
              transform: [
                {
                  translateY: this.logoSize.interpolate({
                    inputRange: [0, 1],
                    outputRange: [window.height, 0]
                  })
                }
              ]
            }}
          >
            {roleScreen}
            {credentialsScreen}
          </Animated.View>
        </Animated.View>
      </ScrollView>
    );
  }
}
