// App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreweriesByState } from '../../Redux/CrudSlice/CrudSlice';

function State() {
  const dispatch = useDispatch();
  const byState = useSelector((state)=>state.Crud.byState );
  const [state, setState] = useState('california');

  const handleSearch = () => {
    dispatch(fetchBreweriesByState(state));
  };

// useEffect(()=>{
//     fetchBreweriesByState(state)
// },[])

  console.log("byState",byState)
  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter state"
      />
      <button onClick={handleSearch}>Search</button>
      {byState.map((brewery) => (
        <div key={brewery.id}>
          <h3>{brewery.name}</h3>
          <p>{brewery.city}, {brewery.state}</p>
        </div>
      ))}
    </div>
  );
}

export default State;
