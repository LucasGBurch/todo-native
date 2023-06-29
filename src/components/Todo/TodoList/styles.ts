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
    borderBottomColor: '#808080',
    borderBottomWidth: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 327,
  },

  todoMadeContainer: {
    flexDirection: 'row',
  },

  todoMadeText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 8
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

  todoDoneText: {
    color: '#8284FA',
    fontWeight: 'bold',
  },

  emptyList: {
    alignItems: 'center'
  },

  emptyListImg: {
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

// borderBottomColor: #262626
