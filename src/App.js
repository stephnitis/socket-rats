// import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useContext } from 'react';
import { SettingsContext } from '../src/Context/Settings';
import NewTripForm from './Components/NewTripForm';
import UserMessages from './Components/UserMessages';
import DispatchChat from './Components/DispatchChat';
import NavBar from './Components/NavBar';
import UserInfoForm from './Components/UserInfoForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TripList from './Components/TripList';

export const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '50vw',
        }
      }
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: '#C0B1B5',
      dark: '#111706',
      light: '#EBEFEE',
    },
    background: {
      default: '#C0B1B5',
      paper: '#EBEFEE',
    },
    divider: '#C0B1B5',
  },
})

function App({ children }) {

  const { showChat, showForm } = useContext(SettingsContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>            
              
            <Route
              path="/trips"
              element={!showForm ? (
                <TripList />
                ) : (
                <NewTripForm />                
                )}>
            </Route>

            <Route
              path="/userinfo"
              element={<UserInfoForm />}>
            </Route>

            <Route
              path="/dispatch"
              element={!showChat ? (
                <div className="dispatch-container">
                  <DispatchChat />
                </div>
              ) : (
                <UserMessages />
              )}>
            </Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
