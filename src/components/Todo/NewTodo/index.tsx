import { TextInput, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import plusCircle from '../../../../assets/PlusCircle.png';
import { useState } from 'react';

interface NewTodoProps {
  createTodo: (text: string) => void;
}

export function NewTodo({ createTodo }: NewTodoProps) {
  const [focus, setFocus] = useState<boolean>(false);
  const [buttonHover, setButtonHover] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>('');

  const inputStyle = focus ? [styles.input, styles.focusedInput] : styles.input;

  const buttonStyle = buttonHover
    ? [styles.button, styles.buttonHover]
    : styles.button;

    function handleCreateTodo() {
      createTodo(todoTitle);
      setTodoTitle('');
    }

  return (
    <View style={styles.form}>
      <TextInput
        style={inputStyle}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        keyboardType='default'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={setTodoTitle}
        value={todoTitle}
      />

      <TouchableOpacity
        activeOpacity={0.85}
        style={buttonStyle}
        onPressIn={() => setButtonHover(true)}
        onPressOut={() => setButtonHover(false)}
        onPress={handleCreateTodo}
      >
        <View>
          <Text style={styles.buttonText}>
            <Image source={plusCircle} />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
