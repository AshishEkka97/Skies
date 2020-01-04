import React from 'react';
import {View, StyleSheet} from 'react-native';

import Details from './Details';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';

import color from '../utils/accent';

const BottomWrapper = props => {
  const {data, settings} = props;

  const getBackground = condition => {
    return color[condition];
  };

  return (
    <View
      style={{
        backgroundColor: data.currently
          ? getBackground(data.currently.icon)
          : '#297285',
      }}>
      <View style={styles.content}>
        <Details
          currently={data.currently}
          daily={data.daily}
          settings={settings}
        />
        <HourlyForecast
          daily={data.daily}
          hourly={data.hourly}
          settings={settings}
        />
        <WeeklyForecast daily={data.daily} settings={settings} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 10,
    flex: 1,
    paddingVertical: 10,
  },
});

export default BottomWrapper;
