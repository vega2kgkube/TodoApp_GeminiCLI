
import React from 'react';
import TodoItem from './TodoItem';
import { TodoListContainer } from './StyledComponents';

function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </TodoListContainer>
  );
}

export default TodoList;
