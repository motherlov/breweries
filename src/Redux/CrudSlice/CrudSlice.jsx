import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../Helper/Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialState = {
  redirect: null,
  breweries:[],
  byState:[],
  suggestions: [],
  fetchByLocation:[],
  data:[],
 
  single: [],  // single Breweries
  SearchResults:[]
};

export const Breweries = createAsyncThunk("/breweries", async(formData) => {
    let res = await AxiosInstance.get(`/breweries/`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const  singleBreweries = createAsyncThunk("/Breweries/id", async(id) => {
    let res = await AxiosInstance.get(`/breweries/${id}`);
    let resData = res?.data;
    return resData;
  }
);


export const fetchAutocompleteSuggestions = createAsyncThunk('autocomplete/fetchAutocomplete',async(searchQuery) => {
  const response = await AxiosInstance.get(`/breweries/autocomplete?query=${searchQuery}`);
    return response.data;
  }
);


export const searchBreweries = createAsyncThunk('breweries/search',async(search) => {
    const res = await AxiosInstance.get(`/breweries/search?query=${search}`);
    let resData = res?.data;
    return resData;
  }
);

export const fetchBreweriesByCity = createAsyncThunk('breweries/fetchByCity',async(query) => {
    const res = await AxiosInstance.get(`/breweries?by_city=${query}`);
    let resData = res?.data;
    return resData;
  }
);

export const fetchBreweries = createAsyncThunk('/fetchByLocation',async ({ location, perPage = 50 })=>{
  const response = await AxiosInstance.get(`/breweries?by_dist=${location}&per_page=${perPage}`);
      return response.data;
    } 
);

export const fetchBreweriesByState = createAsyncThunk('breweries/fetchByState',async (state) => {
    const res = await AxiosInstance.get(`/breweries?by_state=${state}&sort=type,name:asc&per_page=5`); // asccending order
    let resData = res?.data;
    return resData;
  }
);


export const AuthSlice = createSlice({
  name: "CRUD",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder

      .addCase(fetchBreweriesByCity.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(fetchBreweriesByCity.fulfilled, (state, action,  payload ) => {
          state.status = "success";
          state.breweries = action.payload;
          toast(payload?.message);
      })
      .addCase(fetchBreweriesByCity.rejected, (state, action) => {
        state.status = "idle";
        
      })


//////////////////////////////////////      signup   //////////////////////////////////      
      .addCase(singleBreweries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(singleBreweries.fulfilled, (state,action,  payload ) => {
          state.status = "success";
          state.single = action.payload;
          toast(payload?.message)
      
      })
      .addCase(singleBreweries.rejected, (state, action) => {
        state.status = "idle";
      })

     /////////////////////////////////////////////////////////////////

     .addCase(fetchAutocompleteSuggestions.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAutocompleteSuggestions.fulfilled, (state, action,payload) => {
      state.status = 'idle';
      state.suggestions = action.payload;
    })
    .addCase(fetchAutocompleteSuggestions.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    })
    ///////////////////////////////////////////////////////////////////////////
    .addCase(searchBreweries.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(searchBreweries.fulfilled, (state, action,payload) => {
      state.status = 'idle';
      state.breweries = action.payload;
    })
    .addCase(searchBreweries.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    })



     //////////////////////////////////////////////////////////////////////
      .addCase(Breweries.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(Breweries.fulfilled, (state, action,  payload ) => {
          state.status = "success";
          state.breweries = action.payload;
          toast(payload?.message);
      })
      .addCase(Breweries.rejected, (state, action) => {
        state.status = "idle";
        
      })
      /////////////////////////////////////////////////////////
      .addCase(fetchBreweries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBreweries.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchByLocation = action.payload;
      })
      .addCase(fetchBreweries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      ///////////////////////////////////////////////////////
      .addCase(fetchBreweriesByState.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBreweriesByState.fulfilled, (state, action) => {
        state.loading = false;
        state.byState = action.payload;
      })
      .addCase(fetchBreweriesByState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


  },
});


// export const {reset_redirect} = AuthSlice.actions;
export default AuthSlice;