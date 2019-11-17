import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  imagePhoto: {
    borderRadius: variable.borderRadiusBase,
    width: 70 * dh,
    height: 70 * dh,
    marginRight: variable.contentPadding2x * dw
  },
  description: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textDescription: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingRight: variable.contentPadding2x
  },
  textBig: {
    fontFamily: variable.fontFamilyBold,
    fontSize: variable.fontSizeInputText * dw,
    color: variable.darkColor,
    marginBottom: 2 * dh,
  },
  textSmall: {
    marginTop: 2 * dh,
    color: variable.darkColor,
    fontSize: variable.fontSizeBase * dw,
  },
  textDate: {
    color: variable.dividerDark,
    fontSize: variable.fontSizeSmallText * dw,
    paddingTop: 6 * dh
  },
  rating: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: variable.contentPaddingBase * dh
  },
  textWrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  priceBarText: {
    fontSize: variable.fontSizePriceText * dw,
    color: variable.whiteColor,
  },
  priceBar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: variable.accentColor,
    height: 15 * dh,
    borderRadius: variable.borderRadiusBase * dw,
    margin: 6.5 * dw,
    paddingHorizontal: 4 * dw
  },
  dateBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2
  },
  dateBlockText: {
    color: variable.dividerDark,
    marginRight: 10
  }
});
