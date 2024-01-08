import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { url } from '../App'
import { Navigate, useNavigate } from 'react-router-dom'
import api from '../api'


const Login = () => {
  const {handleSubmit,register,formState:{errors}} = useForm()
  const navigate = useNavigate()
  const onsubmit =(data)=>{
    try {
      api.post(`${url}/signin`,data,{
        headers:{
          "Content-Type":"application/json",
      }
      }).then((res)=>{
        if(res){
          localStorage.setItem("token",JSON.stringify(res.data.token))
          localStorage.setItem("logindone",JSON.stringify(true))
          navigate("/user")
          
        }
      })
    } catch (error) {
      console.log(error)
    }
   
    

  }
  return (
    <Card sx={{maxWidth:"30%",margin:"auto"}}>
        <CardContent>
            <Typography textAlign="center">Login</Typography>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <TextField {...register("email",{
                    required:true
                })} type='email' size="small" label="email" error={errors.email} helperText={errors.email && "Email Is Required"}/>
                <TextField {...register("password",{
                    required:true
                })} size="small" label="password" error={errors.password} helperText={errors.password && "Password Is Required"}/>
                <Button variant='contained' onClick={handleSubmit(onsubmit)}>Sigin</Button>
            </div>

        </CardContent>
    </Card>
  )
}

export default Login