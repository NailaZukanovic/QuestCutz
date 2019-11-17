import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  mainView: {
    flexDirection: "column",
    flex: 1
  },
  imageBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: 100 * dh,
    height: 100 * dh,
    borderRadius: 50 * dh,
    marginVertical: 21 * dh
  },
  personBlock: {
    flex: 2,
    paddingHorizontal: 10 * dw,
    paddingVertical: 10 * dh,
    marginLeft: 13 * dw,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  navigation: {
    paddingHorizontal: 10 * dw,
    paddingVertical: 10 * dh,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  navigationText: {
    color: variable.whiteColor,
    fontSize: variable.fontSizeBase * dw
  },
  textName: {
    fontSize: variable.fontSizeH1 * dw,
    color: variable.whiteColor
  },
  textEdit: {
    fontSize: variable.fontSizeSmallText * dw,
    color: variable.whiteColor
  },
  divider: {
    borderColor: variable.dividerDark,
    borderWidth: 0.5,
    marginHorizontal: variable.contentPadding2x * dw,
    marginBottom: variable.contentPadding2x * dh,
    marginTop: variable.contentPaddingBase * dh
  },
  container: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  firstImageBlock: {
    flexDirection: "row",
    flex: 4,
    marginLeft: variable.contentPadding2x * dw
  },
  topTabNav: {
    flexDirection: "column",
    flex: 3.5
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
