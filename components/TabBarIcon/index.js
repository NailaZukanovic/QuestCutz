import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import variable from "../../variables/commonColors";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={25}
        color={this.props.focused ? variable.accentColor : variable.darkColor}
      />
    );
  }
}
