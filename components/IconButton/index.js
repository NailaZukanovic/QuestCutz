import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class IconButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let icon = null;
    if (this.props.name) {
      icon = (
        <Ionicons
          name={this.props.name}
          size={this.props.size}
          style={this.props.style}
          color={this.props.color}
        />
      );
    }
    return (
      <TouchableOpacity
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={this.props.onPress}
      >
        {icon}
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
