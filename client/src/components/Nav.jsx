import React from 'react'
import {Button, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";
const Nav = () => {
    const history = useNavigate();
  return (
    <div className='w-full bg-slate-800 p-3 flex justify-between text-white items-center'>
        <div>
            <Typography variant={"h5"}>Doubt</Typography>
        </div>
        <div>
            <ul className='flex gap-5 items-center'>
                <li className='cursor-pointer'>Home</li>
                <li>
                    
                    <Button variant={"text"} onClick={()=>{
                        history("/auth/login")
                    }}>
                        Login
                    </Button>

                </li>
                <li>
                    <Button variant={"text"} onClick={()=>{
                        history("/auth/signup")
                    }}>
                        Signup
                    </Button>
                </li>
                <li className='cursor-pointer'>About</li>
            </ul>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Nav