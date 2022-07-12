import { createSlice } from "@reduxjs/toolkit"


let userInitialState=
localStorage.getItem("userInfo")?
JSON.parse(localStorage.getItem("userInfo"))
:
{
    isLogin:false,
    name:"",
    email:"",
    role:"",
    loading:false,
    status:'',
}



const userSlice = createSlice({
    name:"user",
    initialState:userInitialState,
    reducers:{
        setUser(state, action){
            let localState = {...state, ...action.payload}
            localStorage.setItem("userInfo", JSON.stringify(localState))
            return localState;
        },
        setLoading(state, action){
            state.loading = action.payload.loading;
            state.status = action.payload.status;
        },
        loguserOut(state, action){
            return {...userInitialState, isLogin:false, loading:false}
        }
    }

})

export const {setLoading, setUser, loguserOut } = userSlice.actions;
export default userSlice.reducer;
