import React, { useState } from 'react';
import { SettingsContext } from '../Context/Settings'
import { useContext } from 'react';
import useFormHook from '../hooks/form';
import dayjs from 'dayjs';
import { FormControl, Input, InputLabel, FormHelperText, FormGroup, TextField, Stack, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextareaAutosize from '@mui/base/TextareaAutosize';

function NewTripForm({ children }) {

  const [date, setDate] = useState(dayjs('2014-08-18T21:11:54'));

  const { createTrip } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useFormHook(createTrip);

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <FormGroup onSubmit={handleSubmit}>
      <Stack
        maxWidth="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2} >


        <FormControl>
          <InputLabel
            htmlFor="name-input">
            Full Name
          </InputLabel>
          <Input
            onChange={handleChange}
            id="name-input"
            aria-describedby="input-name-text" />
        </FormControl>



        <FormControl>
          <InputLabel
            htmlFor="trailname-input">
            Name of Trail
          </InputLabel>
          <Input
            onChange={handleChange}
            id="trailname-input"
            aria-describedby="input-trail-name-text" />
        </FormControl>



        <FormControl >
          <InputLabel
            htmlFor="trailCoordinates-input">
            Trailhead Coordinates
          </InputLabel>
          <Input
            onChange={handleChange}
            id="trailCoordinates-input"
            aria-describedby="input-trail-coordinates-text" />
          <FormHelperText
            id="input-trail-coordinates-text">
            Input Latitude and Longitude
          </FormHelperText>
        </FormControl>


        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Hike Start"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />

          <DateTimePicker
            label="Hike End"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <TextareaAutosize
          onChange={handleChange}
          aria-label="input additional route details"
          minRows={3}
          placeholder="Additional Route Details"
          style={{ width: '50vw' }}
        />
        <Button
          type="submit"
        >
          Create Trip
        </Button>
      </Stack>
    </FormGroup>
  );
}

export default NewTripForm;