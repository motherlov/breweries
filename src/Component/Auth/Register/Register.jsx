import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton,Grid,Link, InputAdornment } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { Visibility, VisibilityOff } from '@mui/icons-material';
//import backgroundImage from './your-background-image.jpg';

const Register = () => {
  const [name, setName] =useState('');
  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [phone,setPhone] = useState('');
  const [answer, setAnswer] =useState('')
 const [image,setImage] =useState('')

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
        overflow: 'hidden', // Prevents background overflow
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 4,
          borderRadius: 4,
          textAlign: 'center',
          //overflow: 'hidden', // Prevents content from overflowing
          
        }}
      >
<Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: 'hidden',
        }}
      >
        <Typography component="h1" variant="h5">
          Registration Form
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>


        <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  name="name"
                  label="First Name"
                  type="text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  autoComplete="given-name"
                  autoFocus
                />
              
 <Grid item xs={12} sm={6}>
            <TextField
                  required
                  fullWidth
                  id="phone"
                  value={phone}
                  label="mobile"
                  name="phone"
                  type="number"
                  variant="outlined"
                  inputProps={{ maxLength: 10, inputMode: 'numeric', pattern: '[0-9]*' }}
                  onChange={(e)=>setPhone(e.target.value)}
                  autoComplete="mobile-number"
                /> 
                </Grid>

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

              {/* <TextField
                  required
                  fullWidth
                  id="answer"
                  label="answer"
                  name="answer"
                  value={answer}
                  type="text"
                  onChange={(e)=>setAnswer(e.target.value)}
                  autoComplete="answer"
                /> */}

               <TextField
                  required
                  fullWidth
                  name="image"
                //   label="image"
                  type="file"
                  id="image"
                  onChange={handleFileChange}
                  autoComplete="new-image"
                /> 
                <div>
               {image && <img src={image} alt="Uploaded" style={{ maxWidth: '80px', maxHeight: '90px' }} />}
               </div> 

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
            Sign Up
          </Button>

     
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {/* <Button  variant="contained" color="success" fullWidth>Sign up with Google</Button>
      <br/>
      <br/>
      <Button  variant="contained" color="success" fullWidth> Sign up with Facebook </Button> */}
          
        </Box>
      </Box>
    </Container>


        
      </Box>
    </Box>
  );
};

export default Register;