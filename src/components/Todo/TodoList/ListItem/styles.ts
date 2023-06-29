import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    padding: 12,
    paddingRight: 8,

    flexDirection: 'row',
    alignItems: 'center',
    width: 327,
  },

  todoTitle: {
    color: '#F2F2F2',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    width: 235,
  },

  thrashButton: {
    borderRadius: 6,
  },

  thrashButtonHover: {
    backgroundColor: '#333333',
    tintColor: '#E25858',
  },
});
