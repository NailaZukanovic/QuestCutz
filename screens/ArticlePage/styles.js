import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  news: {
    flex: 1,
    borderLeftWidth: 2,
    height: "100%",
    borderLeftColor: variable.accentColor
  },
  TouchableOpacityBlock: {
    flexDirection: "row",
    alignItems: "center",
    padding: variable.contentPadding2x * dw
  },
  lastBlock: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "100%",
    backgroundColor: variable.whiteColor,
    zIndex: -1
  },
  articleTitle: {
    justifyContent: "flex-start",
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingBottom: 24 * dh
  },
  topicBlock: {
    marginTop: variable.contentPadding2x * dh,
    justifyContent: "center",
    backgroundColor: variable.accentColor
  },
  mainTopic: {
    padding: variable.contentPadding2x * dh,
  },
  date: {
    justifyContent: "center",
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingTop: 6 * dh,
    paddingBottom: variable.contentPadding2x * dh
  },
  weeklyNewsBlock: {
    justifyContent: "flex-end",
    paddingHorizontal: variable.contentPadding2x * dw
  },
  textNews: {
    alignItems: "center",
    justifyContent: "center"
  },
  textDate: {
    color: variable.whiteColor
  },
  mainText: {
    color: variable.darkColor
  },
  priceChecker: {
    fontSize: variable.fontSizeInputText * dw,
    color: variable.accentColor
  },
  weeklyNews: {
    fontSize: variable.fontSizeH1 * dw,
    color: variable.whiteColor,
    fontFamily: variable.fontFamilyBold
  },
  mainTitleText: {
    fontSize: variable.fontSizeH3 * dw,
    color: variable.darkColor,
    fontFamily: variable.fontFamilyBold
  },
  container: {
      flex: 1,
      backgroundColor: variable.darkColor
  },
  facilities: {
    flex: 1,
    flexDirection: "row"
  },
  articleContainer: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  scrollArticle: {
    flex: 1,
    position: "relative"
  },
  ArticleHotelsTitle: {
    paddingBottom: variable.contentPadding2x * dh,
    paddingLeft: variable.contentPadding2x * dw
  },
  mainTitle: {
    justifyContent: "center",
    backgroundColor: variable.whiteColor
  },
  articleNews: {
    padding: variable.contentPadding2x * dw,
  },
  lastText: {
    backgroundColor: variable.whiteColor,
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingBottom: variable.contentPadding2x * dh
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
