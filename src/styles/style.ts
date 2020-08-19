import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  converterContainer: {
    width: '60%',
    margin: 60,
    overflow: 'hidden'
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    paddingLeft: 5 
  },
  currencyButton: {
    position: 'absolute',
    width: 50,
    height: 40,
    right: -15,
    top: -1
  }
});