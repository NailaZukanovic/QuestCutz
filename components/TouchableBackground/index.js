import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  onPressIn = () => {
    this.setState({ active: true });
  };
  onPressOut = () => {
    this.setState({ active: false });
  };
  render() {
    var color = this.props.backgroundColor;
    if (this.state.active) {
      color = this.props.underlayColor;
    }
    if (this.props.active) {
      color = this.props.underlayColor;
    }
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
      >
        <View style={[this.props.style, { backgroundColor: color }]}>
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
