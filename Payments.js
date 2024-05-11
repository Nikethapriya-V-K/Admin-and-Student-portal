import './Payments.css'
import axios from "axios"
import { useEffect, useState } from "react"


function Payments()
{
    const [list,setList]=useState("")
    useEffect(()=>{
        axios.get( `http://127.0.0.1:4678/api/nive`).then((res)=>{
            setList(res.data)
        })
    })
    return (
        <>
        <div id='payments'>
        <h1>Bill-details</h1>
        {list.length>0 && <>
        <div id='table1'>
        <table cellSpacing="20px">
            <tr><th>Name</th><th>Mobile Number</th><th>Amount Paid</th><th>Balance</th><th>Payment method</th><th>Action</th></tr>
            <tr><td colSpan="7"><hr></hr></td></tr>
            {list.map((item)=><tr><td>{item.name}</td><td>{item.mobile}</td><td>{item.amount}</td><td>{item.balance}</td>
            <td>{item.selects}</td><td><button>Edit</button></td></tr>)}
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
export default Payments