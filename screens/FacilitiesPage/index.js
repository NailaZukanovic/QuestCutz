import React from "react";
import { Text, View, StatusBar, ScrollView } from "react-native";
import TopBar from "../../components/TopBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import variable from "../../variables/commonColors";

export default class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  OnBack = () => {
    this.props.navigation.navigate({
      routeName: "HotelPage",
      key: "HotelPage"
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          topbarText={"Hyatt Roma Lounge Facilities"}
        />
        <ScrollView style={styles.scrollViewBlock}>
          <View style={styles.nextFacilities}>
            <Ionicons
              name="ios-wifi"
              size={23}
              color={variable.accentColor}
              style={styles.facility}
            />
            <Text style={styles.facilitiesTitle}>Wi-fi</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.value}>
              I have hinted that I would often jerk poor Queequeg from between
              the whale and the ship—where he would occasionally fall, from the
              incessant rolling and swaying of both. But this was not the only
              jamming jeopardy he was exposed to.
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.nextFacilities}>
            <Ionicons
              name="ios-desktop"
              size={23}
              color={variable.accentColor}
              style={styles.facility}
            />
            <Text style={styles.facilitiesTitle}>TV</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.value}>
              Unappalled by the massacre made upon them during the night, the
              sharks now freshly and more keenly allured by the before pent
              blood which began to flow from the carcass—the rabid creatures
              swarmed round it like bees in a beehive.
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.nextFacilities}>
            <Ionicons
              name="ios-beer"
              size={23}
              color={variable.accentColor}
              style={styles.facility}
            />
            <Text style={styles.facilitiesTitle}>Beer</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.value}>
              1. I have hinted that I would often
              {"\n"}
              2. But this was not the only
              {"\n"}
              3. Unappalled by the massacre made
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.nextFacilities}>
            <Ionicons
              name="ios-american-football"
              size={23}
              color={variable.accentColor}
              style={styles.facility}
            />
            <Text style={styles.facilitiesTitle}>Gym</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.value}>
              Unappalled by the massacre made upon them during the night, the
              sharks now freshly and more keenly allured by the before pent
              blood which began to flow from the carcass—the rabid creatures
              swarmed round it like bees in a beehive.
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.nextFacilities}>
            <Ionicons
              name="ios-car"
              size={23}
              color={variable.accentColor}
              style={styles.facility}
            />
            <Text style={styles.facilitiesTitle}>Transfer</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.value}>
              Unappalled by the massacre made upon them during the night, the
              sharks now freshly and more keenly allured by the before pent
              blood which began to flow from the carcass—the rabid creatures
              swarmed round it like bees in a beehive.
            </Text>
          </View>
          <View style={styles.divider} />
        </ScrollView>
      </View>
    );
  }
}
