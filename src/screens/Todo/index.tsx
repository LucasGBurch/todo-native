import { Image, View } from 'react-native';
import { styles } from './styles';
import logoImg from '../../../assets/LogoTodo.png';

import { NewTodo } from '../../components/Todo/NewTodo';
import { TodoList } from '../../components/Todo/TodoList';

export function Todo() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image resizeMode='cover' source={logoImg} />
      </View>
      <NewTodo />
      <TodoList />
    </View>
  );
}
