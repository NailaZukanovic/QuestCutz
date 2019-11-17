import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
 viewWrapper: {
   flex: 1,
   backgroundColor: variable.whiteColor
 },
 objectWrapper: {
  flex: 1,
  flexDirection: "column",
  paddingVertical: variable.contentPadding2x * dh,
  paddingLeft: variable.contentPadding2x * dw
 },
 container: {
   backgroundColor: variable.darkColor,
   flex: 1,
   paddingTop: variable.contentPadding4x
 },
 topbarText: {
   fontSize: 18 * dw,
   fontFamily: variable.fontFamilyBold,
   color: variable.whiteColor,
   textAlign: "center",
   marginHorizontal: 10 * dw
 },
 divider: {
   borderColor: variable.dividerDark,
   borderWidth: 0.5,
   marginVertical: variable.contentPadding2x * dh,
   marginRight: variable.contentPadding2x * dw
 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
