import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import HotelPageReviews from "../../screens/HotelPageReviews";
import HotelPageAbout from "../../screens/HotelPageAbout";
import MapScreen from "../../screens/MapScreen";
import { dw, dh } from "../../components/Scaler";
import { TabBar } from "react-native-tab-view";
import variable from "../../variables/commonColors";

const renderBadge = state => {
  if (state.route.routeName === "Reviews") {
    return (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>35</Text>
      </View>
    );
  } else {
    return null;
  }
};
const styles = StyleSheet.create({
  badgeText: {
    fontSize: variable.fontSizePriceText * dw,
    color: variable.whiteColor
  },
  badge: {
    top: 6 * dh,
    left: 2 * dw,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: variable.accentColor,
    height: variable.contentPadding2x * dh,
    borderRadius: variable.borderRadiusBase * dw,
    margin: 6.5 * dw,
    paddingHorizontal: 4 * dw
  }
});

const HotelTopTabNavigator = createMaterialTopTabNavigator(
  {
    About: {
      screen: HotelPageAbout
    },
    Reviews: {
      screen: HotelPageReviews
    },
    Map: {
      screen: MapScreen
    }
  },
  {
    swipeEnabled: false,
    tabBarComponent: ({ navigation, jumpToIndex, ...rest }) => (
      <TabBar {...rest} jumpToIndex={jumpToIndex} renderBadge={renderBadge} />
    ),
    tabBarOptions: {
      style: {
        backgroundColor: "rgba(0,0,0,0)",
        height: 40 * dh,
        width: 343 * dw,
        marginLeft: variable.contentPadding2x * dw,
        marginTop: variable.contentPaddingBase
      },
      labelStyle: {
        height: 40 * dh,
        marginHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
        fontSize: variable.fontSizeBase * dw
      },
      activeTintColor: variable.whiteColor,
      inactiveTintColor: variable.whiteColor,
      upperCaseLabel: false,
      indicatorStyle: {
        height: 3.5 * dh,
        backgroundColor: variable.accentColor,
        width: 114 * dw
      },
      tabStyle: {
        height: 40 * dh,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10 * dw,
        width: 114 * dw
      },
      pressColor: "transparent"
    }
  }
);
export default HotelTopTabNavigator;
