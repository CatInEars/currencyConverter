import { ToastAndroid } from 'react-native';

export function valueFilter(e: string): (null | string) {
  if ( 
    e.match(/(,)|( )|(-)/i) || 
    e.indexOf('.') !== e.lastIndexOf('.')
  ) return null;

  if ( e.length > 10 ) {
    ToastAndroid.show('Многа цифр', ToastAndroid.SHORT);
    return null
  }

  if ( 
    e[0] === '0' && 
    (+e ^ 0) === +e && 
    e[1] !== '.' &&
    e.length > 1
  ) {
    return e.substr(1);
  }

  return e;
}