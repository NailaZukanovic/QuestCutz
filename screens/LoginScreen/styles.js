import {
  dw,
  dh
} from "../../components/Scaler";
import {StyleSheet} from "react-native";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  startButton: {
    height: 58 * dh,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    height: 91.5 * dh,
    resizeMode: "contain"
  },
  maintext: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.whiteColor,
    fontWeight: "bold"
  },
  logInLink: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.accentColor,
    marginLeft: 5
  },
  main: {
    flex: 1,
    backgroundColor: variable.darkColor,
    alignItems: "center"
  },
  firstAnimatedBlock: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: variable.contentPadding4x * dh
  },
  secondAnimatedBlock: {
    color: variable.whiteColor,
    fontWeight: "bold"
  },
  thirdAnimatedBlock: {
    width: "100%",
    justifyContent: "flex-start"
  },
});
