import { createSlice } from "@reduxjs/toolkit"


const doubtSlice = createSlice({
    name:"doubts",
    initialState:{
        doubtArray:[],
        loading:false,
        message:undefined,
        status:undefined
    },
    reducers:{
        setLoading(state, action){
            state.loading = action.payload;
        },
        updateMessage(state, action){
            state.message = action.payload.message;
            state.status = action.payload.status
        },
        addArray(state,action){
            state.doubtArray = action.payload
        },
        updateArray(state,action){
            let newArray = [...state.doubtArray];
            newArray = newArray.map(elm=>{
                if(elm._id == action.payload._id){
                    return action.payload;
                }
                return elm;
            })
            state.doubtArray = newArray;
        }
    }

})


export const { setLoading, updateMessage, addArray, updateArray } = doubtSlice.actions;
export default doubtSlice.reducer;
