import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
 import { useLocation } from 'react-router-dom';

const NavBar = () => {

 const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


   const location = useLocation();
     const fullUrl = `${location.pathname}`
     const isLoginOrRegistration = fullUrl==="/login" || fullUrl==="/register";
  return (
    <> 
    {!isLoginOrRegistration && ( 
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Breweries</Link>
      <Link to="/city" style={{ textDecoration: 'none', color: '#fff' }}>City</Link>
      {/* <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Product</Link> */}
      <Link to="/state" style={{ textDecoration: 'none', color: '#fff' }}>State(asc)</Link>


    <div>
        <button onClick={handleClick} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#fff' }}>
          Products
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Product 1</MenuItem>
          <MenuItem onClick={handleClose}>Product 2</MenuItem>
          <MenuItem onClick={handleClose}>Product 3</MenuItem>
        </Menu>
      </div>

      <Link to="/location" style={{ textDecoration: 'none', color: '#fff' }}>Location</Link>
      {/* <Link to="/state" style={{ textDecoration: 'none', color: '#fff' }}>State</Link> */}

     
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
       <Link to="/user">
         <Avatar alt="user" />
       </Link>
      </div>
    

    </nav>
    )}
    </>
  );
};

export default NavBar;
