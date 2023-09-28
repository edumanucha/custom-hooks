import { useEffect, useReducer } from "react";
import { todoReducerApp } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducerApp, [], init);

  useEffect(() => {
    // console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };
    dispatch(action);
    // dispatch la funcion que envia la accion
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove todo",
      payload: id,
    };
    dispatch(action);
  };
  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle todo",
      payload: id,
    };
    dispatch(action);
  };

  const todosCount = () => {
    return todos.length;
  }

  const pendingTodosCount = () => {

    return todos.filter((todo) => !todo.done).length;
  }

  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};
