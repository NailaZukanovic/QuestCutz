import {StyleSheet} from "react-native";
import {dw} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  divider: {
    backgroundColor: variable.dividerDark,
    height: 0.5,
    margin: variable.contentPadding2x * dw
  },
  facility: {
    marginRight: variable.contentPaddingBase,
    minWidth: 23
  },
  facilitiesTitle: {
    fontSize: variable.fontSizeH3 * dw,
    color: variable.darkColor,
    fontFamily: variable.fontFamilyBold
  },
  value: {
    flex: 1,
    fontSize: variable.fontSizeBase * dw,
  },
  textBlock: {
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: variable.contentPadding2x * dw
  },
  nextFacilities: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: variable.contentPaddingBase,
    paddingHorizontal: variable.contentPadding2x * dw
  },
  container: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  scrollViewBlock: {
    backgroundColor: variable.whiteColor,
    paddingTop: 13

  },
});
