import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 70%;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  margin-left: 10px;
`;

export const TodoListContainer = styled.ul`
  padding: 0;
`;

export const TodoItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const TodoText = styled.span`
  cursor: pointer;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;
