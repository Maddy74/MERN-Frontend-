import React from 'react'
import './Forgotpwd.css'
import { Link } from 'react-router-dom';
import forgotpwd from '../Assets/forgotpwd.gif'

const Forgotpwd = () => {
  return (
    <div>
      <div  className='register-card'>
      <div className='registercard-type'>
      <img src={forgotpwd} alt='' />
      </div>
      <div className='forgot'>
      <span>Forgot Password</span>
      <div className='worry'>
      <span>Don't Worry. It Happens<Link to="/Profile" style={{textDecoration:'none'}}> <b>Log in</b></Link></span>
      </div>
      <form action="">
    {/* <label for="fname"></label> */}
    {/* <input type='email' id="forgotemail" name="email" placeholder="   Email" /> */}
    <input type='password' id="forgotpassword" name="password" placeholder="   Old Password" />
    <input type='password' id="forgotpassword" name="password" placeholder="   New Password" />
    </form>
    <div className='forgot-btn'>
    <button>Submit</button>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Forgotpwd
