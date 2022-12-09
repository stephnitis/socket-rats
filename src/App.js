import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import Messages from './Components/Messages';
import MessageInput from './Components/MessageInput';

function App() {

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="App-header">Socket RATS</header>
      { socket ? (
        <div className="disoatch-container">
          <Messages socket={socket}/>
          <MessageInput socket={socket} />
          </div>
      ): (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;
