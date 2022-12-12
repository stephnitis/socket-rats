import FormControl from '@mui/material/FormControl';
import { Input, InputLabel, FormHelperText, FormGroup } from '@mui/material';

function NewTripForm() {


  return (
    <FormGroup>
      <FormControl>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input id="name-input" aria-describedby="input-name-text" />
        <FormHelperText id="input-full-name-text">Input Full Name</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="trailCoordinates-input">Trailhead Coordinates</InputLabel>
        <Input id="trailCoordinates-input" aria-describedby="input-trail-coordinates-text" />
        <FormHelperText id="input-trail-coordinates-text">Input Latitude and Longitude</FormHelperText>
        </FormControl>
    </FormGroup>
  );
}

export default NewTripForm;