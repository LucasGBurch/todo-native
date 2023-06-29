import { Text, TouchableOpacity, View } from 'react-native';
import { TodoModel } from '../../../../models';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useState } from 'react';
import { styles } from './styles';

import { Trash } from 'phosphor-react-native';

interface ListItemProps {
  item: TodoModel;
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, completed: boolean) => void;
}

export function ListItem({ item, onDeleteTodo, onUpdateTodo }: ListItemProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [checkboxHover, setCheckboxHover] = useState<boolean>(false);
  const [trashButtonHover, setTrashButtonHover] = useState<boolean>(false);

  function handleCheckIsCompleted() {
    setIsCompleted((state) => !state);
    onUpdateTodo(item.id, isCompleted);
  }

  function handleDeleteTodo() {
    onDeleteTodo(item.id);
  }

  const todoStatus = isCompleted ? [] : [];

  const trashStyle = trashButtonHover
    ? [styles.thrashButtonHover, styles.thrashButton]
    : styles.thrashButton;

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={24}
        fillColor='#5E60CE'
        unfillColor='transparent'
        iconStyle={{borderColor: '#4EA8DE'}}
        onPressIn={() => setCheckboxHover(true)}
        onPressOut={() => setCheckboxHover(false)}
        onPress={handleCheckIsCompleted}
      />
      <Text style={styles.todoTitle}>{item.title}</Text>
      <TouchableOpacity
        activeOpacity={0.85}
        style={trashStyle}
        onPressIn={() => setTrashButtonHover(true)}
        onPressOut={() => setTrashButtonHover(false)}
        onPress={handleDeleteTodo}
      >
        <Trash size={24} />
      </TouchableOpacity>
    </View>
  );
}
