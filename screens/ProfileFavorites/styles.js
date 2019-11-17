import {StyleSheet} from "react-native";
import {
  dw,
  dh
} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
    divider: {
      borderColor: variable.dividerDark,
      borderWidth: 0.5,
      marginHorizontal: variable.contentPadding2x * dw,
      marginBottom: variable.contentPadding2x * dh,
      marginTop: variable.contentPaddingBase * dh
    },
});
