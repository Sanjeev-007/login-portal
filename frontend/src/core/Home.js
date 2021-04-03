
import React from 'react'
import { API } from '../backend';
import "../styles.css"
import Base from "./Base.js"

export default function Home(){
   console.log("API is", API);
    return (
        <Base >
           <h1>Hello</h1>
        </Base>
    )
}