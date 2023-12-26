import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton.js';

const defaultTodos = [
  {text: 'First Todo', completed: true},
  {text: 'Second Todo', completed: false},
  {text: 'Third Todo', completed: true},
  {text: 'Fourth Todo', completed: false},
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}></TodoCounter>
      <TodoSearch></TodoSearch>

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          >  
          </TodoItem>
        ))}

      </TodoList>
      
      <CreateTodoButton></CreateTodoButton>

    </React.Fragment>
  );
}


export default App;
