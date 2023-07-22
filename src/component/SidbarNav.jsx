import React from 'react';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';


const SidebarNav = () => {
  const { collapsed } = useProSidebar();
  const theme = useTheme();

  return (
    <Sidebar
      style={{
        height: '100%',
        borderRadius: '20px',
        marginLeft: '20px',
        top: 'auto',
        color: theme.typography.color,
        background:
            'linear-gradient(180deg, #1b5d67da 0%, #5d939ceb 49%, #ddeaeceb 100%)',
      }}
      breakPoint='md'
    >
      <Box sx={styles.avatarContainer} >
        <Avatar sx={styles.avatar} alt='Khorsand' src='src/assets/silicode.png' />
        {!collapsed && <Typography variant='body3' sx={styles.yourChannel}>Khorsand</Typography>}
      </Box>

      <Menu iconShape="circle">
        <SubMenu label='Dashboard' icon={<ScatterPlotIcon />} >
          <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
            <Typography variant='body2'>Default</Typography>
          </MenuItem>

          <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
            <Typography variant='body2'>CRM</Typography>
          </MenuItem>
        </SubMenu>
      </Menu>

      <Menu>
        <SubMenu label='Ecommerce' icon={<ScatterPlotIcon />} >
          <SubMenu label='Product' style={{ background: '#cbe7eceb' }}>
            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>New Product</Typography>
            </MenuItem>

            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Edit Product</Typography>
            </MenuItem>

            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Product Page</Typography>
            </MenuItem>
          </SubMenu>

          <SubMenu label='Orders' style={{ background: '#cbe7eceb' }}>
            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Order List</Typography>
            </MenuItem>

            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Order Detail</Typography>
            </MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>

      <Menu>
        <SubMenu label='Authentication' icon={<ScatterPlotIcon />}>
          <SubMenu label='SignIn' style={{ background: '#cbe7eceb' }}>
            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Basic</Typography>
            </MenuItem>

            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Cover</Typography>
            </MenuItem>

            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Illustration</Typography>
            </MenuItem>
          </SubMenu>

          <SubMenu label='SignUp' style={{ background: '#cbe7eceb' }}>
            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Basic</Typography>
            </MenuItem>

            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Cover</Typography>
            </MenuItem>

            <MenuItem active component={<Link to="/" />} icon={<DashboardIcon />} style={{ background: '#cbe7eceb' }}>
              <Typography variant='body2'>Illustration</Typography>
            </MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sidebar>
  )
}

const styles = {
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    my: 4,
  },
  yourChannel: {
    mt: 1
  }
}

export default SidebarNav;
