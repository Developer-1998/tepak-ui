import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
/* import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel'; */

const UserInformationContainer = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [phoneNumberError, setPhoneNumberError] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
/*     const [country, setCountry] = React.useState('');
 */
/*     const handleCountryChange = (event) => {
        setCountry(event.target.value);
      }; */
    // Phone number validation function
const validatePhoneNumber = (input) => {
    // Regular expression for phone number 
        const phoneRegExp = /^\+?\d{0,3}?(\d{10})$/;
        if (!input.match(phoneRegExp)) {
            return 'Invalid phone number. Please enter a valid phone number.';
        }
        return '';
  };
  
  // Email validation function
  const validateEmail = (input) => {
    // Regular expression for email validation
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.match(emailRegExp)) {
      return 'Invalid email address. Please enter a valid email address.';
    }
    return '';
  };
  return (
    <Box
      sx={{
        width: '386px',
        height: '380.8671875px',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#FFFFFF', 
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '28px',
          letterSpacing: '0em',
          color: '#344767',
          textAlign: 'center'
        }}
      >
        About You
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'center',
          color: '#7B809A',
        }}
      >
        All Fields are Mandatory
      </Typography>

      <TextField
        label="Full Name"
        variant="filled"
        sx={{
          width: '386px',
          height: '28px',
          padding: '7.868816375732422px 0px 0.45914268493652344px 0px',
          marginTop: '24px',
        }}
      />
      <TextField
        label="Company"
        variant="filled"
        sx={{
          width: '386px',
          height: '28px',
          padding: '7.868816375732422px 0px 0.45914268493652344px 0px',
          marginTop: '24px',
        }}
      />
    <TextField
        label="Country"
        variant="filled"
        sx={{
          width: '386px',
          height: '28px',
          padding: '7.868816375732422px 0px 0.45914268493652344px 0px',
          marginTop: '24px',
        }}
      />
{/*       <InputLabel
        htmlFor="country-select"
        sx={{
          marginTop: '24px', 
        }}
      >
        Country
      </InputLabel> */}
{/*       <Select
        value={country}
        onChange={handleCountryChange}
        
        variant="filled"
        id="country-select"
        sx={{
          width: '386px',
          height: '28px',
          padding: '7.868816375732422px 0px 0.45914268493652344px 0px',
        }}
      >

        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Canada">Canada</MenuItem>
        <MenuItem value="India">India</MenuItem>
      </Select> */}
      <TextField
        label="Phone Number"
        variant="filled"
        value={phoneNumber}
  error={Boolean(phoneNumberError)}
  helperText={phoneNumberError}
  onChange={(e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError(validatePhoneNumber(e.target.value));
  }}
        sx={{
          width: '386px',
          height: '28px',
          padding: '7.868816375732422px 0px 0.45914268493652344px 0px',
          marginTop: '24px',
        }}
      />
      <TextField
        label="Email"
        variant="filled"
        value={email}
        error={Boolean(emailError)}
        helperText={emailError}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(validateEmail(e.target.value));
        }}
        sx={{
          width: '386px',
          height: '28px',
          padding: '7.868816375732422px 0px 0.45914268493652344px 0px',
          marginTop: '24px',
        }}
      />
    </Box>
  );
};

export default UserInformationContainer;
