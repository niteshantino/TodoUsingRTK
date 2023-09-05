import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodo } from "../features/todo/TodoSlice";

const UpdateTodo = () => {
  const { id } = useParams();
  console.log("id", id);
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const existingTodo = todos?.filter((t) => {
    return t.id === id;
  });
    const text = existingTodo?.[0];
//   console.log(existingTodo, "sdfghjk");
  const [input, setInput] = useState(text.text);
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      editTodo({
        id: id,
        text: input,
      })
    );
    navigate(`/`);
  };
  return (
    <div className="space-x-3 mt-12">
      <div>
        <h2 className="flex justify-center font-bold">Update Todo</h2>
      </div>
      <div className="flex items-center space-x-3">
        <div>
          <input
            type="text"
            className="bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div>
          <button
            className="text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;
