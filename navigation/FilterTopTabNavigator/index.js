import { createMaterialTopTabNavigator } from "react-navigation";
import FilterObjects from "../../screens/FilterObjects";
import { dw, dh } from "../../components/Scaler";
import variable from "../../variables/commonColors";

const FilterTopTabNavigator = createMaterialTopTabNavigator(
  {
    Cheapest: {
      screen: FilterObjects
    },
    Hotest: {
      screen: FilterObjects
    },
    Popular: {
      screen: FilterObjects
    },
    Stylish: {
      screen: FilterObjects
    }
  },
  {
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: "rgba(0,0,0,0)",
        height: 40 * dh,
        width: 343 * dw,
        marginLeft: variable.contentPadding2x * dw
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
        width: 85 * dw
      },
      tabStyle: {
        height: 40 * dh,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10 * dw,
        width: 85 * dw
      },
      pressColor: "transparent"
    }
  }
);
export default FilterTopTabNavigator;
