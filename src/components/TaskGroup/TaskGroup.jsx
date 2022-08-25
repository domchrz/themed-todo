import { Container, Headline } from './styled';
import useSelector from '../../hooks/useSelector';
import ListWithDrop from '../ListWithDrop/ListWithDrop';
import Task from '../Task/Task';

export default function TaskGroup({ title, isDone, dispatch }) {
  const todos = useSelector(state => state.todos.filter(todo => todo.isDone === isDone));

  const onDragOver = e => {
    if (e.dataTransfer) {
      e.preventDefault();
    }
  };

  const onDrop = e => {
    const droppedId = e.dataTransfer.getData('text/plain');
    if (todos.find(todo => todo.id === droppedId)) return;
    dispatch({ type: 'TOGGLE_TODO', payload: droppedId });
  };
  return (
    <Container draggable={false} onDragOver={onDragOver} onDrop={onDrop}>
      <Headline>{title}</Headline>
      <ListWithDrop items={todos} onDragOver={onDragOver} onDrop={onDrop}>
        {items =>
          !!items.length &&
          items.map(item => <Task key={item.id} task={item} dispatch={dispatch} />)
        }
      </ListWithDrop>
    </Container>
  );
}
