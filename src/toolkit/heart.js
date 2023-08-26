import { createSlice } from "@reduxjs/toolkit"




const initialState={
    value:0
}

export const heart=createSlice({
  
    name:"name",
    initialState,
    reducers:{
        pilus:(state)=>{
           
          state.value+=1
        },
        minus:(state)=>{
          state.value-=1
        }
    }
})

export const {pilus,minus}=heart.actions
export default heart.reducer