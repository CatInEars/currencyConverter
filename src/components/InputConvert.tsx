import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/style';
import InputSelect from '@tele2/react-native-select-input';
import { options } from '../others/selectOptions';

interface IInputProps {
  value: string,
  onChange: (e: string) => void,
}

export function InputConvert({ value, onChange }: IInputProps) {
  return (
    <View style={styles.converterContainer}>
      <TextInput 
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder='Писать сюда'
        placeholderTextColor='gray'
        keyboardType='number-pad'
      />
      <View style={styles.currencyButton}>
        <InputSelect
          value={1}
          options={options}
          innerContainerStyle={{
            borderBottomWidth: 0
          }}
        />
      </View>
    </View>
  );
}