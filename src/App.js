import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import io from 'socket.io-client';
import NewTripForm from './Components/NewTripForm';
import Messages from './Components/Messages';
import MessageInput from './Components/MessageInput';
import NavBar from './Components/NavBar';
import UserInfoForm from './Components/UserInfoForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides:{
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

function App() {

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/newtrip"
            element={<NewTripForm />}>
          </Route>
          <Route
            path="/userinfo"
            element={<UserInfoForm />}>
          </Route>
          <Route
            path="/dispatch"
            element={socket ? (
              <div className="disoatch-container">
                <Messages socket={socket} />
                <MessageInput socket={socket} />
              </div>
            ) : (
              <div>Not Connected</div>
            )}>
          </Route>
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
