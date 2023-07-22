import React from 'react'
import { Box,  CssBaseline , ThemeProvider, } from '@mui/material';

import SidebarNav from './components/SidebarNav';
import Header from './components/Header';
import theme from './config/theme';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
      <ProSidebarProvider>
      <CssBaseline />
      <Header />
      <Box sx={styles.container} >
        <SidebarNav />
        <Box component={'main'} sx={styles.mainSection}>

        </Box>
      </Box>
      </ProSidebarProvider>
     </ThemeProvider> 
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 2,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
}

export default App;


