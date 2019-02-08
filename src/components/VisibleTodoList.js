import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching } from '../reducers';
import TodoList from './TodoList';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { isFetching, toggleTodo, todos } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    );
  }
}

VisibleTodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    todos: getVisibleTodos(state, filter),
    filter,
  };
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;










//---

// ownProps.filter poate fi: all, active, completed
//const mapStateToProps = (state, ownProps) => ({
//  todos: getVisibleTodos(
//    state.todos, 
//    ownProps.params.filter || 'all'
//  ),
//});

//const mapDispatchToProps = (dispatch) => ({
//  onTodoClick(id) {
//    dispatch(toggleTodo(id));
//  },
//});

//const getVisibleTodos = (todos, filter) => {
//  switch (filter) {
//    case 'all':
//      return todos;
//    case 'completed':
//      return todos.filter(t => t.completed);
//    case 'active':
//      return todos.filter(t => !t.completed);
//    default:
//      throw new Error(`Unknown filter: ${filter}.`);
//  }
//};

// se apeleaza functia TodoList cu paramatrii mapStateToProps, mapDispatchToProps
//const VisibleTodoList = withRouter(connect(
//  mapStateToProps,
//  {onTodoClick: toggleTodo}
//)(TodoList));

// ownProps.filter poate fi: all, active, completed
//const mapStateToProps = (state, { params }) => ({
//  todos: getVisibleTodos(
//    state, 
//    params.filter || 'all'
//  ),
//});