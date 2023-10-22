import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState('');

  const handleAddTodoBtn = (e) => {
    e.preventDefault();

    if(!inputTodo) return
    
    dispatch(addTodo(inputTodo));
    setInputTodo('');
  };
  return (
    <form className="flex" onSubmit={handleAddTodoBtn}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
