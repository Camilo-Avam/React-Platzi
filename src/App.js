import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import TodoCounterr from './TodoCounterr';
import TodoButtonCreate from './TodoButtonCreate';

const tasks = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Lavar la ropa', completed: false },
];

function App() {
  return (
    <>

      <TodoCounterr 
        total={10}
        completed={3}
        />

      <TodoSearch />

      <TodoList>
        {tasks.map(task => (
          <TodoItem key={task.text} text={task.text} completed={task.completed}/>
        ))}
      </TodoList>

      <TodoButtonCreate />

    </>
  );
}

export default App;