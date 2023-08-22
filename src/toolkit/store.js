import { configureStore } from "@reduxjs/toolkit";
import heart from "./heart";

export const store=configureStore({
    reducer:{
        name:heart
    }
})