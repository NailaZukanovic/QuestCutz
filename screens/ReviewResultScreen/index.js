import React from "react";
import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import ReviewStar from "../../assets/images/svg/ReviewStar";
import styles from "./styles";
export default class ReviewResultScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  OnBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.containerBlock}>
        <StatusBar barStyle="light-content" hidden={false} />
        <View style={styles.main}>
          <View style={styles.success}>
            <ReviewStar />
          </View>
          <View style={styles.yourPayment}>
            <Text style={styles.yourPaymentText}>
              Your review has been successfully processed
            </Text>
          </View>
          <View style={styles.buttonsFirstBlock}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("HotelPage");
              }}
            >
              <Text style={styles.buttonText}>Go To Hotel Page</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsSecondBlock}>
            <TouchableOpacity
              style={styles.buttonStart}
              onPress={() => {
                this.props.navigation.navigate("HomePage");
              }}
            >
              <Text style={styles.buttonText}>Go To Start Page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
