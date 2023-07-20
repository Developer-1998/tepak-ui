import React from 'react';
import { Box ,Grid} from '@mui/material';
import LandingPage from './components/ui/landing_page/landing_page';
import Shipping from './components/ui/shipping/shipping';
export default function App() {
  return (
   <Box p={4}>
     <Grid container direction="column" justifyContent="center">
      <Grid item>
        <LandingPage/>
      </Grid>
      {/* Stepper for reference*/}
      <Grid item>
        <Shipping/>
      </Grid>
    </Grid>
   </Box>
  );
}