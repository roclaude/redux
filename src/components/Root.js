
// trebuia React pentru a rula JSX
import React, { PropTypes } from 'react'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';

const Root = ({ store }) => (
<Provider store={store}>
    <Router history={browserHistory} >
        <Route path="/(:filter)" component={App} />
    </Router>
</Provider>
)

Root.propTypes = {
    store: PropTypes.object,
}

export default Root



//---

// {store} este unul din props !!!
//const Root = ({store}) => {
    //...
//}