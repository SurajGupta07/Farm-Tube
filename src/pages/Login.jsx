import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <div class="login-page ">
            <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p class="message">Not registered?
                        <Link to="/signup">{" "}Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}