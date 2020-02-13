import React,{useState} from "react";
import Auth from '../networkaccess/auth'
const SignUp=()=>{
{       
    const [user,setuser]=useState('')
    const [pass,setpass]=useState('')
    const [name,setname]=useState('')
    const setState=(event,counterFunction)=>counterFunction(event.target.value)
    const [pager,setpager]=useState(null)
    const onSubmit=(e)=>{
        e.preventDefault()
        Auth.register({user,name,pass})
            .then((res)=>{
                setpager("Registration Successfull")
                console.log(res)
            })
            .catch(()=>{
                setpager("Registration Failed")
            })
    }
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input onChange={(e)=>setState(e,setname)} type="text" className="form-control" placeholder="Name" />
                </div>


                <div className="form-group">
                    <label>Username</label>
                    <input onChange={(e)=>setState(e,setuser)} type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e)=>setState(e,setpass)} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={onSubmit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="text-right">
                   {pager}
                </p>
            </form>
        );
    }
}
export default SignUp