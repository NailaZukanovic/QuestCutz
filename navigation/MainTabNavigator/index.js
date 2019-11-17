import { createStackNavigator } from "react-navigation";
import HotelPageScreen from "../../screens/HotelPageScreen";
import PaymentScreen from "../../screens/PaymentScreen";
import PaymentResultScreen from "../../screens/PaymentResultScreen";

const MainTabNavigator = createStackNavigator(
  {
    HotelPage: HotelPageScreen,
    PaymentScreen: PaymentScreen,
    PaymentResultScreen: PaymentResultScreen
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
);
export default MainTabNavigator;
