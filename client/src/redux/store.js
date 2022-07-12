import { configureStore } from "@reduxjs/toolkit";
import doubtReducers from "./reducers/doubtReducers";
import taReducers from "./reducers/taReducers";

import userReducer from "./reducers/userReducer"

const store = configureStore({
    reducer:{
        userInfo:userReducer,
        doubts:doubtReducers,
        tas:taReducers
    }
})



export default store;