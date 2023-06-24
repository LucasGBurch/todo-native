import { StatusBar } from 'react-native';
import { Todo } from './src/components/Todo';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Todo />
    </>
  );
}
