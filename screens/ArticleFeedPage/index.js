import React from "react";
import {
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
import TopBar from "../../components/TopBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import DescriptionObject from "../../components/DescriptionObject";
import tempObjects from "./data";
import variable from "../../variables/commonColors";

export default class ArticleFeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  static navigationOptions = {
    drawerLabel: "Feed",
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="md-paper" size={23} color={tintColor} />
    )
  };
  OnBack = () => {
    this.props.navigation.goBack();
  };
  onFav = () => {
    this.props.navigation.navigate({
      routeName: "ProfileScreen",
      key: "ProfileScreen"
    });
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 0);
  }
  renderObjects = objects => {
    return objects.map((item, i) => {
      return (
        <View key={i} style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "ArticlePage",
                key: "ArticlePage"
              });
            }}
          >
            <DescriptionObject
              title={item.title}
              text={item.text}
              date={item.dateText}
              image={item.image}
              textColor={variable.darkColor}
              imagePosition="right"
            />
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
      );
    });
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" hidden={false} />
          <TopBar
            leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
            rightIcon={{
              name: "ios-person",
              action: this.onFav,
              size: 30
            }}
            topbarText="Feed"
          />
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <TopBar
          leftIcon={{ name: "ios-arrow-back", action: this.OnBack, size: 23 }}
          rightIcon={{
            name: "ios-person",
            action: this.onFav,
            size: 30
          }}
          topbarText="Feed"
        />
        <View style={styles.viewWrapper}>
          <ScrollView style={styles.objectWrapper}>
            {this.renderObjects(tempObjects)}
          </ScrollView>
        </View>
      </View>
    );
  }
}
