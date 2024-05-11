import { useEffect, useState } from 'react'
import './Course-fees.css'
import axios from 'axios'
function Coursefees()
{
    const [course,setCourse]=useState("")
    const [coursename,setCoursename]=useState("")
    const [coursefee,setCoursefee]=useState("")
    const [courseduration,setCourseduration]=useState("")
    const [list,setList]=useState("")

    const addCourse=()=>{
        axios.get(`http://localhost:4680/course`,{params:{name:coursename,fee:coursefee,duration:courseduration}}).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        axios.get(`http://localhost:4682/course`).then((res)=>{setList(res.data)})
    })

    return (
        <div id='courseb'>
        <button id="addcourse" onClick={setCourse}>+ Course</button>
        <h1>Course</h1>
        {course && <div id='content'>
            <table>
                <tr><td>Enter Course Name:</td><td><input type='text' onChange={e=>setCoursename(e.target.value)}></input></td></tr>
                <tr><td>Enter Course Fee:</td><td><input type='text' onChange={e=>setCoursefee(e.target.value)}></input></td></tr>
                <tr><td>Course Duration:</td><td><input type='text' onChange={e=>setCourseduration(e.target.value)}></input></td></tr>
                <tr><td colSpan="2" align='center'><button id='but' onClick={addCourse}>Submit</button></td></tr>
            </table>
            </div>}
        {list.length>0 && <div id='coursetable'>
            <table cellSpacing="20px">
                <tr><td>Course Name</td><td>Course Fee</td><td>Duration</td></tr>
                <tr><td colSpan="3"><hr></hr></td></tr>
                {list.map((detail)=><tr><td>{detail.name}</td><td>{detail.fee}</td><td>{detail.duration}</td></tr>)}
                </table>
        
            </div>}
            
        </div>
    )
}
export default Coursefees