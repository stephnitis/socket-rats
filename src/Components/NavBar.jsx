import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material'
import { Link } from "react-router-dom";

// const pages = ['Home', 'Settings', 'New Trip'];

export default function NavBar() {

  const [anchorNav, setAnchorNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar  sx={{bgcolor: 'primary.dark', color: 'primary.light'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={handleCloseNavMenu}
          >
            {/* {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))} */}
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/" >Home</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/userinfo" >Settings</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/trips" >Trips</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/dispatch" >Dispatch Chat</Link>
            </MenuItem>
          </Menu>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}