import React, { Component } from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebaseConfig"


export default class Login extends Component {
    state={
        username:"",
        password:"",
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
        signInWithEmailAndPassword(auth,this.state.username,this.state.password)
        .then((user)=>{
             console.log(user)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    handleSignup=()=>{
        createUserWithEmailAndPassword(auth,this.state.username,this.state.password)
        .then((user)=>{
             console.log(user)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render() {
        return(
          <div>
            <input type="text" placeholder='enter username' onChange={this.handleChange} name='username' value={this.state.username}/>
            <input type="text" placeholder='enter password' onChange={this.handleChange} name='password' value={this.state.password}/>
            <button onClick={this.handleClick}>Log In</button>
            <button onClick={this.handleSignup}>Sign Up</button>
         </div>  
        )
    }
}
