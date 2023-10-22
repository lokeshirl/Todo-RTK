import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleTodo } from '../features/todo/todoSlice';

const TodoItems = ({ todoItem }) => {
  const dispatch = useDispatch();
  const [updatedTodoVal, setUpdatedTodoVal] = useState(todoItem.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const handleEditBtn = () => {
    setIsTodoEditable((prevIsTodoEditable) => !prevIsTodoEditable);
    dispatch(updateTodo({ todo: updatedTodoVal, id: todoItem.id }));
  };

  const handleDeleteBtn = () => {
    dispatch(removeTodo(todoItem.id));
  };

  const handleToggleCheckbox = (e) => {
    dispatch(toggleTodo({ id: todoItem.id, completed: e.target.checked }));
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todoItem.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        onClick={handleToggleCheckbox}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
        } ${todoItem.completed ? 'line-through' : ''}`}
        value={updatedTodoVal}
        onChange={(e) => setUpdatedTodoVal(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={handleEditBtn}
        disabled={todoItem.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={handleDeleteBtn}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItems;
