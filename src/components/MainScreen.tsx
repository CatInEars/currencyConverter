import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Text } from 'react-native';
import { styles } from '../styles/style';

import { Converter } from './Converter';

export function MainScreen() {

  const [ isLoading, setLoading ] = useState(true);
  const [ data, setData ] = useState<any>();

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then( resolve => resolve.json() )
      .then( json => {
        // Да, это костыль, бейте меня
        json.Valute.RUB = {Value: 1, CharCode: 'RUB', Name: 'Рубль'}
        setData(json.Valute);
      })
      .catch( error => console.log(error) )
      .finally( () => setLoading(false) );
  }, []);
  
  return (
    <>
      {
        isLoading === true ?
          <View style={styles.center}>
            <ActivityIndicator size='large' />
            <Text>Loading</Text>
          </View>
        :
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.mainScreenContainer}>
              <Converter currents={data} />
            </View>
          </TouchableWithoutFeedback>
      }
    </>
  );
}