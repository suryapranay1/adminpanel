import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import NativeSelectDemo from './Dropdown.tsx';
import SelectVariants from './Dropdown.tsx';
import CheckboxLabels from './checkbox.tsx';
import { green, grey } from '@mui/material/colors'; // Import MUI's color system


function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: green[900], // Change primary color to dark green
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt:1}}>
          <TextField
  id="standard-basic"
  label="Username"
  variant="standard"
  color="primary"
  sx={{ width: '400px' }} // Adjust the width as needed
/>

<TextField
  id="standard-basic"
  label="E-mail"
  variant="standard"
  sx={{ width: '400px' }} // Adjust the width as needed
/>

          <TextField
  id="standard-basic"
  label="Password"
  variant="standard"
  sx={{ width: '400px' }} // Adjust the width as needed
/>

<TextField
  id="standard-basic"
  label="confirm Password"
  variant="standard"
  sx={{ width: '400px' }} // Adjust the width as needed
/>

<TextField
  id="standard-basic"
  label="Organisation"
  variant="standard"
  sx={{ width: '400px' }} // Adjust the width as needed
/>

 <SelectVariants/>
 <CheckboxLabels/>


            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:"darkgreen" }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
