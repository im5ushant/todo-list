import React, { useState } from "react";

import { connect } from "react-redux";

import useToggleAuth from "../hooks/useToggleAuth";
import { addTodo, deleteTodo } from "../redux/actions/index";

import AddItem from "./AddItem";
import ListItem from "./ListItem";

function Todo(props) {
  const [isAuthorized, setAuthToPath] = useToggleAuth();
  const [state, setState] = useState(null);

  const onChange = ({ target }) => {
    setState({ [target.name]: target.value });
  };

  const onClickAdd = () => {
    let id = Math.floor(Math.random() * 1000);
    props.addTodo({ id, ...state });
  };

  const onDeleteTodo = (id) => {
    props.deleteTodo(id);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <ListItem todos={props.todos} onDeleteTodo={(id) => onDeleteTodo(id)} />
      <AddItem onChange={(e) => onChange(e)} onClickAdd={() => onClickAdd()} />

      <button
        className="btn btn-primary Auth-btn"
        onClick={() => setAuthToPath("/")}
      >
        Sign Out
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, deleteTodo })(Todo);
