import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <>
      <div>
        {todos?.map((elem) => (
          <div key={elem.id} className="flex justify-between bg-blue-200 mt-2">
            <div>{elem.text}</div>
            <div>
              <button
                onClick={() => dispatch(removeTodo(elem.id))}
                className="text-white bg-red-500 border-0 p-2 mx-1 focus:outline-none hover:bg-indigo-600 rounded"
              >
                <AiFillDelete />
              </button>
              <button
                onClick={() => handleEdit(elem.id)}
                className="text-white bg-blue-500 border-0 p-2  mfocus:outline-none hover:bg-indigo-600 rounded"
              >
                <FiEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
