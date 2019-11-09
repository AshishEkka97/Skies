import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text
} from 'react-native';
import background from '../utils/image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconName from '../utils/icons';

const WeatherImage =  (props) => {
  const { data, reverseGeocode } = props;

  const getBackground = (condition) => {
    return background[condition];
  }

  const getIcon = (condition) => {
    return iconName[condition]
  }

  return (
    <ImageBackground
     source={ data.currently ? getBackground(data.currently.icon) : require('../assets/bg/clear-day.png')}
     style={styles.image}
     resizeMode='cover'
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.tempText}>
            {data.currently.apparentTemperature}
          </Text>
        </View>

        <View style={styles.innerContainer}>          
          <Text style={styles.summary}>
            { reverseGeocode.Location.Address.City }
          </Text>
          <Text style={styles.dot}> · </Text>
          <Text style={styles.summary}>{data.currently.summary}</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  innerContainer: {
    flexDirection: "row",
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
    paddingLeft: 20,
    alignItems: 'center',
  },
  tempText: {
    fontSize: 24,
    color: "#fff"
  },
  subText: {
    color: "#fff"
  },
  icons: {
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 32
  },
  dot: {
    fontSize: 32,
    color: 'white',
  },
  summary: {
    color: 'white',
    fontSize: 16
  }
})

export default WeatherImage;