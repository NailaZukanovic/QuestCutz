import React from "react";
import { View, Text, Dimensions } from "react-native";
import IconButton from "../IconButton";
const window = Dimensions.get("window");
import styles from "./styles";
import variable from "../../variables/commonColors";

export const TITILE_WIDTH = window.height - window.height / 5;
export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  renderTitle = () => {
    if (this.props.renderTitle) {
      return this.props.renderTitle();
    } else {
      return (
        <Text numberOfLines={1} style={styles.topbarText}>
          {this.props.topbarText}
        </Text>
      );
    }
  };
  render() {
    let leftIcon = null;
    let rightIcon = null;
    if (this.props.leftIcon) {
      leftIcon = (
        <IconButton
          name={this.props.leftIcon.name}
          size={this.props.leftIcon.size}
          style={styles.iconButton}
          color={variable.whiteColor}
          onPress={this.props.leftIcon.action}
        />
      );
    }
    if (this.props.rightIcon) {
      rightIcon = (
        <IconButton
          name={this.props.rightIcon.name}
          size={this.props.rightIcon.size}
          style={styles.iconButton}
          color={variable.whiteColor}
          onPress={this.props.rightIcon.action}
        />
      );
    }
    if (this.props.leftIconComponent) {
      leftIcon = (
        <IconButton onPress={this.props.leftIcon.action}>
          {this.props.leftIconComponent}
        </IconButton>
      );
    }
    if (this.props.rightIconComponent) {
      rightIcon = (
        <IconButton onPress={this.props.rightIcon.action}>
          {this.props.rightIconComponent}
        </IconButton>
      );
    }
    return (
      <View style={[styles.topBar, this.props.style]}>
        {leftIcon}
        {this.renderTitle()}
        {rightIcon}
      </View>
    );
  }
}
