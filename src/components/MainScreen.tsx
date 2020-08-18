import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../styles/style';

import { Converter } from './Converter';

export function MainScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.mainScreenContainer}>
        <Converter />
      </View>
    </TouchableWithoutFeedback>
  );
}