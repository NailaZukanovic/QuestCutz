import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { dw, dh } from "../../../components/Scaler";
export default class Traveler extends React.Component {
  render() {
    return (
      <Svg
        height={this.props.height}
        width={this.props.width}
        viewBox="0 0 81 81"
      >
        <G fill="none" fill-rule="evenodd">
          <G stroke="#FFF" stroke-linecap="round" stroke-linejoin="round">
            <Path d="M.844 73.277l80.805.196M25.434 79.425l42.952.196M13.14 79.425h6.802" />
          </G>
          <G fill-rule="nonzero">
            <Path fill="#E6AF78" d="M51.5 51.367V42.5H29v8.867L40.25 61.5z" />
            <Path
              d="M69.146 55.272l-15.468-3.655a2.477 2.477 0 0 1-.65-.262L40.5 58.693 28.46 51a2.488 2.488 0 0 1-1.137.618l-15.468 3.654A5.016 5.016 0 0 0 8 60.16v9.83c0 1.387 1.12 2.511 2.5 2.511h60c1.38 0 2.5-1.124 2.5-2.51v-9.83a5.016 5.016 0 0 0-3.854-4.888z"
              fill="#EFF2FA"
            />
            <Path
              d="M29 42.5v9.288c14.172 5.137 22.5-7.72 22.5-7.72V42.5H29z"
              fill="#D29B6E"
            />
            <Path
              d="M24.5 13.5l1.09 23.964a7.5 7.5 0 0 0 2.991 5.66L33.75 47a7.5 7.5 0 0 0 4.5 1.5h5a7.5 7.5 0 0 0 4.5-1.5l5.169-3.876a7.5 7.5 0 0 0 2.992-5.66L57 13.5H24.5z"
              fill="#F0C087"
            />
            <Path
              d="M37.103 18.5c5.042 0 12.603-1.25 14.397-5h-27l1.098 23.964a7.482 7.482 0 0 0 3.017 5.66L33.826 47a7.604 7.604 0 0 0 4.538 1.5h2.52c-2.52 0-7.562-5-7.562-11.25v-15c0-1.25 1.26-3.75 3.781-3.75z"
              fill="#E6AF78"
            />
            <G fill="#E4EAF6">
              <Path d="M17.227 64.287l-8.082-7.24A4.958 4.958 0 0 0 8.07 60.13v9.742a2.491 2.491 0 0 0 2.495 2.487h8.731v-3.445a6.212 6.212 0 0 0-2.069-4.627zM63.774 64.287l8.082-7.24a4.958 4.958 0 0 1 1.074 3.083v9.742a2.491 2.491 0 0 1-2.494 2.487h-8.731v-3.445c0-1.766.752-3.448 2.069-4.627z" />
            </G>
            <Path fill="#5B5D6E" d="M44 72.5h-6.5l.813-11.5h4.874z" />
            <Path
              d="M44 58.5h-6.5v2.51c0 .823.65 1.49 1.453 1.49h3.593c.803 0 1.454-.667 1.454-1.49V58.5z"
              fill="#515262"
            />
            <G fill="#E4EAF6">
              <Path d="M29.083 48.327L40.5 58.7s-3.197 1.63-7.143 4.914a1.595 1.595 0 0 1-2.482-.566l-5.364-11.914 1.697-2.57a1.242 1.242 0 0 1 1.875-.237zM51.918 48.327L40.5 58.7s3.198 1.63 7.144 4.914a1.595 1.595 0 0 0 2.481-.566l5.365-11.914-1.697-2.57a1.242 1.242 0 0 0-1.875-.237z" />
            </G>
            <Path
              d="M48 5.282l1.185 8.345c5.41 1.078 6.19 9.536 6.301 11.952.02.439.161.862.4 1.23L57.95 30s-.707-5.274 2.528-8.816c0 0 1.11-20.94-12.478-15.902z"
              fill="#785550"
            />
            <Path
              d="M59.417 29.217l-1.498 5.645C57.74 35.53 57.103 36 56.37 36c-.805 0-1.483-.564-1.583-1.316l-.766-5.774c-.205-1.545 1.074-2.91 2.727-2.91h.001c1.788 0 3.1 1.583 2.667 3.217z"
              fill="#F0C087"
            />
            <Path
              d="M25.576 3.233l1.853 1.262c-8.38 6.171-6.813 16.756-6.813 16.756 2.506 2.5 2.506 8.749 2.506 8.749l2.506-2.5s-.967-7.22 3.758-9.998c4.386-2.578 8.223-1.25 12.138-1.25 10.494 0 13.43-3.945 12.921-8.75C54.182 5.018 50.372-.16 40.663.005c-3.918.066-11.276 1.25-15.087 3.229z"
              fill="#694B4B"
            />
            <Path
              d="M24.837 15.16s-1.329-5.232 2.58-10.66c-8.365 6.17-6.801 16.753-6.801 16.753C23.117 23.752 23.117 30 23.117 30l2.502-2.5s-.965-7.219 3.753-9.996c4.378-2.577 8.208-1.25 12.117-1.25 1.704 0 3.189-.114 4.511-.309-8.068.27-12.823-5.835-21.163-.784z"
              fill="#5A4146"
            />
            <Path
              d="M21.583 29.217l1.498 5.645c.178.669.816 1.138 1.548 1.138.805 0 1.483-.564 1.583-1.316l.766-5.774c.205-1.545-1.074-2.91-2.727-2.91h-.001c-1.788 0-3.1 1.583-2.667 3.217z"
              fill="#E6AF78"
            />
            <Path
              d="M57.222 70h-8.944c-.706 0-1.278.56-1.278 1.25v1.25h11.5v-1.25c0-.69-.572-1.25-1.278-1.25z"
              fill="#E4EAF6"
            />
          </G>
        </G>
      </Svg>
    );
  }
}
Traveler.defaultProps = {
  height: 70 * dh,
  width: 70 * dw
};
