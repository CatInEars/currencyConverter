import React, { useState } from 'react';
import { InputConvert } from './InputConvert';
import { valueFilter } from '../others/inputValueFilter';

export function Converter() {
  const [ firstInput, setFirstInput ] = useState('0');
  const [ secondInput, setSecondInput ] = useState('0');

  function inputChanger (e: string, inputName: string): void {
    let filtered = valueFilter(e);
    if ( filtered === null ) return;

    // Редачить конвертацию тут
    let result: string | number = inputName === 'first' ? +e * 70 : +e / 70;
    if ( (result ^ 0) === result ) {
      result = result.toString();
    } else {
      result = result.toFixed(2).toString();
    }
    
    if ( inputName === 'first') {
      setFirstInput(filtered);
      setSecondInput(result);
    } else {
      setSecondInput(filtered);
      setFirstInput(result);
    }
  }

  return (
    <>
      <InputConvert 
        value={firstInput}
        onChange={(e: string) => inputChanger(e, 'first')}
      />
      <InputConvert 
        value={secondInput}
        onChange={(e: string) => inputChanger(e, 'second')}
      />
    </>
  );
}