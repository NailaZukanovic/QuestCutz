import React from "react";
import { View, TextInput, Animated } from "react-native";
import { dw, dh } from "../Scaler";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class LabeledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    if (this.props.value) {
      this.labelAnim = new Animated.Value(0);
    } else {
      this.labelAnim = new Animated.Value(1);
    }
  }
  onFocus = () => {
    if (this.state.value.length === 0) {
      Animated.timing(this.labelAnim, {
        duration: 300,
        toValue: 0
      }).start(() => {});
    }
  };
  onBlur = () => {
    if (this.state.value.length === 0) {
      Animated.timing(this.labelAnim, {
        duration: 300,
        toValue: 1
      }).start(() => {});
    }
  };
  onChangeText = value => {
    this.setState({ value: value });
  };
  render() {
    return (
      <View style={[this.props.containerStyle, { justifyContent: "flex-end" }]}>
        <Animated.Text
          style={[
            {
              transform: [
                {
                  translateY: this.labelAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [7 * dh, 30 * dh]
                  })
                }
              ],
              fontSize: this.labelAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [14 * dw, 17 * dw]
              })
            },
            styles.animatedBlock
          ]}
        >
          {this.props.label}
        </Animated.Text>
        <TextInput
          {...this.props}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSubmitEditing={() => {
            /*this.focusNextField('4')*/
          }}
          name="cardHolder"
          style={styles.TextInputStyle}
          onChangeText={value => this.onChangeText(value)}
          placeholderTextColor={variable.whiteColor}
          keyboardAppearance="dark"
          underlineColorAndroid="transparent"
          placeholder=""
          value={this.state.value}
          selectionColor={variable.whiteColor}
        />
      </View>
    );
  }
}
