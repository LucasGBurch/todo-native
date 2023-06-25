import { TextInput, View, Text, Image, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import plusCircle from '../../../../assets/PlusCircle.png';

export function NewTodo() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        keyboardType='default'
      />

      <TouchableHighlight activeOpacity={0.85} style={styles.button} underlayColor={'#4EA8DE'}>
        <View style={styles.buttonCircle}>
          <Text style={styles.buttonText}>
            <Image source={plusCircle} />
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
