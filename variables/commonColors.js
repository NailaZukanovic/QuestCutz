import { Platform } from "react-native";

const platform = Platform.OS;

export default {
  //Main Colors
  darkColor: "#1c1e2c",
  semiDarkColor: "#23273c",
  accentColor: "#4d4deb",
  dividerDark: "#c2c2c2",
  errorColor: "#eb4d77",
  goldColor: "#ffc300",
  whiteColor: "#fff",
  blackColor: "#000",
  successColor: "#0ed341",
  greyLight: "#f7f7f7",

  //Font Family
  fontFamilyRegular: "Roboto-Regular",
  fontFamilyBold: "Roboto-Bold",

  // Font
  DefaultFontSize: 16,
  fontFamily: platform === "ios" ? "System" : "Roboto",
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },
  fontSizeInputText: 17,
  fontSizeSmallText: 12,
  fontSizePriceText: 10,

// Other
  borderRadiusBase: 5,
  contentPaddingBase: 8,
  get contentPadding2x() {
    return this.contentPaddingBase * 2;
  },
  get contentPadding4x() {
    return this.contentPaddingBase * 4;
  },
};
