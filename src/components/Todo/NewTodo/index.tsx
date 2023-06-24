import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';

export function NewTodo() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        keyboardType='default'
      />

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonCircle}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
