import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  container: {
    backgroundColor: variable.darkColor,
    flex: 1,
    paddingTop: variable.contentPadding4x
  },
  scrollViewBlock: {
    flex: 1,
    paddingHorizontal: variable.contentPadding2x * dw,
    paddingTop: 12 * dw,
    paddingBottom: variable.contentPadding2x * dh,
    backgroundColor: variable.whiteColor
  },
  divider: {
    borderColor: variable.dividerDark,
    borderWidth: 0.5,
    marginBottom: variable.contentPadding2x * dw,
    marginTop: variable.contentPaddingBase * dh
  },
});
