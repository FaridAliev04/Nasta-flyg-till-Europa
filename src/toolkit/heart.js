import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:false
}

export const heart=createSlice({
    name:"name",
    initialState,
    reducers:{
        heartTrue:(state)=>{
          state.value= true
        },
        heartFalse:(state)=>{
          state.value=false
        }
    }
})

export const {heartTrue,heartFalse}=heart.actions
export default heart.reducer