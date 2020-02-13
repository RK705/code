import React, {useState } from "react";
import Auth from '../networkaccess/auth'
export default (props)=>{
    const [user,setuser]=useState('')
    const [pass,setpass]=useState('')
    const [isloggedin,setloggedin]=useState(false)
    const [showdat,setshowDat]=useState(null)
    const onusernamechanged=(event)=>setuser(event.target.value)
    const onpasschanged=(event)=>setpass(event.target.value)
    const loginsetstate=(event)=>{
            event.preventDefault()
            Auth.login({user,pass})
                .then((res)=>{
                    console.log(res)
                    props.settoken(res.data.token)
                    setloggedin(true)
                })
                .catch(()=>{
                    setshowDat("Wrong Username or Password")
                })
    }
    
    return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input onChange={onusernamechanged} type="text" className="form-control" placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={onpasschanged} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={loginsetstate} type="submit" className="btn btn-primary btn-block">Submit</button>
                {
                    isloggedin?<p>Sign in Successful</p>:<p>{showdat}</p>
                } 
            </form>
        );
    
}
