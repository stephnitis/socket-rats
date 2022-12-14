
import { SettingsContext } from '../Context/Settings'
import { useContext } from 'react';
import { FormControl, Input, InputLabel, Button, FormGroup, Stack } from '@mui/material';

// Does this actually need to happen on submit of form?
// Should there be double functionality so hikers can engage with Dispatch at will?

function DispatchChat({ children }) {

  const { joinRoom, setUsername } = useContext(SettingsContext);

  return (
    <>

      <FormGroup>
        <Stack
          maxWidth="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}>
          <FormControl
            sx={{ width: '50vw' }}>
            <InputLabel
              htmlFor="username-input">Username</InputLabel>
            <Input
              id="username-input"
              aria-describedby="input-username-text"
              onChange={(event) => { setUsername(event.target.value) }} />
          </FormControl>
          <Button
            variant="contained"
            onClick={joinRoom}
          >Join</Button>
        </Stack>
      </FormGroup>

    </>
  )
}

export default DispatchChat;