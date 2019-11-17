import {StyleSheet} from "react-native";
import {dw} from "../Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  label: {
    textAlign: "left",
    color: variable.whiteColor,
    marginLeft: 6 * dw,
    fontSize: variable.fontSizeSmallText * dw,
    justifyContent: "center"
  },
  checkView: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: variable.whiteColor,
    width: 20,
    height: 20
  },
});
