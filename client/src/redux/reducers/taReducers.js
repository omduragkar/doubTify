import { createSlice } from "@reduxjs/toolkit"


const taSlice = createSlice({
    name:"tas",
    initialState:{
        pendingArray:[],
        assignedDoubt:undefined,
        loading:false,
        message:undefined,
        status:undefined
    },
    reducers:{
        setTaLoading(state, action){
            state.loading = action.payload;
        },
        updateTAMessage(state, action){
            state.message = action.payload.message;
            state.status = action.payload.status
        },
        addTAArray(state,action){
            state.pendingArray = action.payload
        },
        assignetheDoubt(state,action){
            state.assignedDoubt = action.payload
        }
    }

})


export const { setTaLoading, updateTAMessage, addTAArray, assignetheDoubt } = taSlice.actions;
export default taSlice.reducer;
