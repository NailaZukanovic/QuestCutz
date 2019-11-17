import {StyleSheet} from "react-native";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  mainView: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
