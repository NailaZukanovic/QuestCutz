import React from "react";
import { Text, View, Image } from "react-native";
import Rating from "../Rating";
import { dw } from "../Scaler";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class DescriptionObject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rating = null;
    let priceText = null;
    let ratingWrapper = null;
    let leftImage = null;
    let rightImage = null;
    let title = null;
    let text = null;
    let date = null;
    let price = null;
    let bothDate = null;
    if (this.props.rating || this.props.priceText) {
      if (this.props.rating) {
        rating = (
          <Rating
            size={15}
            count={5}
            value={this.props.rating}
            mode="accurate"
            starStyle={{
              marginHorizontal: 1 * dw
            }}
            outlineColor={variable.accentColor}
            fillColor={variable.accentColor}
          />
        );
      }
      if (this.props.priceText) {
        priceText = (
          <Text
            style={[
              { paddingHorizontal: 10 * dw },
              { color: this.props.textColor }
            ]}
          >
            {this.props.priceText}
          </Text>
        );
      }
      ratingWrapper = (
        <View style={styles.rating}>
          {rating}
          {priceText}
        </View>
      );
    }

    if (this.props.imagePosition === "right") {
      if (this.props.image.uri) {
        rightImage = (
          <Image
            style={styles.imagePhoto}
            source={{ uri: this.props.image.uri }}
          />
        );
      } else {
        rightImage = (
          <Image style={styles.imagePhoto} source={this.props.image} />
        );
      }
    } else {
      if (this.props.image.uri) {
        leftImage = (
          <Image
            style={styles.imagePhoto}
            source={{ uri: this.props.image.uri }}
          />
        );
      } else {
        leftImage = (
          <Image style={styles.imagePhoto} source={this.props.image} />
        );
      }
    }
    if (this.props.title) {
      title = (
        <Text style={[styles.textBig, { color: this.props.textColor }]}>
          {this.props.title}
        </Text>
      );
    }

    if (this.props.text) {
      text = (
        <Text style={[styles.textSmall, { color: this.props.textColor }]}>
          {this.props.text}
        </Text>
      );
    }
    if (this.props.date && this.props.secondDate) {
      bothDate = (
        <View style={styles.dateBlock}>
          <Text style={[styles.textDate, styles.dateBlockText]}>
            {this.props.date}
          </Text>
          <Text style={[styles.textDate, styles.dateBlockText]}>—</Text>
          <Text style={[styles.textDate, { color: variable.dividerDark }]}>
            {this.props.secondDate}
          </Text>
        </View>
      );
    }
    if (this.props.date && this.props.secondDate == null) {
      date = (
        <View>
          <Text style={[styles.textDate, { color: variable.dividerDark }]}>
            {this.props.date}
          </Text>
        </View>
      );
    }

    if (this.props.price) {
      price = (
        <View style={styles.priceBar}>
          <Text style={styles.priceBarText}>{this.props.price}</Text>
        </View>
      );
    }
    return (
      <View style={[styles.description, this.props.containerStyle]}>
        {leftImage}
        <View style={styles.textDescription}>
          <View style={styles.textWrapper}>
            <View style={{ flexDirection: "row" }}>
              {title}
              {price}
            </View>
            {text}
            {date}
            {ratingWrapper}
            {bothDate}
          </View>
        </View>
        {rightImage}
      </View>
    );
  }
}
