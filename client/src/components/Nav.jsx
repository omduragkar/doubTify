import React, { useState } from 'react'
import {Button, IconButton, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Nav = () => {
    const history = useNavigate();
    const [close, setClose] = useState(false);
  return (
    <div className='fixed z-10 top-0 w-full bg-slate-900 p-3 flex justify-between text-white items-center'>
        <div>
            <Typography variant={"h5"}>DoubTify</Typography>
        </div>
        <div className="hidden sm:block">
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
            <ul id="smNav" className='flex flex-col fixed left-0 top-0 py-5 hideblock bg-slate-800 w-full gap-5 items-center'>
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
        <div className='sm:hidden'>
            <IconButton onClick={e=>{
                let navsm = document.getElementById("smNav").classList
                let isNavSm = navsm.contains("hideblock");
                if(!isNavSm){
                    setClose(false);
                }else{
                    setClose(true)
                }
                navsm.toggle("hideblock")

            }}>
                {close?
                <CloseIcon color="info"/>
                :
                <MenuIcon color='primary'/>
            }
            </IconButton>
        </div>
    </div>
  )
}

export default Nav