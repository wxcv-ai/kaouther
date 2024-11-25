import React from 'react';
import CandlestickChart from './components/charts';
import { createTheme } from '@mui/material/styles';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import SearchInterface from './components/search';
import HomePage from './components/home';

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          display: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: 'none',
        },
      },
    },
  },
});

const App = () => {
  return (
    <Admin theme={theme}>
      <CustomRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchInterface />} />
        <Route path="/:symbol" element={<CandlestickChart />} />
        </CustomRoutes>
    </Admin>
  );
};

export default App;
