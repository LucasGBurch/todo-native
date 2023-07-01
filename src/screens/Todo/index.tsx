import { Alert, Image, View } from 'react-native';
import { styles } from './styles';
import logoImg from '../../../assets/LogoTodo.png';

import { NewTodo } from '../../components/Todo/NewTodo';
import { TodoList } from '../../components/Todo/TodoList';
import { useState } from 'react';
import { TodoModel } from '../../models';

export function Todo() {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [completedTodos, setCompletedTodos] = useState<number>(0);

  

  function todoIsNotValid(title: string) {
    const exists = todos.find((todo) => todo.title === title);
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

  function todoDeleter(title: string) {
    const todoToBeDeleted = todos.filter((todo) => {
      return todo.title === title;
    });

    const todosWithoutDeletedOne = todos.filter((todo) => {
      return todo.title !== title;
    });

    if (todoToBeDeleted[0].checked) {
      setCompletedTodos((prevState) => {
        return prevState - 1;
      });
    }

    setTodos(todosWithoutDeletedOne);
  }

  function deleteTodoHandler(title: string) {
    Alert.alert('Deletar', `Deletar a tarefa número ${title}?`, [
      {
        text: 'Sim',
        onPress: () => todoDeleter(title),
        style: 'destructive',
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  function updateTodoHandler(title: string, completed: boolean) {
    const updatedTodo = todos.filter((todo) => {
      return todo.title === title;
    });

    updatedTodo[0].checked = !completed;

    if (updatedTodo[0].checked) {
      setCompletedTodos((prevState) => {
        return prevState + 1;
      });
    } else {
      setCompletedTodos((prevState) => {
        return prevState - 1;
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image resizeMode='cover' source={logoImg} />
      </View>
      <View style={styles.mainView}>
        <NewTodo createTodo={createTodoHandler} />
        <TodoList
          item={todos}
          deleteTodo={deleteTodoHandler}
          todosCompleted={completedTodos}
          updateTodo={updateTodoHandler}
        />
      </View>
    </View>
  );
}
