import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { darkTheme } from './styles/theme';
import { AppRouter } from './pages/AppRouter';

const App: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <MuiThemeProvider theme={darkTheme}>
          <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
