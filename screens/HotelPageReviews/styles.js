import {StyleSheet} from "react-native";
import {
  dh,
  dw
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
    mainView: {
      flex: 1,
      flexDirection: "column",
      padding: variable.contentPadding2x * dh
    },
    descriptionBlock: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },
    descriptionReviewBlock: {
      flex: 4,
      paddingTop: variable.contentPaddingBase * dh,
      paddingBottom: variable.contentPadding2x * dh
    },
    ratingBlock: {
      flex: 1,
      alignItems: "flex-start",
    },
    animatedViewBlockStyle: {
      flex: 1,
      backgroundColor: variable.whiteColor
    },
    additionalBlock: {
      flexDirection: "row",
      paddingTop: variable.contentPadding2x * dh
    },
    rateUsBlock: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "flex-start"
    },
    newReviewBlock: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexDirection: "row"
    },
    singleReview: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    titleReviewText: {
      fontSize: variable.fontSizeH3 * dw,
      fontFamily: variable.fontFamilyBold
    },
    dateReviewText: {
      color: variable.dividerDark,
      fontSize: variable.fontSizeSmallText * dw,
      marginLeft: variable.contentPaddingBase * dw
    },
    descriptionReview: {
      fontSize: variable.fontSizeSmallText * dw
    },
    dividerReviews: {
      borderColor: variable.dividerDark,
      borderWidth: 0.5,
      marginTop: variable.contentPadding2x * dh
    },
    textRateUs: {
      fontSize: variable.fontSizeH2 * dw,
      color: variable.darkColor,
      marginLeft: variable.contentPadding2x * dw,
      fontFamily: variable.fontFamilyBold,
      paddingBottom: variable.contentPaddingBase * dh
    },
    textAddReview: {
      fontSize: variable.fontSizeBase * dw,
      color: variable.darkColor,
      fontFamily: variable.fontFamilyBold,
      justifyContent: "center",
      alignItems: "center",
      paddingRight: variable.contentPaddingBase * dw,
      height: 19 * dh
    }
});
