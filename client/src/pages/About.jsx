import { IconButton, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const About = () => {
  return (
    <div className='px-2 py-10 sm:p-10 mt-12 h-full'>

      <Typography variant={"h4"}>About</Typography>
      <div className='pt-16 flex space-y-16 md:space-y-0 flex-col md:flex-row items-center justify-around'>
        <div className='w-fit rounded-full'>
            <img src={"https://avatars.githubusercontent.com/u/80326954?s=400&u=5ee531ef47177c608884c096ad41754449485f0e&v=4"} alt="profimg"/>
        </div>
        <div>
            <Typography variant={"h5"} textAlign="center" className={"self-start"}>I'm am Om Duragkar</Typography>
            <div className='flex-1 flex justify-around'>
                <IconButton href='https://github.com/omduragkar'>
                    <GitHubIcon/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/omaduragkar/">
                    <LinkedInIcon/>
                </IconButton>
            </div>

        </div>
      </div>

    </div>
  )
}

export default About