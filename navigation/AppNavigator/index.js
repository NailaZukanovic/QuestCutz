import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../../screens/LoginScreen";
import { Easing, Animated } from "react-native";
import MainDrawerNavigator from "../MainDrawerNavigator";

const AuthStack = createStackNavigator({ SignIn: LoginScreen });
const RootNavigator = createStackNavigator(
  {
    Main: MainDrawerNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: "Auth",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { position, scene } = sceneProps;

        const thisSceneIndex = scene.index;
        const scale = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [2, 1]
        });
        const opacity = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [0, 1]
        });

        return { transform: [{ scale }], opacity: opacity };
      }
    }),
    defaultNavigationOptions: { header: null, gesturesEnabled: false }
  }
);

const App = createAppContainer(RootNavigator);
export default App;
