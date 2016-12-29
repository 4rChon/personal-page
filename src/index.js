import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { render } from 'react-dom';

import Layout from './layout';

render(
  <Layout />,
  document.getElementById('app'),
);
