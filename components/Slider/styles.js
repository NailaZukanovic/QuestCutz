import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";

export default StyleSheet.create({
  exampleContainer: {
      paddingVertical: 0,
  },
  exampleContainerDark: {
      backgroundColor: "#1a1917"
  },
  exampleContainerLight: {
      backgroundColor: "white"
  },
  slider: {
      marginTop: 0,
      overflow: "visible" // for custom animations
  },
  sliderContentContainer: {
      paddingBottom: 10 * dh // for custom animation
  },
  paginationContainer: {
      paddingVertical: 0,
      marginHorizontal: 1 * dw,
      paddingHorizontal: 0
  },
  paginationDot: {
      margin: 0,
      padding: 0,
      width: 6 * dw,
      height: 6 * dw,
      borderRadius: 3 * dw,
      marginHorizontal: 0,
      paddingHorizontal: 0

  },
  inactiveDotStyle: {
    marginHorizontal: 0,
  }
});
