import React from "react";

const ListItem = ({ todos, onDeleteTodo }) => {
  return (
    <div className="todo-list">
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className="Listitem-container">
            <div className="row">
              <div className="col-xs-10">
                <p>{todo.task}</p>
              </div>
              <div className="col-xs-2">
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteTodo(todo.id)}
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <i>No data found</i>
      )}
    </div>
  );
};

export default ListItem;
