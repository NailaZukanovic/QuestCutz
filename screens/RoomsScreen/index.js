import React from "react";
import { View, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TopBar from "../../components/TopBar";
import DescriptionObject from "../../components/DescriptionObject";
import styles from "./styles";
import tempObjects from "./data";
export default class RoomsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    drawerLabel: "Rooms Page",
    header: null,
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="shopping-basket" size={25} color={tintColor} />
    )
  };
  OnBack = () => {
    this.props.navigation.goBack();
  };
  onFav = () => {
    this.props.navigation.navigate("FavoritesStack");
  };
  renderObjects = objects => {
    return objects.map((item, i) => {
      return (
        <View key={i} style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "BookPage",
                key: "BookPage"
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
      <View style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          rightIcon={{
            name: "md-heart-outline",
            action: this.onFav,
            size: 30
          }}
          topbarText={"Markus R"}
        />
        <ScrollView style={styles.scrollViewBlock}>
          {this.renderObjects(tempObjects)}
        </ScrollView>
      </View>
    );
  }
}
