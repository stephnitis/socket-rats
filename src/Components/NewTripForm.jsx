import React, { useState } from 'react';
import dayjs from 'dayjs';
import { FormControl, Input, InputLabel, FormHelperText, FormGroup, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function NewTripForm() {

  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Hike Start Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

    </FormGroup>
  );
}

export default NewTripForm;