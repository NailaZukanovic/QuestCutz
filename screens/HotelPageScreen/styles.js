import {StyleSheet} from "react-native";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
    underSlider: {
      flexDirection: "column",
      flex: 1
    },
    containerBlock: {
      backgroundColor: variable.darkColor,
      flex: 1,
      paddingTop: variable.contentPadding4x
    },
    navigationBlock: {
      flex: 1,
      flexDirection: "column"
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
});
