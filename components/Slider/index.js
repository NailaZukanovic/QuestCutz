import React from "react";
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import Carousel, {
  Pagination,
  ParallaxImage
} from "react-native-snap-carousel";
import PropTypes from "prop-types";
import styles from "./styles";
import ENTRIES1 from "./data";
import variable from "../../variables/commonColors";

const SLIDER_1_FIRST_ITEM = 0;
const colors = {
  black: variable.blackColor,
  background1: variable.darkColor,
  white: variable.whiteColor,
  blue: variable.accentColor,
  grey: variable.dividerDark
};
const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
const slideHeight = viewportHeight * 0.3;
const itemHorizontalMargin = 0;

export const sliderWidth = viewportWidth;
export const itemWidth = sliderWidth;

const stylesEntry = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingBottom: 0
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: "white"
  },
  imageContainerEven: {
    backgroundColor: colors.black
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  }
});

class SliderEntry extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const {
      data: { illustration },
      parallax,
      parallaxProps,
      even
    } = this.props;
    return parallax ? (
      <ParallaxImage
        source={illustration}
        containerStyle={[
          stylesEntry.imageContainer,
          even ? stylesEntry.imageContainerEven : {}
        ]}
        style={stylesEntry.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.25)"}
        {...parallaxProps}
      />
    ) : (
      <Image source={{ uri: illustration }} style={stylesEntry.image} />
    );
  }

  render() {
    const { even } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={stylesEntry.slideInnerContainer}
      >
        <View style={stylesEntry.shadow} />
        <View
          style={[
            stylesEntry.imageContainer,
            even ? stylesEntry.imageContainerEven : {}
          ]}
        >
          {this.image}
        </View>
      </TouchableOpacity>
    );
  }
}
export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }
  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }
  render() {
    const { slider1ActiveSlide } = this.state;
    let slides = ENTRIES1;
    if (this.props.slides) {
      slides = this.props.slides;
    }
    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={this._slider1Ref}
          data={slides}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={1}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={false}
          autoplay={false}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={slides.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={colors.blue}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotColor={colors.grey}
          inactiveDotOpacity={0.7}
          dotContainerStyle={{ marginHorizontal: 0.5 }}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }
}
