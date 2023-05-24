import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router} from "react-router-dom";
import {userActions} from "./redux/actions";

store.dispatch(userActions.fetchUserData());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
          <Router>
              <App />
          </Router>
      </Provider>
);

