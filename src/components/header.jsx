import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div style={{background:"lightblue",display:"flex",justifyContent:"space-between",padding:"10px"}}>
      <Typography variant='h4'>Auth-App</Typography>
      <ButtonGroup size='small'>
        {JSON.parse(localStorage.getItem("logindone"))==true?<Button onClick={()=>{
          localStorage.clear()
        navigate("/login")
    }}>Log-Out</Button>:
        <>
        <Button size='small' onClick={()=>{
          navigate("/login")
        }}>Login</Button>
        <Button size='small' onClick={()=>{
          navigate("/sigin")
        }}>SignIn</Button>
        </>
      }
      </ButtonGroup>
    </div>
  )
}

export default Header