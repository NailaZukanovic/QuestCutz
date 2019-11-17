import {StyleSheet} from "react-native";
import {dw} from "../Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  animatedBlock: {
    color: variable.whiteColor,
    textAlign: "left",
    position: "absolute",
    zIndex: -1,
    top: 0,
    fontSize: variable.fontSizeSmallText
  },
  TextInputStyle: {
    color: variable.whiteColor,
    textAlign: "left",
    fontSize: variable.fontSizeInputText * dw,
    marginBottom: variable.contentPaddingBase
  }
});
