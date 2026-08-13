import React ,{useState ,useEffect} from 'react'
import "./Login.css"
import Logo from "../../assets/Image/Netflix_Logo_PMS.png";
import { login ,signup} from '../../firebase';
import CircularProgress from '@mui/material/CircularProgress';

function Login() {
const [signstate, setsignstate] = useState("Sign up")
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [password,setpassword]=useState("");
const [loading , setloading]=useState(false)
const user_auth = async (e)=> {
  e.preventDefault();
  setloading(true)
  if (signstate==="Sign in") {
    await login(email,password);
  }else{
    await signup(name,email,password)
  }
  setloading(false)
}


  return (
    loading?<div className='login-spinner'><CircularProgress color="secondary" aria-label="Loading…" /></div>:
    <div className="login">
      
      <img src={Logo} alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign up" ? (
            <input
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <button onClick={user_auth} type="submit">
            {signstate}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === "Sign in" ? (
            <p>
              New To Netflix?
              <span
                onClick={() => {
                  setsignstate("Sign up");
                }}
              >
                sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setsignstate("Sign in");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login
