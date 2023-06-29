import { FlatList, Image, Text, View } from 'react-native';
import { ListItem } from './ListItem';
import { TodoModel } from '../../../models';
import { useState } from 'react';

import imgEmptyList from '../../../../assets/EmptyClipboard.png';
import { styles } from './styles';

interface TodoListProps {
  item: TodoModel[];
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, concluded: boolean) => void;
}

export function TodoList({
  item,
  deleteTodo,
  updateTodo,
}: TodoListProps) {
  const [todo, setTodos] = useState<TodoModel[]>([
    { id: '1', title: 'Tarefa para testar o estado e como o texto se acomoda aqui', checked: false },
  ]);

  // REVISAR ESTILOS TODO DONE ABAIXO E NOS STYLES.TS

  return (
    <View style={styles.container}>
      <View style={styles.todoStats}>
        <View style={styles.todoMadeContainer}>
          <Text style={styles.todoMadeText}>Criadas</Text>
          <View style={styles.todoMadeNumberContainer}>
            <Text style={styles.todoMadeNumber}>99</Text>
          </View>
        </View>
        <View>
          <Text style={styles.todoDoneText}>Concluídas</Text>
        </View>
      </View>
      <FlatList
        data={todo}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            item={item}
            onDeleteTodo={deleteTodo}
            onUpdateTodo={updateTodo}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Image source={imgEmptyList} style={styles.emptyListImg} />
            <Text style={[styles.bolderText, styles.text]}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.text}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
