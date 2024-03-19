import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton,Grid,Link, InputAdornment } from '@mui/material';

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


import { Avatar } from "@mui/material";


import Container from "@mui/material/Container";
import { Visibility, VisibilityOff } from '@mui/icons-material';
//import backgroundImage from './your-background-image.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/02/84/97/07/1000_F_284970777_9z4o7upA5NW9docOpg8FWnPS4yXLiI8i.jpg')`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 4,
          borderRadius: 4,
          textAlign: 'center',
        }}
      >


<Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         
        <Typography component="h1" variant="h5">
          Login Page 
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="email Address"
            name="email"
            value={email}



            onChange={(e)=>setEmail(e.target.value)}


            autoComplete="email"
            autoFocus
          />


<TextField
      label="Password"
      id="password"
      name="password"
      margin="normal"
            required
            fullWidth
            value={password}


       onChange={(e)=>setPassword(e.target.value)}


      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />



          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>


        
      </Box>
    </Box>
  );
};

export default Login;
