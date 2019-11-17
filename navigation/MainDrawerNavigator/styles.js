import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 17 * dw,
    marginTop: 22 * dh
  },
  logostyle: {
    width: 21 * dw,
    height: 25 * dh
  },
  container: {
    flex: 1,
  },
  mainText: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.whiteColor,
    fontFamily: variable.fontFamilyBold
  },
  avatar: {
    width: 45.5 * dw,
    height: 45.5 * dh,
    borderRadius: 22.75 * dw
  },
  starterkitText: {
    fontSize: 10 * dw,
    color: variable.whiteColor,
    fontFamily: variable.fontFamilyBold,
    opacity: 0.4
  },
  drawerProfileTitle: {
    fontFamily: variable.fontFamilyBold,
    fontSize: variable.fontSizeH3 * dw,
    color: variable.whiteColor
  },
  drawerText: {
    color: variable.whiteColor
  },
  TouchableOpacityBlock: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 17 * dw,
    marginTop: 33.5 * dh,
    marginBottom: 33.5 * dh
  }
});
