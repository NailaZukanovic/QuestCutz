import {StyleSheet} from "react-native";
import {dh} from "../../components/Scaler";
import variable from "../../variables/commonColors";

export default StyleSheet.create({
  divider: {
    borderColor: variable.dividerDark,
    borderWidth: 0.5,
    marginVertical: 10 * dh
  },
  scrollViewBlock: {
    flex: 1,
    padding: variable.contentPadding2x,
    backgroundColor: variable.whiteColor
  },
});
