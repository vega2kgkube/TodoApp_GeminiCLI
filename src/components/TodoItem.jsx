
import React, { useState } from 'react';
import {
  TodoItemContainer,
  TodoText,
  Button,
} from './StyledComponents';

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, text);
    setIsEditing(false);
  };

  return (
    <TodoItemContainer>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <TodoText completed={todo.completed} onClick={() => onToggle(todo.id)}>
          {todo.text}
        </TodoText>
      )}
      <div>
        {isEditing ? (
          <Button onClick={handleUpdate}>Save</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        )}
        <Button onClick={() => onDelete(todo.id)}>Delete</Button>
      </div>
    </TodoItemContainer>
  );
}

export default TodoItem;
