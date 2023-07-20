import React from "react";
import '../../../App.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import StepperComponent from "../others/stepper";

export default function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
 const handleClose = () => {
    setOpen(false);
  };
  return (
  <>
    <div className="App">
      <div className="container-fluid gx-0">
        <div className="top-head"></div>
        <div className="hero-banner">
          <div className="dialogue-box">
            <p className="mb-0">What would you like to do?</p>
            <div className="d-flex">
              <div className="detail-box">
                <h4>I know the details</h4>
                <small
                >Select if you know the details of your tapes and all the
                  required information</small
                >
              </div>
              <div className="detail-box brd-color">
                <h4>I want TapeArk to assist</h4>
                <small
                >Select this if you want TapeArk to create your order
                  requirement for you</small
                >
              </div>
            </div>
            <div className="btn-next text-center">
              <button className="btn btn-primary" onClick={handleClickOpen}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <StepperComponent/>
         </DialogContent>
      </Dialog>
  </>
  );
}
