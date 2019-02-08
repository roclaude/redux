
// subscribe() -> este un listener se declaseaza de fieacare data cand apare vreo modificare in store
// throttle () -> functia gatuita este invocata cel mult o data la un numar de milisecunde

import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'

import promise from 'redux-promise'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const configureStore = () => {
    const middlewares = [thunk]

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger())
    }

    return createStore(
        todoApp,
        applyMiddleware(...middlewares)
    )
}

export default configureStore;












//---

//const store = createStore(
//    todoApp,
//    persistedStore
//)

// se declanseaza de fiecare data cand se schimba ceva in store
// dupa ce se face un store.dispatch se aplelelaza store.subscribe
//store.subscribe(
//    throttle(() => {
//        // salveaza in store
//        saveState({
//            todos: store.getState().todos
//        })
//    }, 1000)
//)

//import { loadState, saveState } from './localStorage'

// ce este deja salvat
//const persistedStore = loadState()  

/*
const configureStore = () => {
    const store = createStore(todoApp)
    const middlewares = [promise]

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger)
    }

    wrapDispatchWithMiddlewares(store, middlewares);

    return store;
};
*/

/*
const wrapDispatchWithMiddlewares = (store, middlewares) =>
    middlewares.slice().reverse().forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch)
    })
*/

/*
const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(next);
    }
    return next(action)
}
*/

/*
const logger = (store) => (next) => {
    if (!console.group) {
        return next
    }

    return (action) => {
        console.group(action.type)
        console.log('%c prev state', 'color: gray', store.getState())
        console.log('%c action', 'color: blue', action)
        const returnValue = next(action)
        console.log('%c next state', 'color: green', store.getState())
        console.groupEnd(action.type)

        return returnValue
    }
}
*/

/*
const thunk = (store) => (next) => (action) => 
    typeof action === 'function' ? 
            action(store.dispatch, store.getState) : 
            next(action)
*/