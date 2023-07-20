import React from 'react';
import { Box } from '@mui/material';
import LandingPage from './components/ui/landing_page/landing_page';
// import StepperComponent from "./components/ui/others/stepper";

export default function App() {
  return (
    <Box>
      <LandingPage/>
    </Box>

  //  <Box>
    //  {/* <Grid container direction="column" justifyContent="center">
    //   <Grid item> */}
    // <LandingPage/>
       
    //   {/* </Grid>
    //   <Grid item>
    //     <StepperComponent/>
    //   </Grid>
    // </Grid> */}
  //  </Box>
  );
}