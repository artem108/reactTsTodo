import React from 'react';

interface Props {
    addTodo: AddTodo;
    text: string;
    addText: AddText;
  }

export const AddTodoForm: React.FC<Props> = ({addTodo, text, addText}) => {
  return (
    <form>
    <input
      type="text"
      value={text}
      onChange={e => {
        addText(e.target.value);
      }}
    />
    <button
      type="submit"
      onClick={e => {
        e.preventDefault();
        addTodo(text);
        addText('');
      }}
    >
      Add Todo
    </button>
  </form>
  );
};