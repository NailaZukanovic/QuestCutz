import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Rating from "../../components/Rating";
import styles from "./styles";
import { dw } from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default class HotelPageAbout extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    tabBarOnPress: event => {
      event.navigation.state.params.onChangeView("About");
      event.defaultHandler();
    }
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        style={styles.description}
      >
        <View style={styles.title}>
          <Text style={[styles.titleText]}>Rating</Text>
        </View>
        <View style={styles.rating}>
          <View style={styles.quantity}>
            <View style={styles.quantityBlock}>
              <Text style={styles.ratingText}>4,5</Text>
            </View>
          </View>
          <View style={styles.reviews}>
            <Text style={styles.reviewText}>Good</Text>
            <View style={styles.underReviews}>
              <View style={styles.stars}>
                <Rating
                  size={13}
                  count={5}
                  value={4.5}
                  mode="accurate"
                  starStyle={{
                    marginHorizontal: 1 * dw
                  }}
                  outlineColor={variable.accentColor}
                  fillColor={variable.accentColor}
                />
              </View>
              <Text style={styles.quantityReviews}>(212 reviews)</Text>
            </View>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>About</Text>
        </View>
        <Text style={styles.about}>
          Soho Hotel is very well located in Barcelona if you want to visit the
          city centre and the main attractions by walking (we did everything by
          walking). On the other hand, you must absolutely do the Barcelona Bus
          Turistic at the beginning of your stay and you can buy tickets at the
          reception with a discount.
        </Text>
        <View style={styles.title}>
          <Text style={styles.titleText}>Facilities</Text>
        </View>
        <View style={styles.facilities}>
          <View style={styles.singleFacility}>
            <View style={styles.icon}>
              <Ionicons
                name="ios-wifi"
                size={23}
                color={variable.accentColor}
              />
            </View>
            <Text style={styles.facilityText}>Wi-Fi</Text>
          </View>
          <View style={styles.singleFacility}>
            <View style={styles.icon}>
              <Ionicons
                name="ios-beer"
                size={23}
                color={variable.accentColor}
              />
            </View>
            <Text style={styles.facilityText}>Beer</Text>
          </View>
          <View style={styles.singleFacility}>
            <View style={styles.icon}>
              <Ionicons
                name="ios-desktop"
                size={23}
                color={variable.accentColor}
              />
            </View>
            <Text style={styles.facilityText}>TV</Text>
          </View>
          <View style={styles.singleFacility}>
            <View style={styles.icon}>
              <Ionicons
                name="ios-american-football"
                size={23}
                color={variable.accentColor}
              />
            </View>
            <Text style={styles.facilityText}>Gym</Text>
          </View>
          <View style={styles.singleFacility}>
            <View style={styles.icon}>
              <Ionicons name="ios-car" size={23} color={variable.accentColor} />
            </View>
            <Text style={styles.facilityText}>Transfer</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "FacilitiesPage",
                key: "FacilitiesPage"
              });
            }}
          >
            <View style={styles.singleFacility}>
              <Text style={styles.textPlus}>+7</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.book}
          onPress={() => {
            this.props.navigation.navigate({
              routeName: "BookPage",
              key: "BookPage"
            });
          }}
        >
          <Text style={styles.textDate}>Book now</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
