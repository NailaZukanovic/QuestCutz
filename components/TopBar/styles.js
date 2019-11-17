import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  topBar: {
    backgroundColor: variable.darkColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingVertical: 10 * dh,
  },
  iconButton: {
    flex: 0,
  },
  topbarText: {
    fontSize: variable.contentPadding2x * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.whiteColor,
    flex: 1,
    textAlign: "center",
    marginHorizontal: 10 * dw
  }
});
