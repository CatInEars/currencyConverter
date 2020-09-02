import React, { useState } from 'react';
import { InputConvert } from './InputConvert';
import { valueFilter } from '../others/inputValueFilter';
import { options } from '../others/selectOptions';

import { ICurrentsData, ISelectOption } from '../interfaces/index';

type IProps = {
  [current: string]: ICurrentsData
}

export function Converter({ currents }: IProps) {
  const [ firstInputTextValue, setFirstInput ] = useState('0');
  const [ secondInputTextValue, setSecondInput ] = useState('0');

  const [ firstInputCurrencyValue, setFirstInputCurrencyValue ] = useState('RUB');
  const [ secondInputCurrencyValue, setSecondInputCurrencyValue ] = useState('USD');

  const [ firstInputOption, setFirstInputOptionValue ] = useState(1);
  const [ secondInputOption, setSecondInputOptionValue ] = useState(2);

  const FIRST_INPUT = 'first';
  const SECOND_INPUT = 'second';

  function inputsChanger (e: string, inputName: string): void {
    let filtered = valueFilter(e);
    if ( filtered === null ) return;

    let result: string | number = '';

    if ( inputName = FIRST_INPUT ) {
      result = +e * currents[firstInputCurrencyValue].Value

      result = (result ^ 0) === result ? 
        result.toString() : 
        result.toFixed(2).toString();

      setFirstInput(filtered);
      setSecondInput(result);
    } else {
      result = +e / currents[secondInputCurrencyValue].Value;

      result = (result ^ 0) === result ? 
        result.toString() : 
        result.toFixed(2).toString();

      setSecondInput(filtered);
      setFirstInput(result);
    }
  }

  function currencyChanger(value: number, inputName: string): void {
    if ( value === 10 ) return;

    let currencyValue = '';
    options.forEach( (option: ISelectOption) => {
      if ( option.value === value ) currencyValue = option.label
    });

    if ( inputName === FIRST_INPUT ) {
      setFirstInputCurrencyValue(currencyValue);
    } else {
      setSecondInputCurrencyValue(currencyValue);
    }

    console.log(currencyValue);
  }

  return (
    <>
      <InputConvert 
        textValue={firstInputTextValue}
        optionValue={firstInputOption}
        setOptionValue={setFirstInputOptionValue}
        onChangeText={(e: string) => inputsChanger(e, FIRST_INPUT)}
        onChangeCurrency={(value: number) => currencyChanger(value, FIRST_INPUT)}
      />
      <InputConvert 
        textValue={secondInputTextValue}
        optionValue={secondInputOption}
        setOptionValue={setSecondInputOptionValue}
        onChangeText={(e: string) => inputsChanger(e, SECOND_INPUT)}
        onChangeCurrency={(value: number) => currencyChanger(value, SECOND_INPUT)}
      />
    </>
  );
}