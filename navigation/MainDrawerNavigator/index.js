import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import {
  DrawerItems,
  SafeAreaView,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import HotelPageScreen from "../../screens/HotelPageScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ArticleFeedPage from "../../screens/ArticleFeedPage";
import ArticlePage from "../../screens/ArticlePage";
import HomePage from "../../screens/HomePage";
import SearchHomePage from "../../screens/SearchHomePage";
import BookPageScreen from "../../screens/BookPageScreen";
import FilterPageScreen from "../../screens/FilterPageScreen";
import PaymentScreen from "../../screens/PaymentScreen";
import LoginScreenIn from "../../screens/LoginScreenIn";
import FacilitiesPage from "../../screens/FacilitiesPage";
import PaymentResultScreen from "../../screens/PaymentResultScreen";
import ReviewResultScreen from "../../screens/ReviewResultScreen";
import styles from "./styles";
import { dw, dh } from "../../components/Scaler";
import variable from "../../variables/commonColors";
import ProfileScreen from "../../screens/ProfileScreen";
import SubscribeResultScreen from "../../screens/SubscribeResultScreen";
import ReviewPage from "../../screens/ReviewPage";

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "ProfileScreen",
            key: "ProfileScreen"
          });
        }}
        style={styles.TouchableOpacityBlock}
      >
        <View>
          <Image
            source={require("../../assets/images/photos/face.png")}
            style={styles.avatar}
          />
        </View>
        <View style={{ marginLeft: 17 * dw }}>
          <Text style={styles.drawerProfileTitle}>Jorde G</Text>
          <Text
            style={[
              { fontSize: variable.fontSizeSmallText * dw },
              styles.drawerText
            ]}
          >
            View Profile
          </Text>
        </View>
      </TouchableOpacity>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const HomeNavigator = createStackNavigator(
  {
    HomePage: { screen: HomePage },
    ResultSearchPage: { screen: SearchHomePage }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const HotelNavigator = createStackNavigator(
  {
    HotelPage: { screen: HotelPageScreen },
    HomePage: { screen: HomePage },
    PaymentResultScreen: { screen: PaymentResultScreen },
    BookPage: { screen: BookPageScreen },
    PaymentScreen: { screen: PaymentScreen },
    ReviewPage: { screen: ReviewPage },
    ReviewResultScreen: { screen: ReviewResultScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const BookNavigator = createStackNavigator(
  {
    BookPage: { screen: BookPageScreen },
    PaymentScreen: { screen: PaymentScreen },
    HomePage: { screen: HomePage }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const MainDrawerNavigator = createDrawerNavigator(
  {
    HomePage: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerLabel: "Home Page",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={23} color={tintColor} />
        )
      }
    },
    ResultSearchPage: SearchHomePage,
    HotelPage: {
      screen: HotelNavigator,
      navigationOptions: {
        drawerLabel: "Hotel Page",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-cart" size={23 * dw} color={tintColor} />
        )
      }
    },
    ArticlePage: ArticlePage,
    ProfileScreen: ProfileScreen,
    BookPage: {
      screen: BookNavigator,
      navigationOptions: {
        drawerLabel: "Book Page",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-basket" size={23 * dw} color={tintColor} />
        )
      }
    },
    PaymentScreen: PaymentScreen,
    FilterPage: FilterPageScreen,
    ArticleFeedPage: ArticleFeedPage,
    LoginScreen: LoginScreenIn,
    PaymentResultScreen: {
      screen: PaymentResultScreen,
      navigationOptions: {
        drawerLabel: () => null
      }
    },
    SubscribeResultScreen: {
      screen: SubscribeResultScreen,
      navigationOptions: {
        drawerLabel: () => null
      }
    },
    FacilitiesPage: {
      screen: FacilitiesPage,
      navigationOptions: {
        drawerLabel: () => null
      }
    }
  },
  {
    contentComponent: CustomDrawerContentComponent,
    initialRouteName: "HomePage",
    drawerBackgroundColor: variable.darkColor,
    contentOptions: {
      itemsContainerStyle: {
        paddingTop: 10 * dh
      },
      activeBackgroundColor: variable.darkColor,
      inactiveTintColor: variable.whiteColor,
      activeTintColor: variable.accentColor,
      labelStyle: {
        marginVertical: 12 * dh,
        fontSize: variable.fontSizeBase * dw
      },
      iconContainerStyle: {
        opacity: 1,
        marginRight: 0,
        marginLeft: variable.contentPadding2x * dw
      }
    }
  }
);
export default MainDrawerNavigator;
