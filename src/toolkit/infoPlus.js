import { createSlice } from "@reduxjs/toolkit"


const initialState={
    value:4
}

export const infoPlus=createSlice({
    name:"artim",
    initialState,
    reducers:{
        artim:(state)=>{
           
          state.value+=10
        }}

})

export const {artim}=infoPlus.actions
export default infoPlus.reducer