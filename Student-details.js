import './Student-details.css'
import axios from "axios"
import { useEffect, useState } from "react"


function Studentdetails()
{
    const [list,setList]=useState("")
    useEffect(()=>{
        axios.get( `http://127.0.0.1:4677/api/nive`).then((res)=>{
            setList(res.data)
        })
    })
    return (
        <>
        <div id='students'>
        <h1>Student-details</h1>
        {list.length>0 && <>
        <div id='table2'>
        <table cellSpacing="20px">
            <tr><th>Name</th><th>Mobile Number</th><th>E-mail</th><th>Address</th><th>Date-Of-Join</th><th>Course</th><th>Action</th></tr>
            <tr><td colSpan="7"><hr></hr></td></tr>
            {list.map((item)=><tr><td>{item.name}</td><td>{item.mobile}</td><td>{item.email}</td><td>{item.address}</td>
            <td>{item.date}</td><td>{item.course}</td><td><button>Edit</button></td></tr>)}
        </table>
        </div>
        </>
        }
        {list===0 && <>
        <h1>Not Found</h1>
        </>
        }
        </div>
        </>
    )
}
export default Studentdetails