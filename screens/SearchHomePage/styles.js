import {StyleSheet} from "react-native";
import {
  dh,
  dw
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  main: {
    flexDirection: "column",
    backgroundColor: variable.darkColor,
  },
  mainView: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  scrollViewStyle: {
    flex: 1,
    position: "relative"
  },
  searchBarBlock: {
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingTop: 17 * dh
  },
  inputFieldStyle: {
    backgroundColor: "white",
    paddingLeft: variable.contentPadding2x * dw,
    height: 20 * dh,
    fontSize: variable.fontSizeInputText * dw,
    marginVertical: 10.5 * dh,
    marginHorizontal: 0,
    color: variable.darkColor
  },
  containerBlockStyle: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: variable.borderRadiusBase * dw,
    height: 41 * dh
  },
  bottomBlock: {
    backgroundColor: variable.whiteColor,
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingVertical: variable.contentPadding2x * dh
  },
  paddingBlock: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: variable.contentPadding2x * dh
  },
  touchableOpacityBlock: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  lastBlock: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "100%",
    backgroundColor: variable.whiteColor,
    zIndex: -1
  },
  photo: {
    backgroundColor: variable.darkColor,
    paddingBottom: variable.contentPadding2x * dh
  },
  textMake: {
    fontSize: variable.fontSizeH3 * dw,
    justifyContent: "center",
    alignItems: "flex-start",
    color: variable.whiteColor,
  },
  textQuantity: {
    fontSize: 13 * dw,
    justifyContent: "center",
    alignItems: "flex-start",
    color: variable.whiteColor,
    paddingVertical: variable.contentPadding2x * dh
  },
  text: {
    fontSize: variable.fontSizeH3 * dw,
    justifyContent: "center",
    alignItems: "flex-start",
    color: variable.whiteColor,
    paddingLeft: variable.contentPadding2x * dw,
    paddingTop: variable.contentPadding2x * dh,
    paddingBottom: 12 * dh,
    fontFamily: variable.fontFamilyBold
  },
  textDistricts: {
    fontSize: variable.fontSizeBase * dw,
    justifyContent: "center",
    alignItems: "flex-start",
    color: variable.whiteColor,
    paddingLeft: variable.contentPadding2x * dw,
    paddingTop: variable.contentPaddingBase * dh,
    paddingBottom: variable.contentPaddingBase * dh,
    fontFamily: variable.fontFamilyBold
  },
  textRecommended: {
    fontSize: variable.fontSizeH3 * dw,
    justifyContent: "center",
    alignItems: "center",
    color: variable.darkColor,
    fontFamily: variable.fontFamilyBold
  },
  divider: {
    borderColor: variable.dividerDark,
    borderWidth: 0.5,
    marginTop: variable.contentPaddingBase * dh,
    marginBottom: variable.contentPadding2x * dh,
  },
  filter: {
    fontSize: variable.fontSizeBase * dw,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: variable.contentPaddingBase * dw,
    fontFamily: variable.fontFamilyBold
  },
  borderHidden: {
    width: 200,
    height: 200,
    borderRadius: 10 * dw,
    overflow: "hidden",
    justifyContent: "flex-end",
    borderColor: "rgba(0,0,0,0)",
    borderStyle: "solid",
    borderWidth: 4 * dw,
    paddingVertical: 5 * dh,
    paddingHorizontal: 5 * dw,
    marginLeft: 8 * dw
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10 * dw,
    opacity: 0.5
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
