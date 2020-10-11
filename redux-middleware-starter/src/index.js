import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

// setup a const with redux middlewares
//spread it in theStore const

const middleWare = [reduxPromise, reduxThunk];

const theStore = applyMiddleware(...middleWare)(createStore)(rootReducer);

// to break it down:
// const middlewareApplied = applyMiddleware(reduxPromise);
// const storeWithMiddleWare = middlewareApplied(createStore);
// const finalStore = storeWithMiddleWare(rootReducer);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
