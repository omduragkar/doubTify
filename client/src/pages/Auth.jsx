import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Login from "../components/auth/Login"
import Signup from "../components/auth/Signup"
import { useNavigate } from "react-router-dom";
const Auth = ({isLogin}) => {
    const [value, setValue] = useState(isLogin?"one":"two");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        setValue(isLogin?"one":"two")
    },[setValue, isLogin])
    
    const history = useNavigate();
  return (
    <div className='w-screen h-screen bg-slate-900 text-black flex justify-center items-center'>

        <div className='bg-slate-200 w-11/12 xl:w-1/2 md:w-3/4 rounded-md shadow-lg'>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                className='w-full flex bg-slate-200'
            >
                <Tab className='flex-1' value="one" label="Login"  onClick={()=>{
                    history("/auth/login")
                }}/>
                <Tab className='flex-1' value="two" label="Signup" onClick={()=>{
                    history("/auth/signup")
                }} />
            </Tabs>
            {isLogin?
            <Login/>
            :
            <Signup/>
            }
        </div>
    </div>
  )
}

export default Auth