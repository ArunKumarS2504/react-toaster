import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import './add.css'

const Add = () => {
    const users = {
        fname:"",
        lname:"",
        email:"",
        password:""
    }
    const [user, setUser] = useState(users)
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:8000/api/create',user)
        .then((res) => {
            toast.success(res.data.msg,{position:"top-right"})
            navigate('/')
        })
        .catch(error=>console.log(error))
    }

    const inputHandler = (e) => {
        const{name,value} = e.target
        setUser({...user,[name]:value})
    }


  return (
    <div className='addUser'>
        <h3 className='ok'>Add new user</h3>
        <form className='addUserForm' onSubmit={handleSubmit}>
            <div className='inputGroup'>
                <label htmlFor='fname'>First name</label>
                <input type='text' name='fname' id='fname' autoComplete='off' placeholder='First name' onChange={inputHandler} />
            </div>
            <div className='inputGroup'>
                <label htmlFor='fname'>Last name</label>
                <input type='text' name='lname' id='lname' autoComplete='off' placeholder='Last name' onChange={inputHandler} />
            </div>
            <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' autoComplete='off' placeholder='Email' onChange={inputHandler} />
            </div>
            <div className='inputGroup'>
                <label htmlFor='fname'>Password</label>
                <input type='text' name='password' id='password' autoComplete='off' placeholder='Password' onChange={inputHandler} />
            </div>
            <div className='inputGroup'>
                <button type='submit'>Add User</button>
            </div>
        </form>
    </div>
  )
}

export default Add