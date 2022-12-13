import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormControl, Input, InputLabel, FormHelperText, FormGroup, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function UserInfoForm() {

  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let userUpdate = {

  //   }
  // }

  return (
    <FormGroup>

      <FormControl>
        <InputLabel htmlFor="name-input">Full Name</InputLabel>
        <Input id="name-input" aria-describedby="input-name-text" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <Input id="email-input" aria-describedby="input-email-text" />
      </FormControl>
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Select Birthday"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <FormControl>
        <InputLabel htmlFor="insurance-input">Insurance Information</InputLabel>
        <Input id="insurance-input" aria-describedby="input-insurance-provider-text" />
        <FormHelperText id="input-insurance-provider-text">Input Insurance Provider</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="medications-input">Medications</InputLabel>
        <Input id="medications-input" aria-describedby="input-medications-text" />
        <FormHelperText id="medications-input">Input Regular Medications</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="allergies-input">Allergies</InputLabel>
        <Input id="allergies-input" aria-describedby="input-allergies-text" />
        <FormHelperText id="allergies-input">Input Allergies or Sensitivities</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="communication-input">Communication Difficulties</InputLabel>
        <Input id="communication-input" aria-describedby="input-communication-difficulties-text" />
        <FormHelperText id="communication-input">Input Any Communication Barriers</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="treatments-input">Treatment Preferrences</InputLabel>
        <Input id="treatments-input" aria-describedby="input-communication-difficulties-text" />
        <FormHelperText id="treatments-input">Input Any Treatment Preferrences</FormHelperText>
      </FormControl>

    </FormGroup>
  );
}

export default UserInfoForm;