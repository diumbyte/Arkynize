import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './redux/store';
import { InMemoryCache, ApolloClient, ApolloProvider, HttpLink } from '@apollo/client';
import { BrowserRouter as Router } from "react-router-dom"


const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink({uri: "/api/test/woo"}),
  cache
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
