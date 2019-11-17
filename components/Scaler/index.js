import { Dimensions } from "react-native";
const window = Dimensions.get("window");
const DEFAULT_WIDTH = 375;
const DEFAULT_HEIGHT = 667;
const vw = window.width / 100;
const vh = window.height / 100;
const dw = window.width / DEFAULT_WIDTH;
const dh = window.height / DEFAULT_HEIGHT;
const em = vw * 3.2;
export { vw };
export { vh };
export { dw };
export { dh };
export { em };
export { DEFAULT_WIDTH };
export { DEFAULT_HEIGHT };
