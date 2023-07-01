import { Alert, Image, View } from 'react-native';
import { styles } from './styles';
import logoImg from '../../../assets/LogoTodo.png';

import { NewTodo } from '../../components/Todo/NewTodo';
import { TodoList } from '../../components/Todo/TodoList';
import { useState } from 'react';
import { TodoModel } from '../../models';

export function Todo() {
  const [todo, setTodos] = useState<TodoModel[]>([]);

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

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];

      updatedTodos.unshift({
        title,
        checked: false,
      });

      return updatedTodos;
    });
  }

  function deleteTodoHandler(title: string) {
    Alert.alert('Deletar', `Deletar a tarefa número ${title}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTodos((prevTodos) =>
            prevTodos.filter((todos) => todos.title !== title)
          ),
        style: 'destructive',
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  // function updateTodoHandler() {} // para quando este dado fosse necessário, tipo em API

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image resizeMode='cover' source={logoImg} />
      </View>
      <View style={styles.mainView}>
        <NewTodo createTodo={createTodoHandler} />
        <TodoList item={todo} deleteTodo={deleteTodoHandler} />
      </View>
    </View>
  );
}
