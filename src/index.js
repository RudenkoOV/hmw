import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './components/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename="/hmw">
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);