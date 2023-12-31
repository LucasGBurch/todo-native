import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 32,
    top: '-7%',
    width: 327,
  },

  input: {
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#F2F2F2',
    flex: 1,
    height: 54,
    fontSize: 16,
    marginRight: 12,
    padding: 16,
    width: 327,
  },

  focusedInput: {
    borderColor: '#5E60CE',
    borderStyle: 'solid',
    borderWidth: 1
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    height: 52,
    width: 52,
  },

  buttonHover: {
    backgroundColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: 52,
    width: 52,
  },

  buttonText: {
    color: '#F2F2F2',
    fontSize: 18,
    height: 18,
  },
});
