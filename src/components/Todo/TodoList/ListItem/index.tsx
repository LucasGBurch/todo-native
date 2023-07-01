import { Text, TouchableOpacity, View } from 'react-native';
import { TodoModel } from '../../../../models';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useState } from 'react';
import { styles } from './styles';

import { Trash } from 'phosphor-react-native';

interface ListItemProps {
  item: TodoModel;
  onDeleteTodo: (title: string) => void;
  onUpdateTodo: (title: string, completed: boolean) => void;
}

export function ListItem({ item, onDeleteTodo, onUpdateTodo }: ListItemProps) {
  // USAR O BOOLEANO DAS TAREFAS COMO ESTADO INICIAL CONSERTOU O BUG DE RENDERIZAÇÃO QUE SÓ ACONTECIA AQUI NO NATIVE. ELE BASICAMENTE REINICIAVA AS CHECKBOXES QUE VINHAM APÓS A DELETADA, APESAR DOS checked SEGUIREM true
  const [isCompleted, setIsCompleted] = useState<boolean>(item.checked);
  const [trashButtonHover, setTrashButtonHover] = useState<boolean>(false);

  function handleCheckIsCompleted() {
    setIsCompleted((state) => !state);
    onUpdateTodo(item.title, isCompleted);
  }

  function handleDeleteTodo() {
    onDeleteTodo(item.title);
  }

  const todoStatus = isCompleted
    ? [styles.todoTitle, styles.todoTitleDone]
    : [styles.todoTitle];

  const trashStyle = trashButtonHover
    ? [styles.thrashButtonHover, styles.thrashButton]
    : styles.thrashButton;

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={20}
        id={item.title}
        isChecked={isCompleted}
        fillColor={`${isCompleted ? '#5E60CE' : '#4EA8DE'}`}
        unfillColor='transparent'
        onPress={handleCheckIsCompleted}
      />
      <Text style={todoStatus}>{item.title}</Text>
      <TouchableOpacity
        activeOpacity={0.85}
        style={trashStyle}
        onPressIn={() => setTrashButtonHover(true)}
        onPressOut={() => setTrashButtonHover(false)}
        onPress={handleDeleteTodo}
      >
        <Trash
          size={24}
          color={`${trashButtonHover ? '#E25858' : '#808080'}`}
        />
      </TouchableOpacity>
    </View>
  );
}
