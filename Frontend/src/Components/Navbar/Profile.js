import React, { useState, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './Profile.css'
import animchar from '../Assets/signupform.gif'
import google from '../Assets/google.svg';
import apple from '../Assets/apple.svg';
import facebook from '../Assets/facebook.svg';
import {useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/user';
import toast from 'react-hot-toast';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, user, error } = useSelector((state) => state.user);


  const dispatch = useDispatch();
  const navigate = useNavigate();


  // Effect to reset the scroll position to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Effect to handle errors
  useEffect(() => {
    if (error) {
      toast.error(error); // Display error message to the user
    }
  }, [error]);


  const submitHandler = (e) => {
e.preventDefault();
dispatch(login(email, password));
  }  

  const handleLogout = () => {
    dispatch(logout())
    navigate('/');
  };  

  return (
    <div>
    {isAuthenticated?(<>
      <div>
          {/* Content for authenticated users */}
          <h2>Welcome {user?.firstname}!</h2>
          <button onClick={handleLogout}>Logout</button> {/* The Logout button */}
        </div>
        {user && user.role === 'Admin' && (
          <Link to={"admin/dashboard"}>
            <button>Dashboard</button>
          </Link>
        )}
    </>):(
      <div  className='profile-card'>
      <div className='card-type'>
      <img src={animchar} alt='' />
      </div>
      <div className='register'>
      <span>Not a member? <Link to="/Register" style={{textDecoration:'none'}}><b>Register Now</b></Link></span>
      </div>
      <div className='form'>
      <span>Hello Again!</span>
      <div className='login2'>
      <span>Welcome Back you've been missed!</span>
      </div>
      <form >
    {/* <label for="fname"></label> */}
    <input type="email" value={email} id="uname" name="email" placeholder="  Enter Email"  onChange={(e) => setEmail(e.target.value)} required />
    <input type="password" value={password} id="password" name="password" placeholder="   Password" onChange={e => setPassword(e.target.value)}/>
    </form>
    <div className='forgot-pwd'>
    <Link to="/Forgotpassword" style={{textDecoration:'none'}}><span>Forgot Password?</span></Link>
    </div>
    <div className='login-btn'>
    <button onClick={submitHandler} type='submit'>Sign In</button>
    </div>
    <div className='other-login'>
      <span>Or Continue With</span>
      </div>
      <div className='social-media-login1'>
      <img src={google} alt='' />
      </div>
      <div className='social-media-login2'>
      <img src={apple} alt='' />
      </div>
      <div className='social-media-login3'>
      <img src={facebook} alt='' />
      </div>
    </div>
      </div>
    )}
    </div>
  )
}

export default Profile
