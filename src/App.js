import React from 'react';
import DashBoard from './components/dashboard';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import './App.css';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <DashBoard/>
    </Provider>
  );
}

export default App;
