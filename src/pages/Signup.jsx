import {Link} from "react-router-dom";

export const Signup = () => {
    return (
        <div>
            <div class="login-page ">
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>Sign Up</button>
                        <p class="message">Already a member?
                            <Link to="/login">{" "}Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}