import { Text, View } from 'react-native';
import { TodoModel } from '../../../../models';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useState } from 'react';
import { styles } from './styles';

interface ListItemProps {
  item: TodoModel;
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, completed: boolean) => void;
}

export function ListItem({ item, onDeleteTodo, onUpdateTodo }: ListItemProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [checkboxHover, setCheckboxHover] = useState<boolean>(false);

  function handleCheckIsCompleted() {
    setIsCompleted((state) => !state);
    onUpdateTodo(item.id, isCompleted);
  }

  function handleDeleteTodo() {
    onDeleteTodo(item.id);
  }

  const todoStatus = isCompleted ? [] : []

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={24}
        fillColor='#5E60CE'
        unfillColor='transparent'
        onPressIn={() => setCheckboxHover(true)}
        onPressOut={() => setCheckboxHover(false)}
        onPress={handleCheckIsCompleted}
      />
      <Text>Tarefa</Text>
    </View>
  );
}
