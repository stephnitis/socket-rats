import React, { useState } from 'react';
import dayjs from 'dayjs';
import { FormControl, Input, InputLabel, FormHelperText, FormGroup, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextareaAutosize from '@mui/base/TextareaAutosize';

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
        <DateTimePicker
          label="Hike Start"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <DateTimePicker
          label="Hike End"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextareaAutosize
      aria-label="input additional route details"
      minRows={3}
      placeholder="Additional Route Details"
      style={{ width: 200 }}
    />

    </FormGroup>
  );
}

export default NewTripForm;