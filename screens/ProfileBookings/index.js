import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import DescriptionObject from "../../components/DescriptionObject";
import { dh } from "../../components/Scaler";
import styles from "./styles";
import tempObjects from "./data";
import variable from "../../variables/commonColors";

export default class ProfileBookings extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMyBookings = objects => {
    return objects.map((item, i) => {
      return (
        <View key={i}>
          <TouchableOpacity
            style={{ paddingHorizontal: variable.contentPadding2x }}
            key={i}
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "BookPage",
                key: "BookPage"
              });
            }}
          >
            <DescriptionObject
              key={i}
              title={item.title}
              text={item.text}
              date={item.dateText}
              image={item.image}
              price={item.price}
              secondDate={item.secondDate}
              textColor={variable.darkColor}
              imagePosition="left"
            />
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      );
    });
  };
  render() {
    return (
      <View style={{ backgroundColor: variable.whiteColor }}>
        <ScrollView
          contentContainerStyle={{ paddingTop: variable.contentPadding2x * dh }}
        >
          {this.renderMyBookings(tempObjects)}
        </ScrollView>
      </View>
    );
  }
}
