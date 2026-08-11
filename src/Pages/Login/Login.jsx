import React ,{useState ,useEffect} from 'react'
import "./Login.css"
import Logo from "../../assets/Image/Netflix_Logo_PMS.png";
function Login() {
const [signstate, setsignstate] = useState("Sign up")

  return (
    <div className="login">
      <img src={Logo} alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
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
