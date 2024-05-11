import axios from "axios"
import { useEffect, useState } from "react"

function Billdetail()
{
    const [list,setList]=useState("")
    useEffect(()=>{
        axios.get(`http://localhost:4681/api/billdetail`,{params:{mobile:"9944449722"}}).then((res)=>{
        setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    })
    return(
        <div style={{color:"white"}}>
        <h1>Bill</h1>
        {list.length>0 && <>
        <div id='table2'>
        <table cellSpacing="20px">
            <tr><th>Bill No.</th><th>Name</th><th>Mobile Number</th><th>Amount Paid</th><th>Balance</th><th>Paid By</th><th>Action</th></tr>
            <tr><td colSpan="7"><hr></hr></td></tr>
            {list.map((item)=><tr><td>{item.billno}</td><td>{item.name}</td><td>{item.mobile}</td><td>{item.amount}</td><td>{item.balance}</td>
            <td>{item.selects}</td><td><button>Print</button></td></tr>)}
        </table>
        </div>
        </>
        }
        {list===0 && <>
        <h1>Not Found</h1>
        </>
        }
        
        </div>
    )
}
export default Billdetail