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
  currencyButton: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    position: 'absolute',
    right: '-80%',
    top: '-30%',
  }
});