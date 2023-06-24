import { View } from 'react-native';
import { styles } from './styles';
import { NewTodo } from './NewTodo';
import { TodoList } from './TodoList';

export function Todo() {
  return (
    <View style={styles.container}>
      <NewTodo />
      <TodoList />
    </View>
  );
}
