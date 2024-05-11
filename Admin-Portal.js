import {useNavigate} from 'react-router-dom'
import { useState} from "react"
import axios from 'axios'
import './Admin-Portal.css'
function Admin()
{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [result,setResult]=useState([])
    const navigate=useNavigate()

    const check=()=>{
        axios.get( `http://127.0.0.1:1234/admin-login`,{params:{username:username,password:password}})
        .then(res=>{
            setResult(res.data)
            //console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const name=(event)=>{
        setUsername(event.target.value)
    }
    if(result==='success')
    { 
        //console.log("ok")
        navigate("/Billing")
    }

    return(
        <div id='admin'>
            <h2>Admin Login</h2>
            <div id='inputs'>
           <input type="text" placeholder="username" onChange={(e)=>name(e)}></input>
            <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <input type="button" value='Login' onClick={check}></input>
            </div>
        </div>
    )
}
export default Admin

