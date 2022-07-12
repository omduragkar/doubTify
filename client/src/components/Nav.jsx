import React, { useState } from 'react'
import {Button, IconButton, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/actions/userActions';
const Nav = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const userFetch = useSelector(state=>state?.userInfo);
    const [close, setClose] = useState(false);
    return (
        !userFetch.isLogin?
        <div className='fixed z-10 top-0 w-full bg-slate-900 p-3 flex justify-between text-white items-center'>
            <div>
                <Typography variant={"h5"} className={"cursor-pointer"} onClick={()=>{
                    history("/dashboard")
                }}>DoubTify</Typography>
            </div>
            <div className="hidden sm:block">
                <ul className='flex gap-5 items-center'>
                    <li className='cursor-pointer' onClick={()=>{
                        history("/")
                    }}>Home</li>
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
                    <li className='cursor-pointer' onClick={()=>{
                        history("/about")
                    }}>About</li>
                </ul>
            </div>
            <div>
                <ul id="smNav" className='flex flex-col fixed left-0 top-0 py-5 hideblock bg-slate-800 w-full gap-5 items-center'>
                    <li className='cursor-pointer' onClick={()=>{
                        history("/")
                    }}>Home</li>
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
                    <li className='cursor-pointer' onClick={()=>{
                        history("/about")
                    }}>About</li>
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
        :
        <div className='fixed z-10 top-0 w-full bg-slate-900 p-3 flex justify-between text-white items-center'>
            <div>
                <Typography variant={"h5"} className={"cursor-pointer"} onClick={()=>{
                    history("/dashboard")
                }}>DoubTify</Typography>
            </div>
            <div className="hidden sm:block">
                <ul className='flex gap-5 items-center'>
                    <li className='cursor-pointer' onClick={()=>{
                        history("/dashboard")
                    }}>Dashboard</li>        
                    <li className='cursor-pointer'
                    onClick={()=>{
                        history("/raise-doubt")
                    }}
                    >Raise Doubt</li>
                    {
                        userFetch.role == "TA" &&
                        <li className='cursor-pointer'
                        onClick={()=>{
                            history("/doubts")
                        }}>Solve Doubt</li>
                    }
                </ul>
            </div>

            
            <div>
                <div>
                    <ul id="smNav" className='flex flex-col fixed left-0 top-0 py-5 hideblock bg-slate-800 w-full gap-5 items-center'>
                        <li className='cursor-pointer' onClick={()=>{
                            history("/dashboard")
                        }}>Dashboard</li>        
                            <li className='cursor-pointer'
                            onClick={()=>{
                                history("/raise-doubt")
                            }}
                            >Raise Doubt</li>
                            {
                                userFetch.role == "TA" &&
                                <li className='cursor-pointer'
                                onClick={()=>{
                                    history("/doubts")
                                }}>Solve Doubt</li>
                            }
                            <li>
                            <Button variant={"contained"} color="error" onClick={()=>{
                                dispatch(userLogout())
                                history("/auth/login")
                            }}>
                                Logout
                            </Button>
                            </li>
                    </ul>
                </div>
                <div className='hidden sm:block'>
                    <Button variant={"contained"} color="error" onClick={()=>{
                        dispatch(userLogout())
                        history("/auth/login")
                    }}>
                        Logout
                    </Button>
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
            

        </div>
        
        
  )
}

export default Nav