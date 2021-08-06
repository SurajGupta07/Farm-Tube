import {Link} from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useAuthActions } from "../hooks/useAuthActions";

export const Login = () => {
    let {email, setEmail, password, setPassword} = useAuth();
    let {loginUser} = useAuthActions();
    
    return (
        <div class="login-page ">
            <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={(e) => loginUser(e, email, password)}>login</button>
                    <p class="message">Not registered?
                        <Link to="/signup">{" "}Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}