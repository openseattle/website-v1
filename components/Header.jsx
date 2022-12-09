import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import React from 'react';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default React.forwardRef((props, ref) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar position='sticky' color='transparent' elevation={1} ref={ref}>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Box textAlign='center'>
              <Typography
                variant='h1'
                sx={{ fontSize: 48, fontWeight: 500 }}
                noWrap
              >
                Open Seattle
              </Typography>
              <Typography
                variant='h2'
                sx={{ fontSize: 24, display: { xs: 'none', sm: 'block' } }}
                noWrap
              >
                Technical folks using our powers for good
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
});
