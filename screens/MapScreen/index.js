import React from "react";
import { MapView } from "expo";

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarOnPress: event => {
      event.navigation.state.params.onChangeView("Map");
      event.defaultHandler();
    }
  };
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 55.7352846,
          longitude: 37.7138573,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        }}
      />
    );
  }
}
