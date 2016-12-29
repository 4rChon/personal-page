import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ApiClient from './helpers/ApiClient';
import configureStore from './redux/config/configureStore';

import Layout from './views/layout';

import { API_CLIENT_BASE_URL } from './config';

const client = new ApiClient(API_CLIENT_BASE_URL);

const store = configureStore(client);

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('app'),
);
