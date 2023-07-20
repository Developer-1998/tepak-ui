import React from "react";
import { Grid, Box, Typography, CardContent, Card, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { styled } from "@mui/material/styles";
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Country, State } from 'country-state-city';
//import Divider from '@mui/material/Divider';
export default function Shipping() {
    const styles = useStyles();
    const [pickup, setPickup] = React.useState(true);
    const [chain, setChain] = React.useState(true);
    const [locations, setLocations] = React.useState(true);
    const [country, setCountry] = React.useState('');
    const [countries, setCountries] = React.useState([]);
    const [states, setStates] = React.useState([]);
    const [selectedCountry, setSelectedCountry] = React.useState('');
     const [selectedState, setSelectedState] = React.useState('');
    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };
    const handleChangePickup = (event, t) => {
        setPickup(t);
    };
    const handleChangeChain = (event, t) => {
        setChain(t);
    };
    const handleChangeLocation = (event, t) => {
        setLocations(t);
    };
    React.useEffect(() => {
        setCountries(Country.getAllCountries())
    },[])
    React.useEffect(() => {
        const stateData = State.getStatesOfCountry(selectedCountry);
        setStates(stateData)
    },[selectedCountry])
    // useEffect(() => {
    //     const getStates = async () => {
    //         try {
    //             const result = await csc.getStatesOfCountry(selectedCountry);
    //             let allStates = [];
    //             allStates = result?.map(({ isoCode, name }) => ({
    //                 isoCode,
    //                 name
    //             }));
    //             const [{ isoCode: firstState = '' } = {}] = allStates;
    //             //setCities([]);
    //            // setSelectedCity('');
    //             setStates(allStates);
    //             setSelectedState(firstState);
    //         } catch (error) {
    //             setStates([]);
    //            // setCities([]);
    //           //  setSelectedCity('');
    //         }
    //     };

    //     getStates();
    // }, [selectedCountry]);
    console.log(countries)
    return (
        <Box className={styles.root}>
            <Grid container direction="column" justifyContent="center" justifyItems="center" alignItems="center" alignContent="center" spacing={2}>
                <Card className={styles.card}>
                    <CardContent>
                        <Box p={1}>
                            <Grid item>
                                <Typography align="center" className={styles.mainHeading} style={{ fontSize: '28px' }}>Hello Richard! Lets talk about the shipping options!</Typography>
                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Grid item xs={12}>
                                <Grid container direction="row" justifyContent="space-between" spacing={1}>
                                    <Grid item xs={6}>
                                        <Typography className={styles.questions} textAlign="initial" style={{ fontSize: '14px' }}>How are you planning to get the tapes to us?</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ToggleButtonGroup
                                            className={styles.toogleButton}
                                            // color="primary"
                                            value={pickup}
                                            exclusive
                                            onChange={handleChangePickup}
                                            aria-label="Platform"
                                        >
                                            <ToggleButton value={true}>I want TapeArk to Pick them up</ToggleButton>
                                            <ToggleButton value={false}>I want to ship the them myself</ToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        {pickup && (
                            <>
                                <Box p={1}>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" justifyContent="space-between" spacing={1}>
                                            <Grid item xs={6}>
                                                <Typography justifyContent="center" className={styles.questions} textAlign="initial" style={{ fontSize: '14px' }}>I want a trace to be enabled so that I know every person and place that the shipping has been in contact</Typography>
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
                                                    <ToggleButton value={true}>Yes, Enable Chain of Custody</ToggleButton>
                                                    <ToggleButton value={false}>{`No, Don’t Enable Chain of Custody`}</ToggleButton>
                                                </ToggleButtonGroup>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box p={1}>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" justifyContent="space-between" spacing={2}>
                                            <Grid item xs={6}>
                                                <Typography className={styles.questions} style={{ fontSize: '14px' }}>When do you want us to pick up the tapes?</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DateTimePicker']}>
                                                        <DateTimePicker label="Select date and time" sx={{ '& .MuiFormLabel-root': { color: '#8C1D36' } }} />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box p={1}>
                                    <Grid item xs={12} >
                                        <Grid container direction="row" justifyContent="space-between" spacing={1}>
                                            <Grid item xs={6}>
                                                <Typography className={styles.questions} style={{ fontSize: '14px' }}>Are all the tapes in a single location?</Typography>
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
                                <Box p={1} mt={2}>
                                    <Grid item xs={6}>
                                        <Paper className={styles.paperStyle} elevation={1}>
                                            <Grid container direction="column" style={{ padding: '14px' }}>
                                                <Grid item>
                                                    <Typography className={styles.formHeading}>Add your details</Typography>
                                                </Grid>
                                                <form>
                                                    <Grid item>
                                                        <TextField id="standard-basic" label="Full Name" variant="standard" fullWidth={true} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid container direction="row" justifyContent="space-between">
                                                            <Grid item>
                                                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                                    <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-standard-label"
                                                                        id="demo-simple-select-standard"
                                                                        value={selectedCountry}
                                                                        onChange={(event) => setSelectedCountry(event.target.value)}
                                                                        label="Country"
                                                                    >
                                                                        {countries.map(({ isoCode ,phonecode}) => (
                                                                            // <option value={isoCode} key={isoCode}>
                                                                            //     {name}
                                                                            // </option>
                                                                            <MenuItem value={isoCode} key={isoCode}> {isoCode} ({phonecode})</MenuItem>
                                                                        ))}
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item>
                                                                <TextField id="standard-basic" label="Phone Number" variant="standard" fullWidth={true} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <TextField id="standard-basic" label="Address" variant="standard" fullWidth={true} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid container direction="row" justifyContent="space-between">
                                                            <Grid item>
                                                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                                    <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-standard-label"
                                                                        id="demo-simple-select-standard"
                                                                        value={selectedState}
                                                                        onChange={(event) => setSelectedState(event.target.value)}
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
                                                                <TextField id="standard-basic" label="Zip" variant="standard" fullWidth={true} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
                                                            <InputLabel id="demo-simple-select-standard-label">Injestion Center</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-standard-label"
                                                                id="demo-simple-select-standard"
                                                                value={country}
                                                                onChange={handleChangeCountry}
                                                                label="Country"
                                                            >
                                                                <MenuItem value="">
                                                                    <em>None</em>
                                                                </MenuItem>
                                                                <MenuItem value={10}>Ten</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid container direction='row' justifyContent="flex-end">
                                                            <Grid item>
                                                                <Button variant="text">Reset</Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button variant="contained">Add</Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Grid>

                                        </Paper>
                                    </Grid>
                                </Box>
                            </>
                        )}
                        <Box p={2}>
                            <Grid item xs={12}>
                                <Grid container direction="row" justifyContent="space-between" spacing={2}>
                                    <Grid item>
                                        <Button variant="outlined" style={{
                                            height: '60px',
                                            width: '280px',
                                            //borderColor:'#8C1D36',
                                            color: '#8C1D36',
                                            borderRadius: '30px',
                                            border: '1px solid #8C1D36',
                                            size: '18px',
                                            lineHeight: '24px',
                                        }}>Reset</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" style={{
                                            width: '280px',
                                            height: '60px',
                                            borderColor: '#8C1D36',
                                            backgroundColor: '#8C1D36',
                                            color: 'white',
                                            borderRadius: '30px',
                                            size: '18px',
                                            lineHeight: '24px'
                                        }}>Next</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    );
}

const ToggleButton = styled(MuiToggleButton)({
    "&.MuiToggleButton-root.Mui-selected": {
        color: '#8C1D36',
        border: '1px solid #8C1D36',
        backgroundColor: 'white',
        fontSize: '14px'
    },
    "&.MuiToggleButton-root": {
        color: '#7B809A',
        borderRadius: '7px',
        textTransform: 'none !important',
        height: '88px',
        fontSize: '14px'
    }
});
const useStyles = makeStyles({
    root: {
        "& .MuiButton-contained": {
            textTransform: 'none !important',
        },
        "& .MuiButtonBase-root": {
            textTransform: 'none !important',
        }
    },
    mainHeading: {
        fontWeight: 400,
        color: '#344767',
        lineHeight: '28px'
    },
    questions: {
        fontWeight: 400,
        size: "14px",
        color: '#7B809A',
    },
    card: {
        maxWidth: 845,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    paperStyle: {
        backgroundColor: 'grey'
    },
    formHeading: {
        fontSize: '16px',
        fontWeight: 400,
        color: '#344767'
    }
});


