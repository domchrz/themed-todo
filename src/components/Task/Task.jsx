import IconButton from '../IconButton/IconButton';
import { Container } from './styled';

export default function Task({ task, dispatch }) {
  const handleDrag = e => {
   e.dataTransfer.setData('text', task.id);
   e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Container onDragStart={handleDrag} draggable={true} isDone={task.isDone}>
      <h3>{task.name}</h3>
      <IconButton onClick={() => dispatch({ type: 'REMOVE_TODO', payload: task.id })} type="accent">
        close
      </IconButton>
    </Container>
  );
}
