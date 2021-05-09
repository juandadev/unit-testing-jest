import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

ProviderMock.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProviderMock;
