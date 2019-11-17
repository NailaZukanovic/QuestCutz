import React from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewPropTypes
} from "react-native";
import Svg, { Path } from "react-native-svg";

class StarOutline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Svg
        viewBox="0 0 1200 1200"
        height={this.props.size}
        width={this.props.size}
      >
        <Path
          fill={this.props.color}
          d="M254.1,1200a38.64,38.64,0,0,1-23.76-7.84c-13.74-10.46-19.55-29.2-15.89-51.42L269.36,805.3c3.05-18.66-5.95-47.66-18.89-60.88L17.87,506.73C2.45,491-3.36,472.35,1.89,455.33s20.48-28.49,41.76-31.73l321.46-48.94C383,371.93,406.54,354,414.54,337L558.28,31.93C567.8,11.71,583,0,600,0s32.18,11.59,41.72,31.93l143.75,305.2c8,17,31.54,34.9,49.43,37.62l321.45,48.95c21.3,3.24,36.51,14.73,41.76,31.73s-.58,35.65-16,51.4L949.53,744.4c-12.94,13.21-21.94,42.24-18.89,60.88l54.92,335.46c3.63,22.22-2.16,41-15.9,51.42s-32.55,10.44-51.56,0L630.47,1033.74c-16-8.82-45.12-8.82-61.1,0L282,1192.11A58.22,58.22,0,0,1,254.1,1200ZM51,472.15,283.17,709.26c24.14,24.55,38,69.5,32.34,104.32L260.69,1148.4l287-158.08c29.84-16.43,74.84-16.43,104.68,0l287,158.08L884.49,813.58c-5.69-34.82,8.2-79.67,32.35-104.3L1149,472.17,828.17,423.23c-33.35-5.08-69.77-32.78-84.68-64.46L600,54.2,456.51,358.72c-14.9,31.68-51.32,59.38-84.68,64.46Z"
        />
      </Svg>
    );
  }
}
class StarFill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Svg
        viewBox="0 0 1200 1200"
        height={this.props.size}
        width={this.props.size}
      >
        <Path
          fill={this.props.color}
          d="M40,469.55,276.8,711.43c24.62,25.05,38.8,70.89,33,106.41L253.87,1159.4,546.61,998.14c30.44-16.76,76.34-16.76,106.78,0L946.13,1159.4,890.21,817.84c-5.81-35.52,8.37-81.26,33-106.39l236.85-241.87-327.3-49.93c-34-5.18-71.17-33.44-86.38-65.76L600,43.2,453.63,353.84c-15.21,32.32-52.36,60.58-86.38,65.76Z"
          style=""
        />
      </Svg>
    );
  }
}
class Star extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styles = StyleSheet.create({
      star: {
        position: "relative",
        width: this.props.size
      },
      starBackground: {
        position: "absolute",
        overflow: "hidden",
        width: "100%"
      },
      starFill: {
        position: "absolute",
        overflow: "hidden",
        width: this.props.value,
        zIndex: 1
      }
    });
    return (
      <View style={[styles.star, this.props.starStyle]}>
        <View>
          <StarOutline color={this.props.outlineColor} size={this.props.size} />
        </View>
        <View style={styles.starBackground}>
          <StarFill color={this.props.backgroundColor} size={this.props.size} />
        </View>
        <View style={styles.starFill}>
          <StarFill color={this.props.fillColor} size={this.props.size} />
        </View>
      </View>
    );
  }
}
export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  selectRating = i => {
    this.setState({ value: i });
    this.props.onChange({ value: i });
  };
  renderStars = count => {
    let stars = [];
    for (let i = 1; i <= count; i++) {
      let value = 0;
      if (this.state.value + 1 > i) {
        switch (this.props.mode) {
          case "accurate": {
            value = this.state.value + 1 - i;
            break;
          }
          case "half": {
            value = this.state.value + 1 - i;
            if (value > 0.75 && value <= 1) {
              value = 1;
            } else if (value >= 0.25 && value <= 0.75) {
              value = 0.5;
            } else if (value >= 0 && value < 0.25) {
              value = 0;
            } else {
              value = 0;
            }
            break;
          }
          case "full": {
            value = this.state.value + 1 - i;
            if (value >= 0.5 && value <= 1) {
              value = 1;
            } else if (value >= 0 && value < 0.5) {
              value = 0;
            } else {
              value = 0;
            }
            break;
          }
          default: {
            value = this.state.value + 1 - i;
          }
        }
      }
      if (this.state.value > i) {
        value = 1;
      }
      value = value * 100 + "%";
      if (this.props.selectable === "false") {
        stars.push(
          <Star
            key={i}
            size={this.props.size}
            outlineColor={this.props.outlineColor}
            fillColor={this.props.fillColor}
            backgroundColor={this.props.backgroundColor}
            value={value}
            starStyle={this.props.starStyle}
          />
        );
      }
      if (this.props.selectable === "touch") {
        stars.push(
          <TouchableOpacity key={i} onPress={() => this.selectRating(i)}>
            <Star
              size={this.props.size}
              outlineColor={this.props.outlineColor}
              fillColor={this.props.fillColor}
              backgroundColor={this.props.backgroundColor}
              value={value}
              starStyle={this.props.starStyle}
            />
          </TouchableOpacity>
        );
      }
    }
    return stars;
  };
  render() {
    let styles = StyleSheet.create({
      container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }
    });
    return (
      <View style={styles.container}>{this.renderStars(this.props.count)}</View>
    );
  }
}
Rating.propTypes = {
  size: PropTypes.number,
  count: PropTypes.number,
  value: PropTypes.number,
  outlineColor: PropTypes.string,
  fillColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  mode: PropTypes.oneOf(["accurate", "half", "full"]),
  selectable: PropTypes.oneOf(["false", "touch"]),
  starStyle: ViewPropTypes.style
};
Rating.defaultProps = {
  size: 15,
  count: 5,
  value: 2.5,
  outlineColor: "#ffc300",
  fillColor: "#ffc300",
  backgroundColor: "rgba(0,0,0,0)",
  mode: "accurate",
  selectable: "false",
  starStyle: {}
};
