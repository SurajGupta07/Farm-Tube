import {Link} from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useAuthActions } from "../hooks/useAuthActions";

export const Signup = () => {
    let {email, setEmail, password, setPassword} = useAuth();
    let {signupUser} = useAuthActions();  
    return (
        <div>
            <div class="login-page ">
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={(e) => signupUser(e, email, password)}>Sign Up</button>
                        <p class="message">Already a member?
                            <Link to="/login">{" "}Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}