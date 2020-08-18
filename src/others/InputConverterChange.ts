import { ToastAndroid } from 'react-native';

export function handleChange(e: string, setInputValue: Function): void {
  if ( 
    e.match(/(,)|( )|(-)/i) || 
    e.indexOf('.') !== e.lastIndexOf('.')
  ) return;

  if ( e.length > 10 ) {
    ToastAndroid.show('Многа цифр', ToastAndroid.SHORT);
    return
  }

  if ( 
    e[0] === '0' && 
    (+e ^ 0) === +e && 
    e[1] !== '.' &&
    e.length > 1
  ) { 
    setInputValue(e.substr(1));
    return
  }

  setInputValue(e);
}