import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import PropTypes from 'prop-types';
import UserInformationContainer from './UserInformationContainer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Shipping from '../shipping/shipping';
import { Grid } from '@mui/material';

const steps = ['User Information', 'Shipping', 'Tape', 'Billing', 'Ingestion'];

const CustomStepIconRoot = styled('div')(({ ownerState }) => ({
  marginTop: '13.5px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#8C1D36',
  background: '#8C1D36',
  textAlign: 'center',
  opacity: ownerState.completed ? 1 : 0.5,

  ...(ownerState.active && {
    color: '#8C1D36',
    opacity: 1,
  }),
  ...(ownerState.completed && {
    color: '#8C1D36',
    opacity: 1,
  }),
  '& .MuiStepIcon-completed': {
    color: '#8C1D36',
  },
  '& .MuiStepIcon-circle': {
    color: '#8C1D36',
    width: '16px',

  },
}));

function CustomStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? (
        <div className="MuiStepIcon-completed" style={{ opacity: 1 }} />
      ) : (
        <div className="MuiStepIcon-circle" style={{ opacity: active ? 1 : 0.5 }} />
      )}
    </CustomStepIconRoot>
  );
}

CustomStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The className attribute to apply custom styles to the icon container.
   */
  className: PropTypes.string,
};

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: '20px',
    left: 'calc(-50% + 8px)',
    right: 'calc(50% + 8px)',
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: '#8C1D36',
    opacity: '1',
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: '#8C1D36',
    opacity: '1',
  },
  [`& .${stepConnectorClasses.line}`]: {
    width: '154px',
    top: '32px',
    opacity: '0.5',
    border: '2px solid #8C1D36',
    borderRadius: '1px',
  },
}));

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [formKey, setFormKey] = React.useState(0); // State variable for resetting the form

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  /*   const handleStep = (step) => () => {
      setActiveStep(step);
    }; */

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleFormReset = () => {
    // Set the form key to a new value to trigger the form reset
    setFormKey((prevFormKey) => prevFormKey + 1);
  };

  return (
    <Dialog
      open
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          width: '913px',
          height: '790px',
          borderRadius: '8px',
          border: '1px',
          borderWidth: '0.5px',
          borderStyle: 'solid',
          borderColor: '#C7CCD0',
        },
      }}
    >
      <DialogContent >
        <Box sx={{ height: '80px', boxShadow: '0px 2px 6px 0px #00000040' }}>
          <Stepper nonLinear activeStep={activeStep}
            alternativeLabel

            connector={<CustomConnector />} >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepLabel
                  // onClick={handleStep(index)} 
                  StepIconComponent={CustomStepIcon}
                >
                  <Typography sx={{
                    color: '#8C1D36',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    textAlign: 'center'
                  }}>
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <div style={{ display: 'flex', flexDirection: 'row', pt: 2 }} >
          <div style={{ width: '58px', }}>
            <IconButton
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, width: '24px', height: '24px', mt: 8 }}
            >
              <ArrowBackIcon />
            </IconButton></div>

          {/* <div style={{ paddingLeft: '182px', paddingTop: '32px' }}>
            {activeStep === 0 && (
              <React.Fragment>
                <UserInformationContainer></UserInformationContainer>
              </React.Fragment>
            )}

            {activeStep === 1 && (     //Add component here for the step
              <React.Fragment>
                <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center">
                  <Grid item>
                  <Shipping/>
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
          </div> */}
          <Grid container direction="column" justifyContent="center" alignContent="center" style={{ paddingTop: '32px' }}>
            <Grid item xs={12}>
            {activeStep === 0 && (
              <React.Fragment>
                <UserInformationContainer formKey={formKey}></UserInformationContainer>
              </React.Fragment>
            )}
            </Grid>
            <Grid item>
            {activeStep === 1 && (     //Add component here for the step
              <React.Fragment>
                <Grid container direction="row" justifyContent="center" alignContent="center" alignItems="center">
                  <Grid item xs={12}>
                  <Shipping/>
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
            </Grid>
          </Grid>
        </div>
        <div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
              onClick={handleFormReset}
              sx={{
                mr: 1,
                width: '280px',
                height: '60px',
                gap: '10px',
                borderRadius: '30px',
                background: 'linear-gradient(180deg, #AD304C 0%, #8C1D36 100%)',
                color: '#FFFFFF',
              }}
            >
              Reset
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleComplete} sx={{
              mr: 1, width: '280px', height: '60px', gap: '10px', borderRadius: '30px',
              background: 'linear-gradient(180deg, #AD304C 0%, #8C1D36 100%)', color: '#FFFFFF'
            }}>
              Next
            </Button>
            {/*                 {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))} */}
          </Box>
        </div>
      </DialogContent>
    </Dialog>
  );
}
