import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../Scaler";
import variable from "../../variables/commonColors";

const CALENDAR_WIDTH = 343 * dw;
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  animatedBlock: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: variable.semiDarkColor,
  },
  touchableBlock: {
    flex: 1,
    zIndex: 1,
  },
  arrow: {
    position: "absolute",
    top: "100%",
    backgroundColor: variable.whiteColor,
    height: 15 * dh,
    width: 15 * dh,
    zIndex: 2,
    elevation: 2,
  },
  calendar: {
    flex: 1,
    borderRadius: variable.borderRadiusBase,
    overflow: "hidden",
    position: "absolute",
    zIndex: 3,
    elevation: 2,
    width: CALENDAR_WIDTH,
    left: 0 * dw,
    backgroundColor: variable.whiteColor,
    top: "107%"
  },
  label: {
    color: variable.whiteColor,
    textAlign: "left",
    position: "absolute",
    zIndex: -1,
    top: 0
  },
  dateText: {
    color: variable.whiteColor,
    textAlign: "left",
    fontSize: variable.fontSizeInputText * dw,
    marginBottom: 5
  },

});
