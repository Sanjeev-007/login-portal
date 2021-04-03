import React, { useState } from 'react'
import Base from '../core/Base'
import {Link, Redirect} from "react-router-dom"
import { getAllByDisplayValue } from '@testing-library/dom'
import {signin, authenticate, isAuthenticated} from "../auth/helper"

const Signin=()=>{

const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    lading: false,
    didRedirect: false
})

const {email,password, error, loading, didRedirect}=values;
 const {user} = isAuthenticated();

 const handleChange= name=> event=>{
    setValues({...values, error: false, [name]: event.target.value})
};

const loadingMessage = () => {
    return ( <div className="alert alert-success">
         <h2>Loading..</h2>
     </div>)
 }

 const errorMessage = () => {
     return(<div className="alert alert-danger" style={{display: error ? "":"none"}}>
        {error}
     </div>)
 }

 const performRedirect = ()=>{
     if(didRedirect){
        return <Redirect to="/"/>
     }
     if(isAuthenticated()){
         return <Redirect to="/"/>
     }
 }

 const onSubmit=event=> {
     event.preventDefault();
     setValues({...values, error: false, loading: true})
        signin({email, password})
        .then(
            data=>{
                if(data.error){
                    setValues({...values, error:data.error, loading:false})
                }else{
                    authenticate(data, ()=>{
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                    performRedirect();
                }
            }
        )
        .catch( console.log("signin REQUES FAILED") );
    }



    const signinForm = ()=>{
        return(
            <div className='row'>
                <div className='col-mid-6 text-left'>
                    <form>
                        <div className="form-group">
                        
                            <label >
                               Email
                            </label><br/>
                            <input value={email} onChange={handleChange("email")} className="form-control" type='email'/><br/>
                            <label >
                                Password
                            </label><br/>
                            <input  value={password} onChange={handleChange("password")} className="form-control" type='password'/><br/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Sign In</button>
                    </form>
                    </div> 
            </div>
        )
    }
    return (
        <Base title="Sign In Page" description="">
            {loadingMessage}
            {errorMessage()}
            
            {signinForm()}
            
            {performRedirect()}
        
        </Base>

    )

}

export default Signin;