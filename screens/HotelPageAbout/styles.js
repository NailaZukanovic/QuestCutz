import {
  StyleSheet,
  Dimensions
} from "react-native";
import {
  dh,
  dw
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

const window = Dimensions.get("window");
const descriptionSIZE = window.height / 3;
export default StyleSheet.create({
  mainContainer: {
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingTop: 3 * dh,
    paddingBottom: 10 * dh,
  },
  facilities: {
    flex: 1,
    flexDirection: "row",
    marginRight: 22 * dw
  },
  description: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: variable.whiteColor,
    height: descriptionSIZE,
  },
  title: {
    marginVertical: variable.contentPadding2x * dh,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rating: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  quantityBlock: {
    height: 50 * dw,
    width: 50 * dw,
    backgroundColor: variable.accentColor,
    borderRadius: variable.borderRadiusBase,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    fontSize: variable.fontSizeH1 * dw,
    color: variable.whiteColor,
    fontFamily: variable.fontFamilyBold
  },
  reviews: {
    flex: 12,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  reviewText: {
    flex: 1,
    justifyContent: "center",
    fontSize: variable.fontSizeH3 * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.darkColor,
  },
  underReviews: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  stars: {
  },
  quantityReviews: {
    fontSize: variable.fontSizeSmallText * dw,
    marginLeft: variable.contentPaddingBase * dw
  },
  readmore: {
    flex: 1,
    textAlign: "right",
    fontSize: variable.fontSizeSmallText * dw,
    color: variable.accentColor
  },
  navigation: {
    paddingVertical: 10 * dw,
    paddingHorizontal: 10 * dh,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  navigationText: {
    color: variable.whiteColor,
    fontSize: variable.fontSizeBase * dw
  },

  book: {
    backgroundColor: variable.accentColor,
    borderRadius: variable.borderRadiusBase,
    justifyContent: "center",
    alignItems: "center",
    marginTop: variable.contentPadding4x * dh,
    height: 41 * dh,
    flex: 1
  },
  textDate: {
    fontSize: variable.fontSizeBase * dw,
    color: variable.whiteColor,
    fontFamily: variable.fontFamilyBold
  },
  titleText: {
    fontSize: variable.fontSizeH3 * dw,
    fontFamily: variable.fontFamilyBold,
    color: variable.darkColor,
    marginTop: 5 * dh
  },
  singleFacility: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  facilityText: {
    fontSize: variable.fontSizeSmallText * dw,
    color: variable.accentColor,
    fontFamily: variable.fontFamilyBold,
  },
  about: {
    textAlign: "left",
    fontSize: variable.fontSizeBase * dw
  },
  textPlus: {
    fontSize: variable.fontSizeH2 * dw,
    color: variable.accentColor,
    marginLeft: variable.contentPadding2x
  }
});
