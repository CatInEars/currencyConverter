import { StyleSheet } from 'react-native';

export const styles: any = StyleSheet.create({
  converterContainer: {
    width: '60%',
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderStyle: 'solid',
    overflow: 'hidden'
  },
  mainScreenContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  customSubmitButton: {
    width: 40,
    height: 40,
    backgroundColor: 'skyblue'
  },
  currencyButton: {}
});