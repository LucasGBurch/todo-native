import { Image, View } from 'react-native';
import { styles } from './styles';
import logoImg from '../../../assets/LogoTodo.png';

import { NewTodo } from '../../components/Todo/NewTodo';
import { TodoList } from '../../components/Todo/TodoList';
import { useState } from 'react';
import { TodoModel } from '../../models';

export function Todo() {
  const [todo, setTodos] = useState<TodoModel[]>([
    {
      id: '1',
      title: 'Tarefa para testar o estado e como o texto se acomoda aqui',
      checked: false,
    },
  ]);

  function createTodoHandler() {}

  function deleteTodoHandler() {}

  function updateTodoHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image resizeMode='cover' source={logoImg} />
      </View>
      <View style={styles.mainView}>
        <NewTodo createTodo={createTodoHandler} />
        <TodoList
          item={todo}
          deleteTodo={deleteTodoHandler}
          updateTodo={updateTodoHandler}
        />
      </View>
    </View>
  );
}
