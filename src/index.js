
// find the code on github
// https://github.com/gaearon/todos/tree/01-simplifying-the-arrow-functions

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import configureStore from './configureStore';

import Root from './components/Root'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
);










//---

//import { Provider } from 'react-redux';
//import App from './components/App';
//import { createStore } from 'redux';
//import todoApp from './reducers';
//import { loadState, saveState } from './localStorage'
//import throttle from 'lodash/throttle'

//const persistedState = {
//  todos: [{
//    id: '0',
//    text: 'Welcome back!',
//    completed: false,
//  }],
//};

//const persistedState = loadState();

// create redux store that holds the complete state tree of the app
// createStore(reducer, [preloadedState], [enhancer])

//const store = createStore(todoApp, persistedState);
// subscribe() -> este un listener se declaseaza de fieacare data cand apare vreo modificare in store
// throttle () -> functia gatuita este invocata cel mult o data la un numar de milisecunde
//store.subscribe(throttle(() => {
//  saveState({
//    todos: store.getState().todos
//  });
//}, 1000));

/*
import { fetchTodos } from './api';

//var aaa = fetchTodos('all');
//console.log( aaa );

fetchTodos('all').then( todos => {
    console.log( todos )
  }
)
*/