import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreweriesByCity } from '../../Redux/CrudSlice/CrudSlice'; 
import { Card, CardContent, Typography, Divider,Grid } from '@mui/material';

const By_City = () => {
     const [city,setCity] =useState('san');
     console.log("city",city);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Crud.breweries );



  // useEffect(() => {

  //    dispatch(fetchBreweriesByCity(city));
  //  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
     dispatch(fetchBreweriesByCity(city));
  };

 console.log("data",data)
 
  return (

    <>

    <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
<br/>
<br/>
   

    
     {Array.isArray(data) && data.map((brewery) => (
 <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {brewery.name}
        </Typography>
        <Divider />
        <Typography variant="body1" color="textSecondary">
          City: {brewery.city}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Address: {brewery.address_1}
        </Typography>
      </CardContent>
    </Card>



     ))}
    







    </>
  );
};

export default By_City;