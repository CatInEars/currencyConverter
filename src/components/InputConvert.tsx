import React from 'react';
import { View, TextInput, YellowBox } from 'react-native';
import { styles } from '../styles/style';
import InputSelect from '@tele2/react-native-select-input';
import { options } from '../others/selectOptions';

interface IInputProps {
  textValue: string,
  optionValue: number,
  onChangeText: (e: string) => void,
  onChangeCurrency: (value: number) => void,
  setOptionValue: (value: number) => void 
}

export function InputConvert({ textValue, optionValue, onChangeText, onChangeCurrency, setOptionValue }: IInputProps) {
  // Если не указывать value через state, то смена валюты происходит с багом
  // скорее всего внутренний косяк '@tele2/react-native-select-input'

  // Так же игнорирую ворнинг от '@tele2/react-native-select-input'
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

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
          options={options}
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