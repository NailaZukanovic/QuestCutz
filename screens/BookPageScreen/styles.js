import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  rulesTitleMain: {
    fontSize: variable.fontSizeH3 * dw,
    fontFamily: variable.fontFamilyBold,
    marginBottom: variable.contentPaddingBase
  },
  rulesTitle: {
    fontSize: variable.fontSizeInputText * dw,
    fontFamily: variable.fontFamilyBold
  },
  rulesContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: variable.contentPadding2x * dh
  },
  rulesWrapper: {
    flex: 1,
  },
  rulesIcon: {
    paddingVertical: variable.contentPaddingBase * dh,
    paddingRight: variable.contentPaddingBase * dw
  },
  divider: {
    backgroundColor: variable.dividerDark,
    height: 1 * dh
  },
  rules: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  bookHeader: {
    flex: 2.5,
    flexDirection: "column",
    backgroundColor: variable.darkColor,
    paddingVertical: variable.contentPadding2x * dh,
    paddingHorizontal: variable.contentPadding2x * dw
  },
  bookingRules: {
    flex: 3,
    backgroundColor: variable.whiteColor,
    paddingVertical: variable.contentPadding2x * dh,
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingBottom: 0
  },
  dates: {
    borderRadius: variable.borderRadiusBase * dw,
    flex: 3,
    flexDirection: "row",
    backgroundColor: variable.semiDarkColor,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6 * dh

  },
  checkinout: {
    paddingHorizontal: variable.contentPadding2x * dw,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    height: "100%"
  },
  textInOut: {
    fontSize: variable.fontSizeSmallText * dw,
    marginBottom: 9.5 * dh,
    color: variable.whiteColor,
    textAlign: "left",
    fontFamily: variable.fontFamilyBold,
  },
  textDate: {
    fontSize: variable.fontSizeInputText * dw,
    color: variable.whiteColor,
    textAlign: "left",
    fontFamily: variable.fontFamilyBold,
  },
  description: {
    flexDirection: "row",
    flex: 3,
    marginBottom: 10 * dh,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",

  },
  book: {
    flex: 2,
    backgroundColor: variable.accentColor,
    borderRadius: variable.borderRadiusBase,
    justifyContent: "center",
    alignItems: "center",
    marginTop: variable.contentPadding2x * dh,
    maxHeight: 41 * dh
  },
  iconstyle: {
    width: 23,
    height: 23,
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
