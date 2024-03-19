import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreweries } from '../../Redux/CrudSlice/CrudSlice';

const Location = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const  fetchByLocation = useSelector((state) => state.Crud.fetchByLocation);
  const loading = useSelector((state) => state.Crud.loading);
  const error = useSelector((state) => state.Crud.error);

  // const handleSearch = () => {
  //   dispatch(fetchBreweries({ location: '32.88313237,-117.1649842', perPage: 3, search }));
  // };

  useEffect(()=>{
    dispatch(fetchBreweries({ location: '32.88313237,-117.1649842', perPage: 50}))
  },[])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
console.log(" fetchByLocation", fetchByLocation)
  return (
    <div>
      {/* <input type="number" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button> */}
      { fetchByLocation.map((brewery) => (
        <div key={brewery.id}>{brewery.name}</div>
      ))}
    </div>
  );
};

export default Location;
