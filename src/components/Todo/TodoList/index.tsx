import { FlatList, Image, Text, View } from 'react-native';
import { ListItem } from './ListItem';
import { TodoModel } from '../../../models';

import imgEmptyList from '../../../../assets/EmptyClipboard.png';
import { styles } from './styles';

interface TodoListProps {
  item: TodoModel[];
  deleteTodo: (title: string) => void;
}

export function TodoList({ item, deleteTodo }: TodoListProps) {

  return (
    <View style={styles.container}>
      <View style={styles.todoStats}>
        <View style={styles.todoMadeContainer}>
          <Text style={styles.todoMadeText}>Criadas</Text>
          <View style={styles.todoMadeNumberContainer}>
            <Text style={styles.todoMadeNumber}>99</Text>
          </View>
        </View>
        <View style={styles.todoDoneContainer}>
          <Text style={styles.todoDoneText}>Concluídas</Text>
          <View style={styles.todoDoneNumberContainer}>
            <Text style={styles.todoDoneNumber}>99</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={item}
        renderItem={({ item }) => (
          <ListItem
            key={item.title}
            item={item}
            onDeleteTodo={deleteTodo}
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
