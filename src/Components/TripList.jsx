import { SettingsContext } from '../Context/Settings'
import { useContext, useEffect, useState } from 'react';
import {Button} from '@mui/material';
import { Box, ListItemButton, ListItemIcon, ListItemText, Collapse, List } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

function TripList() {

  const { handleShowForm, getTrips, tripList } = useContext(SettingsContext);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getTrips();
  }, [])
  console.log(tripList);

  return (
    <>
      {
        tripList.map((trip, index) => (
          <Box>

            <ListItemButton
              key={`trip-${index}`}
              onClick={handleClick}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={trip.trailName} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={Date(trip.startTime)} />
                  <ListItemText primary={Date(trip.returnTime)} />
                  <ListItemText primary={trip.routeDetails} />
                </ListItemButton>
              </List>
            </Collapse>

          </Box>
        ))}

      <Button onClick={handleShowForm}>New Trip</Button>
    </>
  )
}

export default TripList;