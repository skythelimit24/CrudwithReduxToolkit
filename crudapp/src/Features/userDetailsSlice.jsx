import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action (POST IN REDUX)

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://668ba2b60b61b8d23b0a818d.mockapi.io/CRUD",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);




// read action in redux (GET IN REDUX TOOLKIT)

export const  showUser = createAsyncThunk("showUser", async(data,{rejectWithValue})=>{

    const response = await fetch("https://668ba2b60b61b8d23b0a818d.mockapi.io/CRUD");

    try{
          const result = await response.json();
          return (result)
    }catch(error){
return rejectWithValue(error)
    }
})




export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // [createUser.pending]: (state) => {
    //   state.loading = true;
    // },
    // [createUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //    state.users.push(action.payload);
    // },
    // [createUser.rejected]: (state) => {
    //   state.loading = false; 
    //   state.users = action.payload;
    // },
builder.addCase(createUser.pending,(state)=>{
    state.loading = true;
})
builder.addCase(createUser.fulfilled,(state,action)=>{
    state.loading = false ;
    state.users.push(action.payload)
})
builder.addCase(createUser.rejected,(state,action)=>{
    state.loading = false;
    state.error = action.payload.message;
})



// show  users   get data extra reducers 




builder.addCase(showUser.pending,(state,action)=>{
    state.loading = true;
   
})
builder.addCase(showUser.fulfilled,(state,action)=>{
    state.loading = false;
    state.users = action.payload;
})
builder.addCase(showUser.rejected,(state,action)=>{
    state.loading = false;
    state.error = action.payload.message;
})


  },
});





export default userDetail.reducer;
