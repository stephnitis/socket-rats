import FormControl from '@mui/material/FormControl';
import { Input, InputLabel, FormHelperText, FormGroup } from '@mui/material';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import { TimePicker } from 'smart-webcomponents-react/timepicker';

function NewTripForm() {


  return (
    <FormGroup>
      <FormControl>
        <InputLabel htmlFor="name-input">Full Name</InputLabel>
        <Input id="name-input" aria-describedby="input-name-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="trailname-input">Name of Trail</InputLabel>
        <Input id="trailname-input" aria-describedby="input-trail-name-text" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="trailCoordinates-input">Trailhead Coordinates</InputLabel>
        <Input id="trailCoordinates-input" aria-describedby="input-trail-coordinates-text" />
        <FormHelperText id="input-trail-coordinates-text">Input Latitude and Longitude</FormHelperText>
      </FormControl>
      <TimePicker></TimePicker>

    </FormGroup>
  );
}

export default NewTripForm;