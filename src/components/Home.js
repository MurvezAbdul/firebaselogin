import React, { Component } from 'react';
import {signOut} from "firebase/auth"
import { auth } from "./firebaseConfig"
export default class Home extends Component {
    signOut=()=>{
        console.log("signing out")
        signOut(auth)
    }
  render() {
    return( 
       <div>
           <h1>Welcome{}</h1>
           <button onClick={this.signOut}>Signout</button>
       </div>
    )}
}
