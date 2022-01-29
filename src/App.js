import {onAuthStateChanged} from "firebase/auth"
import React from "react"
import {auth} from "./components/firebaseConfig"
import Home from "./components/Home"
import Login from "./components/Login"
class App extends React.Component{
  state={
    authUser:""
  }
  componentDidMount(){
    onAuthStateChanged(auth,(currentUser)=>{
      this.setState({
        authUser:currentUser
      })
    })
  }
  render(){
  return this.state.authUser?<Home/>:<Login/>
}
}
export default App
