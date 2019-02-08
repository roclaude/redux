import React from 'react';

import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = ({ params }) => (
  <div className="app">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;



//---

//<VisibleTodoList 
//  filter={params.filter || 'all'}
///>