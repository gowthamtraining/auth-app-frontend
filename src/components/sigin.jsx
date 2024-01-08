import React from 'react'
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material"
import {useForm} from "react-hook-form"
import axios from "axios"
import { url } from '../App'
import { useNavigate } from 'react-router-dom'
import api from '../api'

const Sigin = () => {
    const navigate = useNavigate()
    const {handleSubmit,getValues,setValue,register,formState:{errors}} = useForm()
    const onsubmit=(data)=>{
        api.post(`${url}/siginup`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            if(res){
                navigate("/login")
            }
        })
    }
  return (
    <Card sx={{maxWidth:"30%",margin:"auto"}}>
        <CardContent>
            <Typography textAlign="center">SIGIN</Typography>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <TextField {...register("name",{
                    required:true
                })} type='text' size="small" label="name" error={errors.name} helperText={errors.name && "Name Is Required"}/>
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

export default Sigin