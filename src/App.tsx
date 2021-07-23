import Routes from "./routes";
import { Provider } from "react-redux";
import history from './services/history';
import { Router } from "react-router-dom";
import { store, persistor } from './store';
import CreateGlobalStyle from './GlobalStyle';
import { ToastContainer } from 'react-toastify'
import { PersistGate } from "redux-persist/lib/integration/react";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
