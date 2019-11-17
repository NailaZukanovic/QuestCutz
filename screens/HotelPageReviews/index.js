import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Rating from "../../components/Rating";
import { dw } from "../../components/Scaler";
import styles from "./styles";
import reviewsData from "./data";
import variable from "../../variables/commonColors";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    tabBarOnPress: event => {
      event.navigation.state.params.onChangeView("Reviews");
      event.defaultHandler();
    }
  };
  renderReviews = reviews => {
    return reviews.map((item, i) => {
      return (
        <View key={i} style={styles.mainView}>
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={styles.descriptionBlock}>
              <Text style={styles.titleReviewText}>{item.author}</Text>
              <Text style={styles.dateReviewText}>{item.date}</Text>
            </View>

            <View style={styles.descriptionReviewBlock}>
              <Text style={styles.descriptionReview}>{item.description}</Text>
            </View>

            <View style={styles.ratingBlock}>
              <Rating
                outlineColor={variable.accentColor}
                fillColor={variable.accentColor}
                selectable="touch"
                value={item.rating}
                starStyle={{
                  marginHorizontal: 1 * dw
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.dividerReviews} />
        </View>
      );
    });
  };

  render() {
    return (
      <Animated.View style={styles.animatedViewBlockStyle}>
        <View style={styles.additionalBlock}>
          <View style={styles.rateUsBlock}>
            <Text style={styles.textRateUs}>Rate us</Text>
          </View>
          <View style={styles.newReviewBlock}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ReviewPage");
              }}
              style={styles.singleReview}
            >
              <Text style={styles.textAddReview}>Add New Review</Text>
              <Ionicons
                name="ios-add-circle-outline"
                size={23}
                style={{ paddingRight: variable.contentPadding2x * dw }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 6 }}>
          <ScrollView>{this.renderReviews(reviewsData)}</ScrollView>
        </View>
      </Animated.View>
    );
  }
}
