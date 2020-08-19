import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/style';

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
    </View>
  );
}