import React, { useState, useEffect } from 'react';
import { InputConvert } from './InputConvert';
import { valueFilter } from '../others/inputValueFilter';
import { shortOptions } from '../others/selectOptions';

import { ICurrentsData, ISelectOption } from '../interfaces/index';

type IProps = {
  [current: string]: ICurrentsData
}

export function Converter({ currents }: IProps) {
  const [firstInputTextValue, setFirstInput] = useState('0');
  const [secondInputTextValue, setSecondInput] = useState('0');

  const [firstInputCurrency, setFirstInputCurrency] = useState('');
  const [secondInputCurrency, setSecondInputCurrency] = useState('');

  const [firstInputOption, setFirstInputOptionValue] = useState(1);
  const [secondInputOption, setSecondInputOptionValue] = useState(2);

  useEffect(() => {
    shortOptions.forEach( (option: ISelectOption) => {
      if (option.value === firstInputOption) { 
        setFirstInputCurrency(option.label);
      }
      if (option.value === secondInputOption) {
        setSecondInputCurrency(option.label);
      }
    });
  }, [firstInputCurrency, secondInputCurrency]);

  return (
    <>
      <InputConvert 
        textValue={valueFilter(firstInputTextValue)}
        optionValue={firstInputOption}
        setOptionValue={setFirstInputOptionValue}
        onChangeText={(e: string) => setFirstInput(e)}
        onChangeCurrency={(value: number) => setFirstInputOptionValue(value)}
      />
      <InputConvert 
        textValue={valueFilter(secondInputTextValue)}
        optionValue={secondInputOption}
        setOptionValue={setSecondInputOptionValue}
        onChangeText={(e: string) => setSecondInput(e)}
        onChangeCurrency={(value: number) => setSecondInputOptionValue(value)}
      />
    </>
  );
}