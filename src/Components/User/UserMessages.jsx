import { SettingsContext } from '../../Context/Settings'
import { useContext } from 'react';
import { FormControl, Input, InputLabel, Button, FormGroup, Stack, Box } from '@mui/material';

function UserMessages({ children }) {

  const { sendMessage, messageList, currentMessage, setCurrentMessage, username } = useContext(SettingsContext);

  return (
    <>
      <FormGroup>
        <Stack
          maxWidth="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}>
            <Box className="chat-body">
              {messageList.map((content, index) => {
                return (
                  <Box 
                  key={`message-${index}`}
                  className="message"
                  id={username === content.author ? 'you' : 'dispatch'}
                  >
                    <div className='message-content'>
                      <p>{content.message}</p>
                    </div>
                    <div className='message-meta'>
                      <p>{content.author}</p>
                      <p>{content.time}</p>
                    </div>
                  </Box>
                )
              })}
            </Box>
          <FormControl>
            <InputLabel
              htmlFor="message-input">...</InputLabel>
            <Input
              id="message-input"
              aria-describedby="input-message-text"
              value={currentMessage}
              onChange={(event) => { setCurrentMessage(event.target.value) }} />
          </FormControl>
          <Button
            variant="contained"
            onClick={sendMessage}
          >Send 💬</Button>
        </Stack>
      </FormGroup>
    </>
  )
}

export default UserMessages;