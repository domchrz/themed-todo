import Navbar from './components/Navbar';
import TaskGroup from './components/TaskGroup';
import useDispatch from './hooks/useDispatch';
import { GroupContainer } from './styled';

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar dispatch={dispatch}/>
      <GroupContainer>
        <TaskGroup dispatch={dispatch} title="Pending" isDone={false}/>
        <TaskGroup dispatch={dispatch} title="Done" isDone={true}/>
      </GroupContainer>
    </>
  );
}

export default App;
