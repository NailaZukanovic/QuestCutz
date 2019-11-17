import React from "react";
import {
  Animated,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import TouchableBackground from "../../components/TouchableBackground";
import Host from "../../assets/images/svg/Host";
import Traveler from "../../assets/images/svg/Traveler";
import styles from "./styles";
import variable from "../../variables/commonColors";

const window = Dimensions.get("window");
export const ROLE_HEIGHT = (window.height * 2) / 7;
export default class RoleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onChose = this.onChose.bind(this);
    this.state = {
      next: false,
      stage: this.props.stage,
      role: ""
    };
    this.nextButton = new Animated.Value(0);
    this.viewTransform = new Animated.Value(0);
  }
  onNext = () => {
    Animated.timing(this.viewTransform, {
      duration: 200,
      toValue: 1
    }).start(() => {
      this.props.onRoleChange(this.state.role);
    });
  };
  onChose(role) {
    if (this.state.role === "" && !this.state.next) {
      this.setState({ next: true, role: role });
      Animated.timing(this.nextButton, {
        duration: 350,
        toValue: 1.4
      }).start(() => {});
    } else if (this.state.role === role) {
      Animated.timing(this.nextButton, {
        duration: 350,
        toValue: 0
      }).start(() => {
        this.setState({ next: false, role: "" });
      });
    } else {
      this.setState({ role: role });
    }
  }
  handleStage = stage => {
    this.setState({ stage: stage });
    this.props.onStageChange(stage);
  };
  renderNext = () => {
    return (
      <Animated.View
        style={[{ flex: this.nextButton }, styles.animatedViewStyle]}
      >
        <TouchableOpacity
          style={styles.startButton}
          backgroundColor={variable.darkColor}
          underlayColor={variable.semiDarkColor}
          onPress={this.onNext}
        >
          <Text style={styles.textNext}>Next</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  renderLink = () => {
    if (this.state.stage === "create") {
      return (
        <TouchableOpacity
          style={styles.touchBlock}
          onPress={() => this.handleStage("login")}
        >
          <Text style={styles.maintext}>or</Text>
          <Text style={styles.logInLink}>Log In</Text>
        </TouchableOpacity>
      );
    } else if (this.state.stage === "login") {
      return (
        <TouchableOpacity
          style={styles.touchBlock}
          onPress={() => this.handleStage("create")}
        >
          <Text style={styles.maintext}>or</Text>
          <Text style={styles.logInLink}>Create</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    let footer = null;
    if (this.state.next) {
      footer = this.renderNext();
    } else {
      footer = this.renderLink();
    }
    return (
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: this.viewTransform.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -window.height]
                })
              }
            ]
          },
          styles.firstAnimatedBlock
        ]}
      >
        <View style={styles.roleWrapper}>
          <Text style={styles.chooseRole}>I am ..</Text>
          <View style={styles.roleRow}>
            <TouchableBackground
              style={styles.singleRole}
              backgroundColor={variable.darkColor}
              underlayColor={variable.semiDarkColor}
              onPress={() => this.onChose("traveler")}
              active={this.state.role === "traveler"}
            >
              <Traveler />
              <Text style={styles.next}>Client</Text>
            </TouchableBackground>
            <TouchableBackground
              style={styles.singleRole}
              backgroundColor={variable.darkColor}
              underlayColor={variable.semiDarkColor}
              onPress={() => this.onChose("host")}
              active={this.state.role === "host"}
            >
              <Host />
              <Text style={styles.next}>Barber</Text>
            </TouchableBackground>
          </View>
        </View>
        {footer}
      </Animated.View>
    );
  }
}
