import {  useState } from 'react'
import './Student-Portal.css'
import OtpInput from 'otp-input-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {auth} from '../firebase-config'
import { RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth'
import {Toaster,toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
function Student()
{
    const [otp,setOtp]=useState("")
    const [ph,setPh]=useState("")
    const [loading,setLoading]=useState(false)
    const [showOTP,setShowOTP]=useState(false)
    const [user,setUser]=useState(null)
    const navigate=useNavigate()
    function onCaptchaVerify(){
        if(!window.recaptchaVerifier)
        {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onSignup()
                  // reCAPTCHA solved, allow signInWithPhoneNumber.
                  // ...
                },
                'expired-callback': () => {
                  // Response expired. Ask user to solve reCAPTCHA again.
                  // ...
                }
              },auth);
        }
    }

    function onSignup()
    {
        setLoading(true)
        onCaptchaVerify()
        const appVerifier=window.recaptchaVerifier
        const mobile='+' + ph
    signInWithPhoneNumber(auth, mobile, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false)
      setShowOTP(true)
      toast.success('OTP sended successfully!')
    }).catch((error) => {
        console.log(error)
        setLoading(false)
    });
    }
    function onOTPVerify(){
        setLoading(true)
        window.confirmationResult.confirm(otp).then(async(res)=>{
            console.log(res)
            setUser(res.user)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
    }
    //const navigation=navigate('/Home')
    return(
           <div>
            <Toaster toastOptions={{duration:4000}}/>
            <div id='recaptcha-container'></div>
            {user ? (navigate('/Student-Portal/Home'))           
            :
             <div id='student'>
             <h1 id='heads'>Welcome to Livewire</h1>
             {showOTP ? <>
             <div id='OTP'>Enter Your OTP</div>
             <div className='otp-box'>
             <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus></OtpInput>
             </div>
             <button onClick={onOTPVerify} className='but-Verify'>
                {loading && <FontAwesomeIcon className="load" icon={faCircleNotch} spin/>}
                 <span>Verify OTP</span>
             </button>
             </> :
             <>
             <div id='OTP'>Enter Your Phone Number</div>
            <PhoneInput className='mob-num' country={"in"} value={ph} onChange={setPh}></PhoneInput>
             <button onClick={onSignup} className='but-Verify'>
                {loading && <FontAwesomeIcon className="load" icon={faCircleNotch} spin/>}
                 <span>Send OTP via SMS</span>
             </button>
             </>
             }
             </div>
            }
            
           </div>
    )
}

export default Student
