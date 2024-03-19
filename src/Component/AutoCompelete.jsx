
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutocompleteSuggestions } from '../Redux/CrudSlice/CrudSlice';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
const AutoComplete = () => {


  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.Crud.suggestions);
  const [searchQuery, setSearchQuery] = useState('');
  const [notFound, setNotFound] = useState(false);

  const handleSearchChange = (e) => {
    if (searchQuery.length > 2) {
      dispatch(fetchAutocompleteSuggestions(searchQuery));
    } else {
        setNotFound(false);
      }
  };

//  useEffect(()=>{
//     dispatch(fetchAutocompleteSuggestions(searchQuery));
//  },[searchQuery])

   console.log("suggestions",suggestions)
  return (
    <div>
      {/* <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder='search .....'  /> */}
    
      {/* <button onClick={handleSearchChange}> search</button> */}

      <TextField
    //   label="Search"
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      variant="outlined"
      size="small"
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
          '& fieldset': {
            borderColor: 'blue', // Change the border color
          },
          '&:hover fieldset': {
            borderColor: 'green', // Change the border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'purple', // Change the border color when focused
          },
        },
        '& .MuiInputBase-input': {
          // Change the input text color
          color: 'red',
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearchChange}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
       
      }}
    />


      {notFound && <p>No suggestions found</p>}
      <div>
        {suggestions.map((suggestion) => (
          <h4 key={suggestion}>{suggestion.name}</h4>
        ))}
      </div>
    </div>
  );
};

export default AutoComplete;
