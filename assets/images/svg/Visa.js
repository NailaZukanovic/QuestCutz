import React from "react";
import Svg, { Path, Polygon, Rect } from "react-native-svg";

export default function Visa(props) {
  return (
    <Svg height="60" width="95" viewBox="0 0 412 257.65">
      <Rect height="257.5" fill="none" width="412" />
      <Polygon
        fill="#fff"
        points="0 6.4 0 250.7 411.75 250.7 411.75 6.4 0 6.4"
      />
      <Polygon
        fill="#005198"
        points="68.2 90.6 92.2 181.2 120.1 181.2 163.45 76.25 135.2 76.25 107.85 147.5 96.65 91.75 68.2 90.6"
      />
      <Polygon
        fill="#005198"
        points="174 75.85 157.35 181.2 183.7 181.2 200.75 75.85 174 75.85"
      />
      <Path
        fill="#005198"
        d="M278.2,101.05l3.85-22a76.5,76.5,0,0,0-25.55-4.65c-13.95,0-44.15,8.9-44.15,34.85s37.55,27.1,37.55,41.45-33.7,12.8-43.75,3.5L201.9,177s15.1,5.8,28.65,5.8,47.25-3.1,47.25-36.8c0-29.45-37.55-23.65-37.55-41.45,0,0,3.85-17.85,37.95-3.5Z"
      />
      <Path
        fill="#005198"
        d="M276.25,181.2H305.3l5.05-15.1H346l2.95,15h25.2L351,77H327.75s-8.5,1-12.4,11.25c-3.65,9.75-39.1,92.95-39.1,92.95Z"
      />
      <Polygon
        fill="#fff"
        points="341.7 144.4 318.05 144.4 332.8 105.7 341.7 144.4"
      />
      <Path
        fill="#005198"
        d="M104.9,132.9,96.65,91.75S95.55,76.3,84.5,76.3h-45v2.15S84,85.8,104.9,132.9Z"
      />
      <Polygon
        fill="#f6a800"
        points="411.75 196.6 0 196.6 0 257.65 411.75 257.65 411.75 196.6"
      />
      <Rect height="61.05" fill="#005198" width="411.8" />
    </Svg>
  );
}
