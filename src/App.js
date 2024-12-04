import { useState } from 'react';

import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoSearch from './TodoSearch';
import TodoCounterr from './TodoCounterr';
import TodoButtonCreate from './TodoButtonCreate';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Lavar la ropa', completed: false },
  { text: 'Agregar nueva tarea', completed: true },
];

function App() {
  const [tasks, setTasks] = useState(todos);
  const [searchValue, setSearchValue] = useState('');

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTask = (text) => {
    const newTasks = tasks.map(task => {

      if (task.text === text) {
        task.completed = !task.completed
      };

      return task;
    })
    setTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = tasks.filter(task => task.text !== text);
    setTasks(newTasks);
  };

  return (
    <>

      <TodoCounterr
        total={totalTasks}
        completed={completedTasks}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTasks.map(task => (
          <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={()=> deleteTask(task.text)}
          />
        ))}
      </TodoList>

      <TodoButtonCreate />

    </>
  );
}

export default App;