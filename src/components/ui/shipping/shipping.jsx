import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Country, State } from "country-state-city";
import { useForm } from "react-hook-form";
export default function Shipping() {
  const styles = useStyles();
  const [pickup, setPickup] = React.useState(true);
  const [chain, setChain] = React.useState(true);
  const [locations, setLocations] = React.useState(true);
  const [countries, setCountries] = React.useState([]);
  const [states, setStates] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedState, setSelectedState] = React.useState("");
  const [injestionCenter, setInjestionCenter] = React.useState("");
  const [formData, setFormData] = React.useState([]);
  const { register, handleSubmit} = useForm();
  const handleChangePickup = (event, t) => {
    setPickup(t);
  };
  const handleChangeChain = (event, t) => {
    setChain(t);
  };
  const handleChangeLocation = (event, t) => {
    setLocations(t);
  };
  const onchangeInjestion = (e) => {
    setInjestionCenter(e.target.value)
  }
  const onSubmit = (data) => {
    setFormData(data);
  }
  // const onClickReset = () => {
  //   reset(formData);
  // }
  React.useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);
  React.useEffect(() => {
    const stateData = State.getStatesOfCountry(selectedCountry);
    setStates(stateData);
  }, [selectedCountry]);
  return (
    <Box className={styles.root}>
      <Grid
        container
        direction="column"
        spacing={2}
      >
        <Box p={1}>
          <Grid item>
            <Typography
              align="center"
              className={styles.mainHeading}
              style={{ fontSize: "28px" }}
            >
              Hello Richard! Lets talk about the shipping options!
            </Typography>
          </Grid>
        </Box>
        <Box p={1} mt={4}>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              spacing={1}
            >
              <Grid item xs={6}>
                <Typography
                  className={styles.questions}
                  textAlign="initial"
                  style={{ fontSize: "14px" }}
                >
                  How are you planning to get the tapes to us?
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <ToggleButtonGroup
                  className={styles.toogleButton}
                  value={pickup}
                  exclusive
                  onChange={handleChangePickup}
                  aria-label="Platform"
                >
                  <ToggleButton value={true}>
                    I want TapeArk to Pick them up
                  </ToggleButton>
                  <ToggleButton value={false}>
                    I want to ship the them myself
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {pickup && (
          <>
            <Box p={1}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Grid item xs={6}>
                    <Typography
                      justifyContent="center"
                      className={styles.questions}
                      textAlign="initial"
                      style={{ fontSize: "14px" }}
                    >
                      I want a trace to be enabled so that I know every person
                      and place that the shipping has been in contact
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <ToggleButtonGroup
                      className={styles.toogleButton}
                      color="primary"
                      value={chain}
                      exclusive
                      onChange={handleChangeChain}
                      aria-label="Platform"
                    >
                      <ToggleButton value={true}>
                        Yes, Enable Chain of Custody
                      </ToggleButton>
                      <ToggleButton
                        value={false}
                      >{`No, Don’t Enable Chain of Custody`}</ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box p={1}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <Typography
                      className={styles.questions}
                      style={{ fontSize: "14px" }}
                    >
                      When do you want us to pick up the tapes?
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateTimePicker"]}>
                        <DateTimePicker
                          label="Select date and time"
                          sx={{ "& .MuiFormLabel-root": { color: "#8C1D36" } }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box p={1}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Grid item xs={6}>
                    <Typography
                      className={styles.questions}
                      style={{ fontSize: "14px" }}
                    >
                      Are all the tapes in a single location?
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <ToggleButtonGroup
                      className={styles.toogleButton}
                      fullWidth={true}
                      color="primary"
                      value={locations}
                      exclusive
                      onChange={handleChangeLocation}
                      aria-label="Platform"
                    >
                      <ToggleButton value={true}>Yes</ToggleButton>
                      <ToggleButton value={false}>No</ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            {
              formData && (
               <Box>
                 <Grid item xs={3}>
                    <Paper elevation={3}>
                      <Grid container direction="column" alignItems="center" alignContent="center">
                        <Grid item>
                          <Typography className={styles.cardHeading} align="center">{formData.FullName}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={styles.cardPhone} align="center">{formData.phoneNumber}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography>{formData.address}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography>{formData.Country}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
               </Box>
              )
            }
            { locations && formData.length < 1 ? (
                <Box p={1} mt={2}>
                  <Grid item xs={6}>
                    <Paper elevation={2}>
                      <Grid
                        className={styles.paperStyle}
                        container
                        direction="column"
                        style={{ padding: "14px" }}
                      >
                        <Grid item>
                          <Typography className={styles.formHeading}>
                            Add your details
                          </Typography>
                        </Grid>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <Grid item>
                            <TextField
                              {...register("FullName")}
                              id="standard-basic"
                              label="Full Name"
                              variant="standard"
                              fullWidth={true}
                            />
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                            >
                              <Grid item>
                                <FormControl
                                  variant="standard"
                                  sx={{ m: 1, minWidth: 120 }}
                                >
                                  <InputLabel id="demo-simple-select-standard-label">
                                    Country
                                  </InputLabel>
                                  <Select
                                    {...register("Country")}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedCountry}
                                    onChange={(event) =>
                                      setSelectedCountry(event.target.value)
                                    }
                                    label="Country"
                                  >
                                    {countries.map(({ isoCode, phonecode }) => (
                                      <MenuItem value={isoCode} key={isoCode}>
                                        {" "}
                                        {isoCode} ({phonecode})
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item>
                                <TextField
                                  {...register("phoneNumber")}
                                  id="standard-basic"
                                  label="Phone Number"
                                  variant="standard"
                                  fullWidth={true}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <TextField
                              {...register("address")}
                              id="standard-basic"
                              label="Address"
                              variant="standard"
                              fullWidth={true}
                            />
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                            >
                              <Grid item>
                                <FormControl
                                  variant="standard"
                                  sx={{ m: 1, minWidth: 120 }}
                                >
                                  <InputLabel id="demo-simple-select-standard-label">
                                    State
                                  </InputLabel>
                                  <Select
                                    {...register("state")}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedState}
                                    onChange={(event) =>
                                      setSelectedState(event.target.value)
                                    }
                                    label="State"
                                  >
                                    {states.length > 0 ? (
                                      states.map(({ isoCode, name }) => (
                                        <MenuItem value={isoCode} key={isoCode}>
                                          {name}
                                        </MenuItem>
                                      ))
                                    ) : (
                                      <MenuItem value="" key="">
                                        No state found
                                      </MenuItem>
                                    )}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item>
                                <TextField
                                  {...register("zip")}
                                  id="standard-basic"
                                  label="Zip"
                                  variant="standard"
                                  fullWidth={true}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <FormControl
                              variant="standard"
                              sx={{ m: 1, minWidth: 120 }}
                              fullWidth={true}
                            >
                              <InputLabel id="demo-simple-select-standard-label">
                                Injestion Center
                              </InputLabel>
                              <Select
                                {...register("injestion")}
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={injestionCenter}
                                onChange={onchangeInjestion}
                                label="Country"
                              >
                                {countries.map(({ name, isoCode }) => (
                                  <MenuItem value={isoCode} key={isoCode}>
                                    {" "}
                                    {name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="row"
                              justifyContent="flex-end"
                              spacing={2}
                            >
                              <Grid item>
                                <Button variant="text" color="inherit"><b>Reset</b></Button>
                              </Grid>
                              <Grid item>
                                <Button variant="contained" type="submit" style={{
                                  backgroundColor:'#841A15',
                                  fontSize:'12px',
                                  width:'70px',
                                  borderRadius:'8px'
                                }}>Add</Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </form>
                      </Grid>
                    </Paper>
                  </Grid>
                </Box>
              ) : !locations ? (<>
              <Box p={1} mt={2}>
                  <Grid item xs={6}>
                    <Paper elevation={2}>
                      <Grid
                        className={styles.paperStyle}
                        container
                        direction="column"
                        style={{ padding: "14px" }}
                      >
                        <Grid item>
                          <Typography className={styles.formHeading}>
                            Add your details
                          </Typography>
                        </Grid>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <Grid item>
                            <TextField
                              {...register("FullName")}
                              id="standard-basic"
                              label="Full Name"
                              variant="standard"
                              fullWidth={true}
                            />
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                            >
                              <Grid item>
                                <FormControl
                                  variant="standard"
                                  sx={{ m: 1, minWidth: 120 }}
                                >
                                  <InputLabel id="demo-simple-select-standard-label">
                                    Country
                                  </InputLabel>
                                  <Select
                                    {...register("Country")}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedCountry}
                                    onChange={(event) =>
                                      setSelectedCountry(event.target.value)
                                    }
                                    label="Country"
                                  >
                                    {countries.map(({ isoCode, phonecode }) => (
                                      <MenuItem value={isoCode} key={isoCode}>
                                        {" "}
                                        {isoCode} ({phonecode})
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item>
                                <TextField
                                  {...register("phoneNumber")}
                                  id="standard-basic"
                                  label="Phone Number"
                                  variant="standard"
                                  fullWidth={true}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <TextField
                              {...register("address")}
                              id="standard-basic"
                              label="Address"
                              variant="standard"
                              fullWidth={true}
                            />
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="row"
                              justifyContent="space-between"
                            >
                              <Grid item>
                                <FormControl
                                  variant="standard"
                                  sx={{ m: 1, minWidth: 120 }}
                                >
                                  <InputLabel id="demo-simple-select-standard-label">
                                    State
                                  </InputLabel>
                                  <Select
                                    {...register("state")}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={selectedState}
                                    onChange={(event) =>
                                      setSelectedState(event.target.value)
                                    }
                                    label="State"
                                  >
                                    {states.length > 0 ? (
                                      states.map(({ isoCode, name }) => (
                                        <MenuItem value={isoCode} key={isoCode}>
                                          {name}
                                        </MenuItem>
                                      ))
                                    ) : (
                                      <MenuItem value="" key="">
                                        No state found
                                      </MenuItem>
                                    )}
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item>
                                <TextField
                                  {...register("zip")}
                                  id="standard-basic"
                                  label="Zip"
                                  variant="standard"
                                  fullWidth={true}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <FormControl
                              variant="standard"
                              sx={{ m: 1, minWidth: 120 }}
                              fullWidth={true}
                            >
                              <InputLabel id="demo-simple-select-standard-label">
                                Injestion Center
                              </InputLabel>
                              <Select
                                {...register("injestion")}
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={injestionCenter}
                                onChange={onchangeInjestion}
                                label="Country"
                              >
                                {countries.map(({ name, isoCode }) => (
                                  <MenuItem value={isoCode} key={isoCode}>
                                    {" "}
                                    {name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="row"
                              justifyContent="flex-end"
                              spacing={2}
                            >
                              <Grid item>
                                <Button variant="text" color="inherit"><b>Reset</b></Button>
                              </Grid>
                              <Grid item>
                              <Button variant="contained" type="submit" style={{
                                  backgroundColor:'#841A15',
                                  fontSize:'12px',
                                  width:'70px',
                                  borderRadius:'8px'
                                }}>Add</Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </form>
                      </Grid>
                    </Paper>
                  </Grid>
                </Box>
              </>) : (<></>)
            }

          </>
        )}
      </Grid>
    </Box>
  );
}

const ToggleButton = styled(MuiToggleButton)({
  "&.MuiToggleButton-root.Mui-selected": {
    color: "#8C1D36",
    border: "1px solid #8C1D36",
    backgroundColor: "white",
    fontSize: "14px",
  },
  "&.MuiToggleButton-root": {
    color: "#7B809A",
    borderRadius: "7px",
    textTransform: "none !important",
    height: "88px",
    fontSize: "14px",
  },
});
const useStyles = makeStyles({
  root: {
    "& .MuiButton-contained": {
      textTransform: "none !important",
    },
    "& .MuiButtonBase-root": {
      textTransform: "none !important",
    },
    marginTop: '45px'
  },
  mainHeading: {
    fontWeight: 400,
    color: "#344767",
    lineHeight: "28px",
  },
  questions: {
    fontWeight: 400,
    size: "14px",
    color: "#7B809A",
  },
  card: {
    maxWidth: 845,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  paperStyle: {
    backgroundColor: "white",
  },
  formHeading: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#344767",
  },
  cardHeading:{
    fontWeight:700,
    fontSize:'32px',
    color: '#344767'
  },
  cardPhone:{
    color:'#344767',
    fontWeight:700,
    fontSize:'16px'
  }
});
