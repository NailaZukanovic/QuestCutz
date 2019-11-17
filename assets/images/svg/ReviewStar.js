import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

export default function ReviewStart(props) {
  return (
    <Svg width="135" height="135" viewBox="0 0 135 135">
      <G stroke="none" strokeWidth="1">
        <G transform="translate(-120.000000, -137.000000)">
          <G transform="translate(120.000000, 137.000000)">
            <Circle fill="#4D4DEB" opacity="0.7" cx="67.5" cy="67.5" r="47.5" />
            <Circle fill="#4D4DEB" opacity="0.7" cx="67.5" cy="67.5" r="57.5" />
            <Circle fill="#4D4DEB" opacity="0.7" cx="67.5" cy="67.5" r="67.5" />
            <Circle fill="#4D4DEB" x="67.5" y="67.5" r="36.5" />
          </G>
          <Path
            d="M202.785714,200.224852 L192.278571,200.224852 L189.085714,190.752663 C188.928571,190.291124 188.492857,190 188,190 C187.507143,190 187.071429,190.291124 186.914286,190.752663 L183.721429,200.224852 L173.142857,200.224852 C172.514286,200.224852 172,200.736095 172,201.360947 C172,201.424852 172.007143,201.495858 172.021429,201.552663 C172.035714,201.801183 172.15,202.078107 172.5,202.35503 L181.135714,208.404734 L177.821429,217.983432 C177.657143,218.44497 177.821429,218.963314 178.214286,219.261538 C178.421429,219.410651 178.614286,219.538462 178.857143,219.538462 C179.092857,219.538462 179.371429,219.417751 179.571429,219.28284 L188,213.311243 L196.428571,219.28284 C196.628571,219.424852 196.907143,219.538462 197.142857,219.538462 C197.385714,219.538462 197.578571,219.417751 197.778571,219.261538 C198.178571,218.963314 198.335714,218.452071 198.171429,217.983432 L194.857143,208.404734 L203.421429,202.298225 L203.628571,202.12071 C203.814286,201.921893 204,201.652071 204,201.360947 C204,200.736095 203.414286,200.224852 202.785714,200.224852 Z"
            fill="#FFFFFF"
          />
        </G>
      </G>
    </Svg>
  );
}