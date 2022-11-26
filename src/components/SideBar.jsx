import React from 'react';

import {
  Box, Divider, Drawer, Toolbar, Typography,
} from '@mui/material';

export default function SideBar({ drawerWidth }) {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'primary.main',
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="white"
          >
            DASHBOARD
          </Typography>
        </Toolbar>

        <Divider />
      </Drawer>
    </Box>
  );
}