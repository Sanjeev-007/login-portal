import React, { useState } from 'react'
import Base from '../core/Base'
import {Link} from "react-router-dom"
import { getAllByDisplayValue } from '@testing-library/dom'
import { signup } from '../auth/helper'

const Signup=()=>{

const [values, setValues] =useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false

})

const {name, email, password, error, success}=values

const handleChange= name=> event=>{
    setValues({...values, error: false, [name]: event.target.value})
};

const onSubmit = event=>{
    event.preventDefault()
    setValues({...values, error: false})
    signup({name, email,password})
    .then(data => {
        if(data.error){
            setValues({...values, error:data.error, success:false})
        }
        else{
            setValues({...values, name: "",
        email:"",
        password:"",
        error: "",
        success: true
    })
        }

    })
    .catch( console.log("Error in Signal"))
}

    const signupForm = ()=>{
        return(
            <div className='row'>
                <div className='col-mid-6 text-left'>
                   
                    <form>
                        <div className="form-group">
                            <label >
                                Name
                            </label>
                            <br/>
                            <input className="form-control" value={name} onChange={handleChange("name")} type='text'/><br/>
                            <label >
                               Email
                            </label><br/>
                            <input className="form-control" value={email} onChange={handleChange("email")} type='email'/><br/>
                            <label >
                                Password
                            </label><br/>
                            <input className="form-control" value={password} onChange={handleChange("password")} type='password'/><br/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Sign Up</button>
                    </form>
                    
                    </div> 
            </div>
        )
    }


    const successMessage = () => {
       return ( <div className="alert alert-success" style={{display: success ? "":"none"}}>
            New Account Created successfully. You can <Link to="/signin">Login Here</Link>
        </div>)
    }

    const errorMessage = () => {
        return(<div className="alert alert-danger" style={{display: error ? "":"none"}}>
           {error}
        </div>)
    }


    return (
        <Base title="Sign-UP Page" description="">
            {successMessage()}
            {errorMessage()}
            {signupForm()}
            
        </Base>

    )

}

export default Signup;