import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  containerBlock: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  button: {
    backgroundColor: variable.accentColor,
    borderRadius: variable.borderRadiusBase * dw,
    justifyContent: "center",
    alignItems: "center",
    height: 45 * dh
  },
  buttonsFirstBlock: {
    flex: 1,
    paddingHorizontal: variable.contentPadding2x * dw,
    marginTop: 5
  },
  buttonsSecondBlock: {
    flex: 4,
    paddingHorizontal: variable.contentPadding2x * dw,
    marginTop: 21 * dh
  },
  buttonStart: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 25 * dh
  },
  main: {
    flexDirection: "column",
    flex: 1
  },
  buttonText: {
    fontSize: variable.fontSizeBase * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.whiteColor
  },
  yourPayment: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20 * dw
  },
  yourPaymentText: {
    textAlign: "center",
    fontSize: variable.fontSizeH3 * dw,
    color: variable.whiteColor,
    fontFamily: variable.fontFamilyBold
  },
  success: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
