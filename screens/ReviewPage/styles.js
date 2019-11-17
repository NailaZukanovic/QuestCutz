import {StyleSheet} from "react-native";
import {
  dw,
  dh, DEFAULT_WIDTH
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  firstAnimatedBlock: {
    alignItems: "flex-start"
  },
  addNewReviewBlock: {
    marginTop: variable.contentPadding2x * dw
  },
  rateBlock: {
    marginTop: variable.contentPadding2x * dw
  },
  ratingBlock: {
    marginTop: variable.contentPadding2x * dw
  },
  reviewBlock: {
    marginTop: variable.contentPadding2x * dw
  },
  scrollViewBlock: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x * dh
  },
  imageStyle: {
    width: 23 * dw,
    height: 23 * dh,
    borderRadius: 11.5 * dw
  },
  animation: {
    marginTop: variable.contentPadding2x * dw,
    backgroundColor: variable.semiDarkColor,
    borderRadius: variable.borderRadiusBase * dw,
    color: variable.whiteColor,
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingTop: variable.contentPadding2x * dw,
    paddingBottom: (2 * variable.contentPadding4x) * dw,
  },
  animatedBlock: {
    paddingHorizontal: variable.contentPadding2x * dw,
  },
  sendBlock: {
    justifyContent: "center",
    padding: variable.contentPadding2x * dw
  },
  button: {
    backgroundColor: variable.accentColor,
    borderRadius: variable.borderRadiusBase * dw,
    justifyContent: "center",
    alignItems: "center",
    height: 40.5 * dh
  },
  buttonText: {
    fontSize: variable.fontSizeInputText * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.whiteColor,
  },
  smallText: {
    color: variable.whiteColor
  },
  title: {
    color: variable.whiteColor,
    fontSize: variable.fontSizeH3 * dw,
    fontFamily: variable.fontFamilyBold,
  },
  valid: {
    width: DEFAULT_WIDTH * dw,
    minHeight: 15.5 * dh,
    maxHeight: 32.5 * dh
  },
  requiredField: {
    fontSize: 14 * dw,
    width: "100%",
    color: variable.errorColor,
    paddingVertical: variable.contentPaddingBase * dh
  }
});
