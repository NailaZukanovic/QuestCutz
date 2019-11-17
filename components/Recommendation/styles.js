import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../Scaler";
import variable from "../../variables/commonColors";

const ImageBackgroundSIZE = 190 * dh;
export default StyleSheet.create({
  ImageBackground: {
    width: ImageBackgroundSIZE,
    height: ImageBackgroundSIZE,
    borderRadius: 10 * dw,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  textMake: {
    fontSize: variable.fontSizeH3 * dw,
    justifyContent: "center",
    alignItems: "flex-start",
    color: variable.whiteColor,
    fontFamily: variable.fontFamilyBold
  },
  textQuantity: {
    fontSize: 13 * dw,
    justifyContent: "center",
    alignItems: "flex-start",
    color: variable.whiteColor,
    paddingVertical: variable.contentPaddingBase * dh
  },
  border: {
    borderColor: variable.accentColor,
    borderStyle: "solid",
    borderRadius: 20 * dw,
    borderWidth: 4 * dw,
    paddingVertical: 5 * dh,
    paddingHorizontal: 5 * dw
  },
  borderHidden: {
    borderColor: "rgba(0,0,0,0)",
    borderStyle: "solid",
    borderRadius: 20 * dw,
    borderWidth: 4 * dw,
    paddingVertical: 5 * dh,
    paddingHorizontal: 5 * dw
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10 * dw,
    opacity: 0.5
  },
  block: {
    paddingLeft: variable.contentPadding2x * dw,
    paddingTop: variable.contentPadding2x * dh,
    paddingBottom: 11.5 * dh
  }
});
