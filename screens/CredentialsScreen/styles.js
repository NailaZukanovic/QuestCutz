import {StyleSheet} from "react-native";
import {
  dw,
  dh,
  DEFAULT_WIDTH
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: variable.darkColor,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  iconsStyle: {
    marginHorizontal: 28 * dw,
    minWidth: 23 * dw
  },
  valid: {
    justifyContent: "center",
    width: DEFAULT_WIDTH * dw,
    paddingLeft: 79 * dw,
    alignItems: "flex-start",
    minHeight: 15.5 * dh,
    maxHeight: 32.5 * dh
  },
  name: {
    fontSize: variable.fontSizeH3 * dw,
    color: variable.whiteColor,
    fontWeight: "bold",
    paddingTop: variable.contentPaddingBase * dh,
    paddingBottom: 33 * dh
  },
  input: {
    width: "100%",
    height: 58 * dh,
    backgroundColor: variable.semiDarkColor,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10 * dh
  },
  maintext: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.whiteColor,
    fontWeight: "bold",
    textAlign: "center"
  },
  logInLink: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.accentColor,
    marginLeft: 5 * dw,
    textAlign: "center"
  },
  requiredField: {
    fontSize: 14 * dw,
    width: "100%",
    color: variable.errorColor,
    paddingVertical: variable.contentPaddingBase * dh
  },
  typeSwitcher: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: variable.accentColor,
    width: "100%",
    height: 58 * dh
  },
  variationBlock: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: variable.contentPadding2x * dh,
    width: "100%"
  },
  iconText: {
    fontSize: variable.fontSizeH3 * dw,
    color: variable.whiteColor,
    fontWeight: "bold",
    paddingTop: variable.contentPaddingBase * dh
  },
  mainBlock: {
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    marginHorizontal: 28 * dw,
    minWidth: 23 * dw
  },
  FirstTextInput: {
    flex: 1,
    color: variable.whiteColor,
    textAlign: "left",
    fontSize: variable.fontSizeInputText
  },
  createButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: variable.contentPaddingBase * dh
  },
  secondTextInput: {
    flex: 1,
    color: variable.whiteColor,
    textAlign: "left",
    fontSize: variable.fontSizeInputText
  },
});
