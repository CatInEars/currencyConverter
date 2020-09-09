import React from 'react';
import { View, TextInput, YellowBox } from 'react-native';
import { styles } from '../styles/style';
import InputSelect from '@tele2/react-native-select-input';
import { shortOptions } from '../others/selectOptions';

interface IInputProps {
  textValue: string,
  optionValue: number,
  onChangeText: (e: string) => void,
  onChangeCurrency: (value: number) => void,
  setOptionValue: (value: number) => void 
}

export function InputConvert({ textValue, optionValue, onChangeText, onChangeCurrency, setOptionValue }: IInputProps) {
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

  // Тут только StackOverflow..
  console.log();

  return (
    <View style={styles.converterContainer}>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={textValue}
        placeholder='Писать сюда'
        placeholderTextColor='gray'
        keyboardType='number-pad'
      />
      <View style={styles.currencyButton}>
        <InputSelect
          value={optionValue}
          options={shortOptions}
          innerContainerStyle={{
            borderBottomWidth: 0
          }}
          onChange={(value: number) => {
              onChangeCurrency(value);
              setOptionValue(value);
            }
          }
        />
      </View>
    </View>
  );
}