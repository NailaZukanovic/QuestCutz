import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import DescriptionObject from "../../components/DescriptionObject";
import styles from "./styles";
import tempObjects from "./data";

export default class FilterObjects extends React.Component {
  constructor(props) {
    super(props);
  }
  renderObjects = objects => {
    return objects.map((item, i) => {
      return (
        <View key={i} style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "HotelPage",
                key: "HotelPage"
              });
            }}
          >
            <DescriptionObject
              title={item.title}
              text={item.text}
              rating={item.rating}
              priceText={item.priceText}
              image={item.image}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      );
    });
  };
  render() {
    return (
      <ScrollView style={styles.scrollViewBlock}>
        {this.renderObjects(tempObjects)}
      </ScrollView>
    );
  }
}
