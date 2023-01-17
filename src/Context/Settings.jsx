import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const server = process.env.REACT_APP_SERVER
const socket = io.connect(server);

// var axios = require("axios").default;

var options = {
  method: 'POST',
  url: process.env.AUTH_TOKEN_URL,
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
    client_secret: process.env.SECRET,
    audience: process.env.AUTH_API_IDENTIFIER,
  })
};

// var options = { 
//   method: "GET",
//   url: process.env.AUTH_TOKEN_URL,
//   headers: { "authorization": "Bearer TOKEN" },
// };

axios(options)
  .then(response => {
    console.log('response data ---->', response.data);
  })
  .catch(error => {
    console.log(error);
  });

// const socket = io({
//   extraHeaders: {
//     "my-custom-header": "1234"
//   }
// });

export const SettingsContext = React.createContext();
// const server = process.env.REACT_APP_SERVER

const SettingsProvider = ({ children }) => {

  const [username, setUsername] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [tripList, setTripList] = useState([]);
  // const [info, setInfo] = useState();

  const joinRoom = () => {
    if (username !== '') {
      socket.emit('join', `${username} Joined Dispatch Chat`);
      setShowChat(true);
    }
  }

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  const getTrips = async () => {
    try {
      // let response = await axios.get(`${server}/trips`);
      let response = await axios.get('http://localhost:3002/trips');      
      let results = response.data.data.results;
      // console.log('response results ---->', results);
      setTripList([...results]);
    } catch (e) {
      console.log(e);
    }
  }
  console.log('trip list ----->', tripList);

  const createTrip = async ({...trips}) => {
    try {
      let url = 'http://localhost:3002/trips';
      let newTrip = await axios.post(url, trips);
      setTripList([...tripList, newTrip.data]);
    } catch (e) {
      console.error(e)
    }
  }

  const handleShowForm = () => {
    if (!showForm) {
      setShowForm(true)
    } else if (showForm) {
      setShowForm(false)
    }
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket])

  // const updateInfo = async (id) => {
  //   try {
  //     let url = `${server}/users/${id}`
  //     let updatedInfo = await axios.put(url, id);      
  //     setInfo(updatedInfo);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  const values = {
    username,
    setUsername,
    showChat,
    setShowChat,
    joinRoom,
    messageList,
    currentMessage,
    setCurrentMessage,
    sendMessage,
    handleShowForm,
    showForm,
    getTrips,
    setTripList,
    tripList,
    createTrip,
    // updateInfo
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

}

export default SettingsProvider;