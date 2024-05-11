import './Dashboard.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'


function Dashboard()
{
    const [newStudent,setNewStudent]=useState("")
    const [newBill,setNewBill]=useState("")
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [amount,setAmount]=useState(0)
    const [date,setDate]=useState("")
    const [course,setCourse]=useState("")
    const Name=(event)=>{
        setName(event.target.value)
    }
    const Mobile=(event)=>{
        setMobile(event.target.value)
    }
    const Email=(event)=>{
        setEmail(event.target.value)
    }
    const Address=(event)=>{
        setAddress(event.target.value)
    }
    const AmountPaid=(event)=>{
        setAmount(event.target.value)
    }
    const Date=(event)=>{
        setDate(event.target.value)
    }
    const addStudent=()=>{
        setName("")
        setMobile("")
        setEmail("")
        setAddress("")
        setAmount("")
        setCourse("")
        setDate("")
       axios.get(`http://localhost:4675/api/Nike`,{params:{name:name,mobile:mobile,email:email,address:address,amount:amount,date:date,course:course}
    }).then((res)=>{
        console.log(res.data)
       }).catch((err)=>{
        console.log(err)
       })
       
    }
    const [selects,setSelects]=useState("")
    const [billno,setBillno]=useState("2400001")
    const [namebill,setNamebill]=useState("")
    const [mobilebill,setMobilebill]=useState("")
    const [amountbill,setAmountbill]=useState("")
    const [balancebill,setBalancebill]=useState("")
    const NameBill=(event)=>{
        setNamebill(event.target.value)
    }
    const MobileBill=(event)=>{
        setMobilebill(event.target.value)
    }
    const AmountPaidBill=(event)=>{
        setAmountbill(event.target.value)
    }
    const BalanceBill=(event)=>{
        setBalancebill(event.target.value)
    }
    const addBill=()=>{
        setBillno(parseInt(billno)+1)
        setSelects("")
        setNamebill("")
        setMobilebill("")
        setAmountbill("")
        setBalancebill("")
        axios.get(`http://localhost:4676/api/Nike`,{params:{billno:billno,name:namebill,mobile:mobilebill,amount:amountbill,balance:balancebill,selects:selects}
    }).then((res)=>{
        console.log(res.data)
       }).catch((err)=>{
        console.log(err)
       })
    }
    return(
        <>
        <div id='container'>
            <Link id="but1" to="/Billing/student-details">Student Details</Link>
            <Link id='but1' to="/Billing/course-fees">Course Fees</Link>
            <Link id="but1" to="/Billing/payments">Payments</Link>
            <button id='buts' onClick={setNewStudent}>+ New Student</button>
            <button id='buts' onClick={setNewBill}>+ Billing</button>
        </div>
        {newStudent && 
            <div id='main'>
            <h1>Adding New Student</h1>
            <table>
            <tr>
            <td><label>Enter Student Name:</label></td><td><input onChange={Name} value={name} type='text'></input></td>
            </tr>
            <tr>
            <td><label>Mobile Number:</label></td><td><input onChange={Mobile} value={mobile} type='text'></input></td>
            </tr>
            <tr>
            <td><label>E-mail:</label></td>
            <td><input onChange={Email} value={email} type='email'></input></td></tr>
            <tr>
            <td>
            <label>Address:</label></td><td><textarea onChange={Address} value={address} rows='5' cols='25'></textarea></td>
            </tr>
            <tr>
            <td><label>Course:</label></td>
            <td><select value={course} onChange={cour=>setCourse(cour.target.value)}>
                <option>Front-end Developer</option>
                <option>Back-end Developer</option>
                <option>Full-stack Developer</option>
            </select></td></tr>
            <tr>
            <td><label>Amount Paid:</label></td><td><input onChange={AmountPaid} value={amount} type='text'></input></td>
            </tr>
            <tr>
            <td><label>Date Of Join</label></td>
            <td><input onChange={Date} value={date} type='date'></input></td></tr>
            </table>
            <button id='sub' onClick={addStudent}>Submit</button>

            </div>
}

        {newBill && 
        <div id='main'>
        <h1>Bill</h1>
        <table>
        <tr><td><label>Bill No:</label></td><td><input type='text' value={billno}></input></td></tr>
        <tr><td><label>Name:</label></td><td><input type='text' onChange={NameBill} value={namebill}></input></td></tr>
        <tr><td><label>Mobile Number:</label></td><td><input type='text' onChange={MobileBill} value={mobilebill}></input></td></tr>
        <tr><td><label>Amount Paid:</label></td><td><input type='text' onChange={AmountPaidBill} value={amountbill}></input></td></tr>
        <tr><td><label>Balance:</label></td><td><input type='text' onChange={BalanceBill} value={balancebill}></input></td></tr>
        <tr><td><label>Payment Method:</label></td>
            <td><select value={selects} onChange={e=>setSelects(e.target.value)}>
                <option>Google Pay</option>
                <option>Cash</option>
            </select></td></tr>
        </table>
        <button id='sub' onClick={addBill}>Submit</button>
   
        </div>
}     
    </>
    )
}
export default Dashboard