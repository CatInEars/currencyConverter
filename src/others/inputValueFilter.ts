import { ToastAndroid } from 'react-native';

export function valueFilter(e: string): string {
  if ( 
    e.match(/(,)|( )|(-)/i) || 
    e.indexOf('.') !== e.lastIndexOf('.')
  ) return e.substr(0, e.length - 1);

  if ( e.length > 10 ) {
    ToastAndroid.show('Многа цифр', ToastAndroid.SHORT);
    return e.substr(0, e.length - 1);
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