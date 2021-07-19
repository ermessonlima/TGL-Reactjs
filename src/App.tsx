import Routes from "./routes";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import {  PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from "./store";
import history from './services/history';
import { ToastContainer } from 'react-toastify'
import CreateGlobalStyle from './GlobalStyle';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router history={history}>
        <CreateGlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
