import React, {useEffect, useState } from 'react';

function Messages({socket}) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((previousMessages) => {
        const newMessages = {...previousMessages};
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((previousMessages) => {
        const newMessages = {...previousMessages};
        delete newMessages[messageID];
        return newMessages;
      });
    };

    socket.on('message', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  return (
    <div className='message-list'>
      
    </div>
  )
}