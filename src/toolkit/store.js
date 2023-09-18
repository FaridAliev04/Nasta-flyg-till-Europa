import { configureStore } from "@reduxjs/toolkit";
import heart from "./heart";
import infoPlus from "./infoPlus";

export const store=configureStore({
    reducer:{
        name:heart,
        artim:infoPlus
    }
})