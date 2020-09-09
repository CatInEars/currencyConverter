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

  const [firstInputCurrency, setFirstInputCurrency] = useState('RUB');
  const [secondInputCurrency, setSecondInputCurrency] = useState('USD');

  const [firstInputOption, setFirstInputOptionValue] = useState(1);
  const [secondInputOption, setSecondInputOptionValue] = useState(2);

  const [firstInputActivity, setFirstInputActivity] = useState<boolean>();

  useEffect(() => {
    shortOptions.forEach( (option: ISelectOption) => {
      if (option.value === firstInputOption) {
        setFirstInputCurrency(option.label);
      }
      if (option.value === secondInputOption) {
        setSecondInputCurrency(option.label);
      }
    });
  }, [firstInputOption, secondInputOption]);

  useEffect(() => {
    if (firstInputActivity) {

      let res: string | number = (
        currents[firstInputCurrency].Value / 
        currents[secondInputCurrency].Value
      ) * +firstInputTextValue;

      res = (res^0) === res ? Math.ceil(res) : res.toFixed(2);
      
      setSecondInput(res.toString());
    } else if (firstInputActivity !== undefined) {

      let res: string | number = (
        currents[secondInputCurrency].Value / 
        currents[firstInputCurrency].Value
      ) * +secondInputTextValue;

      res = (res^0) === res ? Math.ceil(res) : res.toFixed(2);

      setFirstInput(res.toString());
    }
  }, [firstInputTextValue, secondInputTextValue, firstInputCurrency, secondInputCurrency]);

  const onInputChange = (e: string, inputName: string) => {
    if (inputName === 'FIRST') {
      setFirstInput(e);
      setFirstInputActivity(true);
    } else { 
      setSecondInput(e);
      setFirstInputActivity(false);
    }
  }

  return (
    <>
      <InputConvert 
        textValue={valueFilter(firstInputTextValue)}
        optionValue={firstInputOption}
        setOptionValue={setFirstInputOptionValue}
        onChangeText={(e: string) => onInputChange(e, 'FIRST')}
        onChangeCurrency={(value: number) => setFirstInputOptionValue(value)}
      />
      <InputConvert 
        textValue={valueFilter(secondInputTextValue)}
        optionValue={secondInputOption}
        setOptionValue={setSecondInputOptionValue}
        onChangeText={(e: string) => onInputChange(e, 'SECOND')}
        onChangeCurrency={(value: number) => setSecondInputOptionValue(value)}
      />
    </>
  );
}