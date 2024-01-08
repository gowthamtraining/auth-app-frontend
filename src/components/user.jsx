import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../App'
import api from '../api'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const User = () => {
    const navigate = useNavigate()
    const [userdata,setuserdata] = useState([])
    useEffect(()=>{
        if(userdata.length===0){
        api.get(`${url}/user`,{
            headers:{
                "Authorization":JSON.parse(localStorage.getItem("token"))
            }
        }).then((res)=>{
            if(res){
                setuserdata(res.data.user.userdata) 
            }
        }).catch((error)=>navigate("/login"))
    }
    },[])
    console.log(userdata)
  return (
    <>
    <Card style={{margin:"auto",maxWidth:"auto"}}>
        <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                <TextField value={userdata.name} InputLabelProps={{shrink:true}} label="name"/>
                </Grid>
                <Grid item xs={5}>
                <TextField value={userdata.email} InputLabelProps={{shrink:true}} label="email"/>
                </Grid>
            </Grid>
           
        
        </CardContent>
    </Card>
   
    </>
  )
}

export default User