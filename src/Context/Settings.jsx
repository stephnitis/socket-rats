import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
const server = process.env.REACT_APP_SERVER
const socket = io.connect(server);
// import axios from 'axios';

export const SettingsContext = React.createContext();
// const server = process.env.REACT_APP_SERVER

const SettingsProvider = ({children}) => {

  const [username, setUsername] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  // const [info, setInfo] = useState();

  const joinRoom = () => {
    if (username !== '') {
      socket.emit('join', `${username} Joined Dispatch Chat`);
      setShowChat(true);
    }
  }

  const sendMessage = async () => {
    if(currentMessage !== ''){
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
    // updateInfo
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

}

export default SettingsProvider;