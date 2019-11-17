import React from "react";
import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import Success from "../../assets/images/svg/Success";

export default class SubscribeResultScreen extends React.Component {
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
            <Success />
          </View>
          <View style={styles.yourPayment}>
            <Text style={styles.yourPaymentText}>
              Thank you for subscribe !
            </Text>
          </View>
          <View style={styles.buttonsFirstBlock}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("ProfileScreen");
              }}
            >
              <Text style={styles.buttonText}>Go To Profile Page</Text>
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
