import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
//import TablePagination from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
 import { Grid } from '@mui/material';
 import { Link } from 'react-router-dom';
import { Breweries } from '../../Redux/CrudSlice/CrudSlice';
import { searchBreweries } from '../../Redux/CrudSlice/CrudSlice';
export default function ListBreweries() {
    const dispatch = useDispatch();
    const { breweries} = useSelector((state)=>state.Crud)  
  useEffect(()=>{
      dispatch(Breweries());
  },[dispatch])
  const [search, setSearch] = useState('');
 console.log("search",search)



  const handleSearch = (e) => {
    e.preventDefault();
     dispatch(searchBreweries(search));
  };


// useEffect(()=>{
//     dispatch(fetchSearchResults({ search: 'san diego', perPage: 3 }))
// },[dispatch])

  
////////////////////////////////pagination //////////////////
const [pg, setpg] = useState(0); 
const [rpg, setrpg] =useState(10); 
const handleChangePage =(event, newpage)=> {  setpg(newpage); } 
const handleChangeRowsPerPage =(event)=> { 
    setrpg(parseInt(event.target.value, 10)); 
    setpg(0); } 

  
console.log(" breweries", breweries)


  return (
    <>
    <div>

<br/>

<input
        type="text"
        value={search}
        onChange={(e) =>setSearch(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
<br/>
<br/>
<br/>
  <Grid container spacing={2}>
    {Array.isArray( breweries) &&  breweries.slice(pg * rpg, pg * rpg + rpg).map((item) => (
       <Link to={`/breweries/${item.id}`} sx={{textDecoration:'none'}}>
      <Grid
        item
        key={item.id}
        sx={{
          backgroundColor: 'white',
          color: 'black',
          height: '460px',
          width: '250px',
          border: '2px solid black',
          borderRadius: '1rem',
          padding: '1rem',
          margin: '1px',
          overflow: 'hidden',

        
        }}
      >
        <div style={{ height: '260px', overflow: 'hidden' }}>
          {/* <img src={item.thumbnail} alt={item.title} /> */}
        </div>
        <br />
        <h3 style={{ padding: '0', margin: '0' }}>
          {item.name}
        </h3>
        <br />
        <h3 style={{ padding: '0', margin: '0' }}>
          {item.address_1}
        </h3>
        <hr />
        Country: {item.country}...
      </Grid>
      </Link>
    ))}
  </Grid>

<TablePagination 
                rowsPerPageOptions={[10, 20, 50]} 
                component="div"
                count={breweries.length} 
                rowsPerPage={rpg} 
                page={pg} 
                onPageChange={handleChangePage} 
                onRowsPerPageChange={handleChangeRowsPerPage} 
            /> 

</div>

</>

  )
}
