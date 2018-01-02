import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './reducers';
import registerServiceWorker from './registerServiceWorker';

Modal.setAppElement('#root');

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
