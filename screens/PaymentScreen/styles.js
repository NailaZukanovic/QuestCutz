import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

const METHOD_WIDTH = 141 * dw;
const METHOD_HEIGHT = 166 * dh;
export default StyleSheet.create({
  changingText: {
    marginTop: variable.contentPadding4x * dh
  },
  scrollViewBlock: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  paymentMethodBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  backToRoomBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  firstAnimatedBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    marginHorizontal: variable.contentPadding2x,
    minWidth: 23
  },
  textInputStyle: {
    flex: 1,
    color: variable.whiteColor,
    textAlign: "left"
  },
  secondAnimatedBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  thirdAnimatedBlock: {
    flex: 3,
    paddingHorizontal: variable.contentPadding2x
  },
  main: {
    flexDirection: "column",
    flex: 1
  },
  paymentMethod: {
    paddingHorizontal: variable.contentPadding2x * dw,

  },
  method: {
    height: METHOD_HEIGHT,
  },
  textBack: {
    color: variable.whiteColor,
    fontFamily: variable.fontFamilyBold,
    fontSize: variable.fontSizeSmallText,
    paddingRight: variable.contentPadding2x * dw
  },
  firstBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  name: {
    fontSize: variable.fontSizeBase,
    color: variable.whiteColor,
    paddingVertical: variable.contentPaddingBase * dh,
    paddingHorizontal: variable.contentPadding2x * dw
  },

  button: {
    backgroundColor: variable.accentColor,
    borderRadius: variable.borderRadiusBase,
    justifyContent: "center",
    alignItems: "center",
    height: 45 * dh,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: variable.fontFamilyBold,
    color: variable.whiteColor,
  },
  input: {
    width: "100%",
    backgroundColor: variable.semiDarkColor,
    flexDirection: "row",
    alignItems: "center",
    height: 60 * dh
  },
  firstCardBlock: {
    flex: 3
  },
  secondCardBlock: {
    flex: 2
  },
  payment: {
    width: METHOD_WIDTH,
    height: METHOD_HEIGHT,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: variable.contentPadding2x * dw,
    borderRadius: variable.borderRadiusBase * dw,
  },
  paymentTextandlock: {
    color: variable.whiteColor,
    fontSize: variable.fontSizeBase,
    fontFamily: variable.fontFamilyBold
  },
  iosIcons: {
    marginHorizontal: variable.contentPadding2x,
    minWidth: 23
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
