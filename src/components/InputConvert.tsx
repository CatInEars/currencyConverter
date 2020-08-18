import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import SelectInput from 'react-native-select-input-ios';

import { handleChange } from '../others/InputConverterChange';

import { styles } from '../styles/style';

export function InputConvert() {
  const [inputValue, setInputValue] = useState('100');

  const options = [{ value: 'RRR.', label: 'RUB' }]

  return (
    <View style={styles.converterContainer}>
      <TextInput 
        style={styles.input}
        onChangeText={e => handleChange(e, setInputValue)}
        value={inputValue}
        placeholder='Писать сюда'
        placeholderTextColor='gray'
        keyboardType='number-pad'
      />

      <View style={styles.currencyButton}>
        <SelectInput value={0} options={options} />
      </View>


    </View>
  );
}