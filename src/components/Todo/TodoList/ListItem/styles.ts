import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',

    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    marginBottom: 8,

    flexDirection: 'row',
    alignItems: 'center',
    width: 327,
  },

  todoTitle: {
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    width: 235,
  },

  todoTitleDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },

  thrashButton: {
    borderRadius: 6,
    marginLeft: 4,
    padding: 6,
  },

  thrashButtonHover: {
    backgroundColor: '#333333',
  },
});
