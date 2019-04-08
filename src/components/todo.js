import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  const todoItem = todo.length ? (
    todo.map(item => {
      return (
        <a
          href="#!"
          id="redborder"
          className="collection-item red-text text-darken-2"
          key={item.id}
          onClick={() => {
            deleteTodo(item.id);
          }}
        >
          {item.content}
        </a>
      );
    })
  ) : (
    <a href="#!" id="redborder" className="collection-item red-text">
      Todo list is empty
    </a>
  );
  return (
    <div className="">
      <div className="">
        <ul className="collection" id="redborder">
          {todoItem}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
