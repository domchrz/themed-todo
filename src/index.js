import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from './context/Store';
import Theme from './context/Theme';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </StoreProvider>
  </React.StrictMode>
);
