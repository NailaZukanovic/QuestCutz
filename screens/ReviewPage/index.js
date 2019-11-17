import React from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TextInput,
  Animated,
  Image,
  Platform
} from "react-native";
import TopBar from "../../components/TopBar";
import Rating from "../../components/Rating";
import { dw } from "../../components/Scaler";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: "",
      keyboardOpen: false,
      textField: null,
      value: null
    };
    this.viewTransform = new Animated.Value(1);
  }
  componentDidMount() {
    if (Platform.OS === "ios") {
      this.keyboardShowListener = Keyboard.addListener(
        "keyboardWillShow",
        this.keyboardShow
      );
      this.keyboardHideListener = Keyboard.addListener(
        "keyboardWillHide",
        this.keyboardHide
      );
    } else {
      this.keyboardShowListener = Keyboard.addListener(
        "keyboardDidShow",
        this.keyboardShow
      );
      this.keyboardHideListener = Keyboard.addListener(
        "keyboardDidHide",
        this.keyboardHide
      );
    }
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }
  keyboardShow = event => {
    Animated.timing(this.viewTransform, {
      duration: 250,
      toValue: 0
    }).start(() => {
      this.setState({ keyboardOpen: true });
    });
  };
  keyboardHide = event => {
    Animated.timing(this.viewTransform, {
      duration: 250,
      toValue: 1
    }).start(() => {
      this.setState({ keyboardOpen: false });
    });
  };
  OnBack = () => {
    this.props.navigation.goBack();
  };
  onSubmit = () => {
    if (this.state.textField === null) {
      this.setState({ textField: "" });
    }
    if (this.state.value === null) {
      this.setState({ value: 0 });
    }
    if (
      this.state.value !== null &&
      this.state.textField !== null &&
      this.state.textField !== ""
    ) {
      this.props.navigation.navigate("ReviewResultScreen");
    }
  };

  pressStars(i) {
    this.setState({ value: i });
  }
  renderMethod = () => {
    let starsValid = null;
    if (this.state.value === 0) {
      starsValid = <Text style={styles.requiredField}>Stars field</Text>;
    }
    return (
      <Animated.View style={[styles.method, styles.firstAnimatedBlock]}>
        <View style={styles.rateBlock}>
          <Text style={styles.smallText}>Rate</Text>
        </View>
        <View style={styles.ratingBlock}>
          <Rating
            onChange={i => this.pressStars(i)}
            value={0}
            selectable="touch"
            size={30}
            starStyle={{ marginHorizontal: 4 * dw }}
            outlineColor={variable.whiteColor}
            fillColor={variable.whiteColor}
          />
        </View>
        <View style={styles.valid}>{starsValid}</View>
        <View style={styles.reviewBlock}>
          <Text style={styles.smallText}>Review</Text>
        </View>
      </Animated.View>
    );
  };

  render() {
    let mailValid = null;
    if (this.state.textField === "") {
      mailValid = <Text style={styles.requiredField}>Invalid field</Text>;
    }
    return (
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.scrollViewBlock}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          rightIcon={{ name: "ios-person", size: 30 }}
          rightIconComponent={
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ProfileScreen");
              }}
            >
              <Image
                source={require("../../assets/images/photos/face.png")}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          }
          topbarText={"Markus Add Your Review"}
        />
        <View style={styles.animatedBlock}>
          {this.renderMethod()}
          <TextInput
            style={styles.animation}
            textAlignVertical="top"
            multiline={true}
            placeholderTextColor={variable.whiteColor}
            placeholder="Type your text here"
            onChangeText={text => {
              this.setState({ textField: text });
            }}
            underlineColorAndroid="transparent"
            selectionColor={variable.whiteColor}
          />
          <View style={styles.valid}>{mailValid}</View>
        </View>
        <View style={styles.sendBlock}>
          <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
