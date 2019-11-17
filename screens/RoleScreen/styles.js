import {
  StyleSheet,
  Dimensions
} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

const window = Dimensions.get("window");
export const ROLE_HEIGHT = window.height * 2 / 7;
export default StyleSheet.create({
  textNext: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.whiteColor,
    fontWeight: "bold"
  },
  animatedViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 10,
    maxHeight: 60 * dh,
    backgroundColor: variable.accentColor
  },
  touchBlock: {
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  firstAnimatedBlock: {
    flex: 1,
    paddingTop: 27 * dh,
    justifyContent: "flex-start"
  },
  startButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  singleRole: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10 * dw,
    borderRadius: variable.borderRadiusBase * dw,
    height: ROLE_HEIGHT
  },
  next: {
    fontSize: 20 * dw,
    color: variable.whiteColor,
    fontWeight: "bold",
    paddingTop: 12.5 * dh
  },
  roleWrapper: {
    flex: 7,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logInLink: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.accentColor,
    marginLeft: 5 * dw,
    textAlign: "center"
  },
  maintext: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.whiteColor,
    fontWeight: "bold",
    textAlign: "center"
  },
  chooseRole: {
    fontSize: 26 * dw,
    color: variable.whiteColor,
    fontWeight: "bold"
  },
  roleRow: {
    flexDirection: "row",
    padding: 13.5 * dh
  },
  container: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  }
});
