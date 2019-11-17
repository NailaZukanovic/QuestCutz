import React from "react";
import { Text, View, ImageBackground } from "react-native";
import Rating from "../Rating";
import { LinearGradient } from "expo";
import { dw } from "../Scaler";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class Recommendation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let borderStyle = styles.borderHidden;
    if (this.props.active === true) {
      borderStyle = styles.border;
    }
    let source = null;
    if (this.props.source.uri) {
      source = { uri: this.props.source.uri };
    } else {
      source = this.props.source;
    }
    return (
      <View style={[borderStyle, { marginLeft: 4 * dw }]}>
        <ImageBackground style={styles.ImageBackground} source={source}>
          <LinearGradient
            colors={["#ffffff", "#3023AE", "#3023AE"]}
            style={styles.gradient}
          />
          <View style={styles.block}>
            <Text style={styles.textMake}>{this.props.title}</Text>
            <Text style={styles.textQuantity}>
              {this.props.hotelsNum} cuts
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Rating
                size={15}
                count={5}
                value={this.props.rating}
                mode="accurate"
                outlineColor={variable.whiteColor}
                fillColor={variable.whiteColor}
                starStyle={{
                  marginHorizontal: 1 * dw
                }}
              />
              <Text
                style={[styles.textQuantity, { paddingHorizontal: 5 * dw }]}
              >
                ({this.props.rating} rating)
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
