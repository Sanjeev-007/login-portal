import React ,{Fragment} from 'react'
import {Link, Redirect, withRouter} from "react-router-dom"
import { signout, isAuthenticated } from '../auth/helper';
import history from "../history"


// const currentTab=(history,path)=>{
//     if(history.pathname === path){
//         return {color: '#FFFFFF'}
//     }else {
//         return { color: '#d1d1d1'}
//     }
// };

const Menu =()=>(
    <div>
        <ul className="nav nav-tabs bg-green">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </li>
            {!isAuthenticated() && (
                <Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                        Sign In
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                        Sign Up
                    </Link>
                </li>
                </Fragment>
            )}
            {isAuthenticated() && (
                <li className="nav-item">
                <span className="nav-link" onClick={() => {
                    signout(()=> {
                        history.push("/")
                    })
                }}>
                   Sign Out 
                </span>
            </li>
            )}
        </ul>
    </div>
)




export default Menu;
