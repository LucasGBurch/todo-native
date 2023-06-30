import { Alert, Image, View } from 'react-native';
import { styles } from './styles';
import logoImg from '../../../assets/LogoTodo.png';

import { NewTodo } from '../../components/Todo/NewTodo';
import { TodoList } from '../../components/Todo/TodoList';
import { useState } from 'react';
import { TodoModel } from '../../models';

export function Todo() {
  const [todo, setTodos] = useState<TodoModel[]>([
    {
      id: 1,
      title: 'Tarefa para testar o estado e como o texto se acomoda aqui',
      checked: false,
    },
  ]);

  function todoIsNotValid(title: string) {
    const exists = todo.find((todo) => todo.title === title);
    const haveLength = title.length > 2;
    return exists || !haveLength;
  }

  function createTodoHandler(title: string) {
    if (todoIsNotValid(title)) {
      return Alert.alert(
        'Tarefa inválida!',
        'Verifique se a tarefa já existe ou tem pelo menos 3 caracteres'
      );
    }

    // Se tiver id, soma 1; senão, vai ser o 1
    const id = todo ? todo.slice(-1)[0].id++ : 1;

    setTodos((prevTodos) => [
      {
        id,
        title,
        checked: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodoHandler() {}

  function updateTodoHandler() {} // para quando este dado fosse necessário

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
