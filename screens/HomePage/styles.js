import {StyleSheet} from "react-native";
import {
  dw,
  dh, DEFAULT_WIDTH
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  logoWithText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  logoStyle: {
    width: 21 * dw,
    height: 25 * dh
  },
  scrollViewBlock: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  secondContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: variable.contentPadding2x * dw
  },
  firstAnimatedBlock: {
    opacity: this.viewHeight,
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingBottom: variable.contentPadding2x * dh,
    zIndex: 0
  },
  destination: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: variable.contentPadding2x * dw,
    marginBottom: 12 * dh
  },
  textInputField: {
    flex: 1,
    color: variable.whiteColor,
    textAlign: "left",
    fontSize: variable.fontSizeInputText * dw
  },
  travelText: {
    flex: 4,
    color: variable.whiteColor,
    textAlign: "left",
    fontSize: variable.fontSizeSmallText * dw
  },
  booking: {
    flex: 2,
    backgroundColor: variable.whiteColor,
    paddingHorizontal: variable.contentPadding2x * dh,
    paddingVertical: variable.contentPadding2x * dw,
    flexDirection: "row"
  },
  giftBlock: {
    backgroundColor: variable.accentColor,
    height: 45,
    width: 45,
    borderRadius: variable.borderRadiusBase,
    justifyContent: "center",
    alignItems: "center"
  },
  yourfirstbookingtext: {
    flex: 1,
    paddingLeft: variable.contentPadding2x * dw,
    justifyContent: "flex-start"
  },
  secondAnimatedBlock: {
    backgroundColor: variable.darkColor,
    paddingHorizontal: variable.contentPadding2x * dh,
    paddingVertical: variable.contentPadding2x * dw
  },
  secondTextInput: {
    flex: 1,
    color: variable.darkColor,
    textAlign: "left",
    paddingHorizontal: variable.contentPadding2x * dw,
    fontSize: variable.fontSizeInputText * dw
  },
  textInputBlock: {
    height: 40,
    flexDirection: "row",
    backgroundColor: variable.whiteColor,
    borderRadius: variable.borderRadiusBase
  },
  TouchableOpacityBlock: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: variable.contentPadding2x
  },

  topbarText: {
    fontSize: 18 * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.whiteColor,
    textAlign: "center",
    marginHorizontal: 10 * dh
  },
  simpleText: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.darkColor
  },
  searchHeader: {
    flex: 1,
    fontSize: variable.fontSizeH2 * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.whiteColor,
  },
  dividerDark: {
    borderBottomWidth: 1,
    marginHorizontal: variable.contentPadding4x * dw,
    borderBottomColor: variable.darkColor,
    zIndex: -1,
  },
  searchFormRow: {
    paddingHorizontal: variable.contentPadding2x * dw,
    marginHorizontal: variable.contentPadding2x * dw,
    flexDirection: "row"
  },
  searchText: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.whiteColor,
    marginTop: variable.contentPaddingBase
  },
  subscribeButtonText: {
    fontSize: variable.fontSizeBase * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.darkColor,
  },
  button: {
    backgroundColor: variable.accentColor,
    borderRadius: variable.borderRadiusBase * dw,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: variable.contentPadding2x * dh,
    marginHorizontal: variable.contentPadding2x * dw,
    height: 41 * dh
  },
  titleText: {
    fontSize: variable.fontSizeH3 * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.whiteColor,
  },
  buttonText: {
    fontSize: variable.fontSizeBase * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.whiteColor,
  },
  searchForm: {
    borderRadius: variable.borderRadiusBase * dw,
    backgroundColor: variable.semiDarkColor,
    marginTop: variable.contentPadding2x * dh,
    paddingHorizontal: variable.contentPadding2x * dh
  },
  requiredField: {
    fontSize: 14 * dw,
    width: "100%",
    color: variable.errorColor,
    paddingVertical: variable.contentPaddingBase * dh
  },
  valid: {
    justifyContent: "center",
    width: DEFAULT_WIDTH * dw,
    paddingLeft: variable.contentPadding2x * dw,
    alignItems: "flex-start",
    minHeight: 15.5 * dh,
    maxHeight: 32.5 * dh
  }
});
