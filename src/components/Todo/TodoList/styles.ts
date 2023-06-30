import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 208,
    width: '100%',
  },

  todoStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    width: 327,
  },

  todoMadeContainer: {
    flexDirection: 'row',
    width: 86,
  },

  todoMadeText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 8,
  },

  todoMadeNumberContainer: {
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 1000,
    height: 19,
    width: 25,
  },

  todoMadeNumber: {
    color: '#D9D9D9',
    fontWeight: 'bold',
  },

  todoDoneContainer: {
    flexDirection: 'row',
    width: 110,
  },

  todoDoneText: {
    color: '#8284FA',
    fontWeight: 'bold',
    marginRight: 8,
  },

  todoDoneNumberContainer: {
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 1000,
    height: 19,
    width: 25,
  },

  todoDoneNumber: {
    color: '#D9D9D9',
    fontWeight: 'bold',
  },

  emptyList: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
    alignItems: 'center',
    width: 327,
  },

  emptyListImg: {
    marginTop: 48,
    marginBottom: 16,
  },

  text: {
    color: '#808080',
    fontSize: 14,
  },

  bolderText: {
    fontWeight: 'bold',
  },
});
