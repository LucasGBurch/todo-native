import { FlatList, Image, Text, View } from 'react-native';
import { ListItem } from './ListItem';
import { TodoModel } from '../../../models';

import imgEmptyList from '../../../../assets/EmptyClipboard.png';
import { styles } from './styles';

interface TodoListProps {
  todo: TodoModel[];
}

export function TodoList({ todo }: TodoListProps) {
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
        renderItem={(item) => <ListItem />}
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
