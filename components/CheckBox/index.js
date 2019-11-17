import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import Svg, { Path } from "react-native-svg";

class Check extends React.Component {
  render() {
    return (
      <Svg width="18" height="18">
        <Path
          fill="rgb(255,255,255)"
          d="M0 9C0 4.02837 4.02837 0 9 0C13.9716 0 18 4.02837 18 9C18 13.9716 13.9716 18 9 18C4.02837 18 0 13.9716 0 9ZM7.82308 12.3231L13.6082 6.51202C13.6774 6.44279 13.6774 6.33462 13.5995 6.26106L12.8423 5.47788C12.812 5.44327 12.7688 5.42596 12.7212 5.42596C12.6779 5.42596 12.6346 5.44327 12.6 5.47788L7.32115 10.7957L5.4 8.87452C5.36538 8.8399 5.32212 8.8226 5.27885 8.8226C5.23558 8.8226 5.19231 8.8399 5.15769 8.87452L4.3875 9.64471C4.31827 9.71394 4.31827 9.82212 4.3875 9.89135L6.81058 12.3144C6.96635 12.4702 7.1524 12.5611 7.31683 12.5611C7.54615 12.5611 7.74519 12.3966 7.81875 12.3231L7.82308 12.3231Z"
        />
      </Svg>
    );
  }
}
export default class CheckBox extends React.Component {
  render() {
    let check = null;
    if (this.props.active) {
      check = <Check />;
    }
    return (
      <TouchableOpacity
        onPress={this.props.onCheck}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <View style={styles.checkView}>{check}</View>
        <Text style={styles.label}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
