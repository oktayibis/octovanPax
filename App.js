import React from 'react';
import {StatusBar} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import Reducers from './src/AppState/index';
const App: () => React$Node = () => {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Router />
    </Provider>
  );
};

export default App;
