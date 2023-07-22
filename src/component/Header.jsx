import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Paper, Box, Badge, Typography } from '@mui/material';
import { useProSidebar } from 'react-pro-sidebar';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton >
            <Toolbar>
              <Paper
                component="form"
                elevation={0}
                sx={{
                  p: '1px 5px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#cbe7eceb',
                  borderRadius: '15px',
                  boxShadow: 'none',
                }}
              >
                <SearchIcon />
                <InputBase placeholder="Type here..." sx={{ ml: 1, flex: 2 }} />
              </Paper>
            </Toolbar>
          </IconButton>

          <IconButton title="Sign in" color="neutral">
            <AccountCircleIcon />
            <Typography variant="body1">Sign in</Typography>
          </IconButton>

          <IconButton onClick={() => (broken ? toggleSidebar() : collapseSidebar())} >
            <MenuTwoToneIcon />
          </IconButton>

          <IconButton title="Settings" color="neutral">
            <SettingsIcon />
          </IconButton>

          <IconButton title="Notifications" color="neutral">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
