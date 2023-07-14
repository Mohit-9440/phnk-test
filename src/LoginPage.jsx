import React, {useState} from 'react';
import './loginpage.css';

const LoginPage =  () => {
  const[email , setEmail] = useState('');
  const[password , setPassword] = useState('');
  
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
    setEmail('')
    setPassword('')
  }
  
  return (
  <div className='login-page'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit} className='login-form'>
        <label>
            <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
            <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button type='submit'>Submit</button>
    </form>
  </div>
  )
}

export default LoginPage;