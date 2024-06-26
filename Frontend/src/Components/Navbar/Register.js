import React, {useState} from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
import registerGif from '../Assets/register.gif'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/user';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();
  const registerHandler = (e)=>{
    e.preventDefault();

    const myForm = new FormData();
    myForm.append("firstname",firstname);
    myForm.append("lastname",lastname);
    myForm.append("email",email);
    myForm.append("password",password);

    dispatch(register(myForm));
  }
  return (
    <div>
      <div  className='register-card'>
      <div className='registercard-type'>
      <img src={registerGif} alt='' />
      </div>
      <div className='form-register'>
      <span>Create </span>
      <div className='form-register2'>
      <span>Your Account</span>
      </div>
      <div className='already-member'>
      <span>Already a member?<Link to="/Profile" style={{textDecoration:'none'}}> <b>Log in</b></Link></span>
      </div>
      <form >
    <label for="fname"></label>
    <input type="text" id="fname" name="fname" placeholder="   First Name" onChange={(e) => setFirstname(e.target.value)}/>
    <input type='text' id="lname" name="lname" placeholder="   Last Name" onChange={(e) => setLastname(e.target.value)}/>
    <input type='email' id="accemail" name="email" placeholder="   Email" onChange={(e) => setEmail(e.target.value)}/>
    <input type='password' id="accpassword" name="password" placeholder="   Password"  onChange={(e) => setPassword(e.target.value)}/>
    {/* <input type='password' id="accpassword" name="password" placeholder="   Re-type Password" /> */}
    </form>
    <div className='account-btn'>
    <button onClick={registerHandler} type='submit'>Create Account</button>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Register
