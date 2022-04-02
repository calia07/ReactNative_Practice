import React from 'react';
import {View, Text} from 'react-native';
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps';

function Greeting(props) {
  return (
    <View>
      <Text>안녕하세요 {props.name}!</Text>
    </View>
  );
}

export default Greeting;
