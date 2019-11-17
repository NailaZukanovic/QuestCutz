import { createMaterialTopTabNavigator } from "react-navigation";
import ProfileBookings from "../../screens/ProfileBookings";
import ProfileFavorites from "../../screens/ProfileFavorites";
import { dw, dh } from "../../components/Scaler";
import variable from "../../variables/commonColors";

const HotelTopTabNavigator = createMaterialTopTabNavigator(
  {
    "My Bookings": {
      screen: ProfileBookings
    },
    Favorites: {
      screen: ProfileFavorites
    }
  },
  {
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: "rgba(0,0,0,0)",
        height: 40 * dh,
        width: 240 * dw,
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
        width: 120 * dw
      },
      tabStyle: {
        width: 120 * dw,
        height: 40 * dh,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10 * dh
      },
      pressColor: "transparent"
    }
  }
);
export default HotelTopTabNavigator;
