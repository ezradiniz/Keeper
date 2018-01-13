import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
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
