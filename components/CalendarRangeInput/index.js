import React from "react";
import { Animated, View, TouchableWithoutFeedback, Text } from "react-native";
import { Calendar, LocaleConfig } from "../react-native-calendars/src/";
import { dw, dh } from "../Scaler";
import styles from "./styles";
import variable from "../../variables/commonColors";

const CALENDAR_WIDTH = 343 * dw;
const CALENDAR_HEIGHT = 311 * dh;
LocaleConfig.locales.en = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul.",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"]
};
const monthNamesShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul.",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

LocaleConfig.defaultLocale = "en";
export default class CalendarRangeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarOpened: false,
      range: [
        {
          focused: false,
          value: ""
        },
        {
          focused: false,
          value: ""
        }
      ]
    };
    this.calendarHeight = new Animated.Value(0);
    this.labelHeight = [new Animated.Value(1), new Animated.Value(1)];
  }
  toggleCalendar = () => {
    if (this.state.calendarOpened) {
      this.setState({ calendarOpened: false });
      Animated.timing(this.calendarHeight, {
        duration: 300,
        toValue: 0
      }).start(() => {});
    } else {
      this.setState({ calendarOpened: true });
      Animated.timing(this.calendarHeight, {
        duration: 300,
        toValue: 1
      }).start(() => {});
    }
  };
  onDayPick = day => {
    let upd = this.state.range;
    if (this.state.range[0].focused) {
      upd[0].value = day.dateString;
      if (this.state.range[1].value === "") {
        upd[1].focused = true;
        upd[0].focused = false;
        Animated.timing(this.labelHeight[1], {
          duration: 300,
          toValue: 0
        }).start(() => {});
      }
    } else if (this.state.range[1].focused) {
      upd[1].value = day.dateString;
      if (this.state.range[0].value === "") {
        upd[0].focused = true;
        upd[1].focused = false;
        Animated.timing(this.labelHeight[0], {
          duration: 300,
          toValue: 0
        }).start(() => {});
      }
    }
    this.setState({ range: upd });
    if (this.state.range[0].value !== "" && this.state.range[1].value !== "") {
      //      this.toggleCalendar();
    }
  };
  onPress = i => {
    let upd = this.state.range;
    upd[i].focused = !this.state.range[i].focused;
    this.setState({ range: upd });
    if (this.state.range[i].value === "") {
      if (!this.state.range[i].focused) {
        Animated.timing(this.labelHeight[i], {
          duration: 300,
          toValue: 1
        }).start(() => {});
      } else {
        Animated.timing(this.labelHeight[i], {
          duration: 300,
          toValue: 0
        }).start(() => {});
      }
    }
    if (!this.state.range[1 - i].focused) {
      this.toggleCalendar();
    } else {
      let upd1 = this.state.range;
      upd1[1 - i].focused = !this.state.range[1 - i].focused;
      this.setState({ range: upd1 });
      if (this.state.range[1 - i].value === "") {
        Animated.timing(this.labelHeight[1 - i], {
          duration: 300,
          toValue: 1
        }).start(() => {});
      }
    }
  };
  getDates = (startDate, endDate) => {
    var dates = [],
      currentDate = startDate,
      addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  };
  getDateString = date => {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    );
  };
  addDays = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
  };
  render() {
    let marks = {};
    let today = new Date();
    let yearFromNow = new Date();
    yearFromNow.setFullYear(yearFromNow.getFullYear() + 1);
    let current = this.getDateString(today);
    let minDate = this.getDateString(today);
    let maxDate = this.getDateString(yearFromNow);
    if (this.state.range[0].value !== "") {
      if (this.state.range[1].value === "") {
        minDate = this.state.range[0].value;
        marks[this.state.range[0].value] = {
          selected: true,
          startingDay: true,
          endingDay: true,
          color: variable.accentColor,
          textColor: variable.whiteColor
        };
      } else {
        minDate = this.getDateString(today);
        maxDate = this.getDateString(yearFromNow);
        let startDate = this.state.range[0].value.split("-");
        let endDate = this.state.range[1].value.split("-");
        startDate = new Date(
          parseInt(startDate[0], 10),
          parseInt(startDate[1], 10) - 1,
          parseInt(startDate[2], 10) + 1
        );
        endDate = new Date(
          parseInt(endDate[0], 10),
          parseInt(endDate[1], 10) - 1,
          parseInt(endDate[2], 10) - 1
        );
        this.getDates(startDate, endDate).forEach(date => {
          marks[this.getDateString(date)] = {
            selected: true,
            color: variable.accentColor
          };
        });
        marks[this.state.range[0].value] = {
          selected: true,
          startingDay: true,
          color: variable.accentColor
        };
      }
    }
    if (this.state.range[1].value !== "") {
      if (this.state.range[0].value === "") {
        maxDate = this.state.range[1].value;
        marks[this.state.range[1].value] = {
          selected: true,
          startingDay: true,
          endingDay: true,
          color: variable.accentColor
        };
      } else {
        minDate = this.getDateString(today);
        maxDate = this.getDateString(yearFromNow);
        let startDate = this.state.range[0].value.split("-");
        let endDate = this.state.range[1].value.split("-");
        startDate = new Date(
          parseInt(startDate[0], 10),
          parseInt(startDate[1], 10) - 1,
          parseInt(startDate[2], 10) + 1
        );
        endDate = new Date(
          parseInt(endDate[0], 10),
          parseInt(endDate[1], 10) - 1,
          parseInt(endDate[2], 10) - 1
        );
        this.getDates(startDate, endDate).forEach(date => {
          marks[this.getDateString(date)] = {
            selected: true,
            color: variable.accentColor
          };
        });
        marks[this.state.range[1].value] = {
          selected: true,
          endingDay: true,
          color: variable.accentColor
        };
      }
    }
    if (this.state.range[0].value !== "" && this.state.range[1].value !== "") {
      if (this.state.range[0].focused) {
        maxDate = this.state.range[1].value;
      }
      if (this.state.range[1].focused) {
        minDate = this.state.range[0].value;
      }
      if (this.state.range[0].value === this.state.range[1].value) {
        marks = {};
        marks[this.state.range[0].value] = {
          selected: true,
          startingDay: true,
          endingDay: true,
          color: variable.accentColor
        };
      }
    }
    let rangeValues = ["", ""];
    if (this.state.range[0].value !== "") {
      let date = this.state.range[0].value.split("-");
      let month = monthNamesShort[parseInt(date[1], 10) - 1].toLowerCase();
      rangeValues[0] = date[2] + " " + month + " " + date[0];
    }
    if (this.state.range[1].value !== "") {
      let date = this.state.range[1].value.split("-");
      let month = monthNamesShort[parseInt(date[1], 10) - 1].toLowerCase();
      rangeValues[1] = date[2] + " " + month + " " + date[0];
    }
    let arrowPos = "-25%";
    if (this.state.range[0].focused) {
      arrowPos = "15%";
    }
    if (this.state.range[1].focused) {
      arrowPos = "65%";
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => this.onPress(0)}
          style={[styles.touchableBlock]}
        >
          <View
            style={[
              styles.animatedBlock,
              { paddingHorizontal: variable.contentPadding2x * dw }
            ]}
          >
            <Animated.Text
              style={[
                {
                  marginLeft: variable.contentPadding2x * dw,
                  transform: [
                    {
                      translateY: this.labelHeight[0].interpolate({
                        inputRange: [0, 1],
                        outputRange: [7 * dh, 30 * dh]
                      })
                    }
                  ],
                  fontSize: this.labelHeight[0].interpolate({
                    inputRange: [0, 1],
                    outputRange: [14 * dw, 17 * dw]
                  })
                },
                styles.label
              ]}
            >
              {this.props.label[0]}
            </Animated.Text>
            <Text numberOfLines={1} style={styles.dateText}>
              {rangeValues[0]}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => this.onPress(1)}
          style={[styles.touchableBlock]}
        >
          <View
            style={[
              styles.animatedBlock,
              { paddingRight: variable.contentPadding2x * dw }
            ]}
          >
            <Animated.Text
              style={[
                {
                  transform: [
                    {
                      translateY: this.labelHeight[1].interpolate({
                        inputRange: [0, 1],
                        outputRange: [7 * dh, 30 * dh]
                      })
                    }
                  ],
                  fontSize: this.labelHeight[1].interpolate({
                    inputRange: [0, 1],
                    outputRange: [14 * dw, 17 * dw]
                  })
                },
                styles.label
              ]}
            >
              {this.props.label[1]}
            </Animated.Text>
            <Text numberOfLines={1} style={styles.dateText}>
              {rangeValues[1]}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={[
            {
              transform: [
                {
                  rotate: "45deg"
                },
                {
                  scale: this.calendarHeight
                }
              ],
              left: arrowPos
            },
            styles.arrow
          ]}
        />
        <Animated.View
          style={[
            {
              paddingTop: this.calendarHeight.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 10]
              }),
              height: this.calendarHeight.interpolate({
                inputRange: [0, 1],
                outputRange: [0, CALENDAR_HEIGHT]
              })
            },
            styles.calendar
          ]}
        >
          <Calendar
            calendarWidth={CALENDAR_WIDTH}
            calendarHeight={CALENDAR_HEIGHT}
            currentDate={current}
            minDate={minDate}
            maxDate={maxDate}
            onDayPress={day => this.onDayPick(day)}
            theme={{
              textDayFontSize: 12 * dw,
              "stylesheet.day.period": {
                base: {
                  width: 33 * dh,
                  height: 29 * dh,
                  alignItems: "center"
                },
                fillers: {
                  position: "absolute",
                  height: 29 * dh,
                  flexDirection: "row",
                  left: 0,
                  right: 0
                },
                leftFiller: {
                  height: 29 * dh,
                  flex: 1
                },
                rightFiller: {
                  height: 29 * dh,
                  flex: 1
                }
              },
              monthTextColor: "#1C1E2C",
              "stylesheet.calendar.header": {
                week: {
                  marginTop: 20 * dh,
                  flexDirection: "row",
                  justifyContent: "space-around"
                },
                arrow: {
                  margin: 4 * dw,
                  paddingVertical: variable.contentPaddingBase * dh,
                  paddingHorizontal: variable.contentPaddingBase * dw,
                  backgroundColor: variable.darkColor,
                  borderRadius: 20
                },
                arrowImage: {
                  tintColor: variable.whiteColor,
                  height: variable.contentPaddingBase * dh,
                  width: variable.contentPaddingBase * dw
                }
              },
              "stylesheet.calendar.main": {
                week: {
                  marginVertical: 0.5,
                  flexDirection: "row",
                  justifyContent: "space-around"
                }
              }
            }}
            markedDates={marks}
            markingType="period"
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          />
        </Animated.View>
      </View>
    );
  }
}
