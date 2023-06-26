import { TextInput, View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import plusCircle from '../../../../assets/PlusCircle.png';
import { useState } from 'react';

export function NewTodo() {
  const [focus, setFocus] = useState<boolean>(false);
  const [buttonHover, setButtonHover] = useState<boolean>(false);

  const inputStyle = focus ? [styles.input, styles.focusedInput] : styles.input;

  const buttonStyle = buttonHover ? [styles.button, styles.buttonHover] : styles.button;

  return (
    <View style={styles.form}>
      <TextInput
        style={inputStyle}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        keyboardType='default'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />

      <TouchableOpacity
        activeOpacity={0.85}
        style={buttonStyle}
        onPressIn={() => setButtonHover(true)}
        onPressOut={() => setButtonHover(false)}
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
