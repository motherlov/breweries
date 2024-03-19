import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { singleBreweries } from '../../Redux/CrudSlice/CrudSlice';
import { Grid,Typography,Link, Box } from '@mui/material';
export default function BreweriesSingle() {


    const { id} = useParams();
    const dispatch = useDispatch();
    const {single}= useSelector((state) => state.Crud);
    useEffect(() => {
          dispatch(singleBreweries(id));
        },[id,dispatch]);
        console.log("single",single);
  return (
   
//     <Box
//   sx={{
//     backgroundColor: 'pink',
//     color: 'green',
//     height: '460px',
//     width: '350px',
//     border: '4px solid black',
//     borderRadius: '4rem',
//     padding: '5rem',
//     margin: '5px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//   }}
// >
    <Grid container spacing={2}>






      <Grid item xs={12}>
        <Typography variant="h3">Brewery Details</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{single.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Phone: {single.phone}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">State: {single.state}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Address: {single.address}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Website: <Link href={single.website_url} target="_blank" rel="noopener">{single.website_url}</Link></Typography>
      </Grid>
      

    </Grid>
    // </Box>
  
  )
}
