import axios from "axios";
import {useNavigate} from "react-router-dom";
import { MAIN_API } from "../dbConnect/dbConnect";
import { useAuth } from "../contexts/authContext";

export const useAuthActions = () => {
    let {setLogin, setToken, setError} = useAuth();
    let navigate = useNavigate();
    const signupUser = async (e, email, password) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${MAIN_API}/auth/signup/new`, {email, password})
            var tokenReceived = res.data.token;
            if (res.status === 200) {
                authenticateUser(email, password)
                setToken(tokenReceived)
            }
        } catch (err) {
            setError(err.response.data.errors)
        }

    function authenticateUser() {
        setLogin(true)
        localStorage?.setItem('login', JSON.stringify({ tokenReceived }));
        navigate("/");
    }
    }

    const loginUser = async (e, email, password) => {
        e.preventDefault();
        try {
            var res = await axios.post(`${MAIN_API}/auth/login`, {email, password})
            const tokenReceived = res.data.token;
            if(res.status === 200) {
              setLogin(true)
              localStorage?.setItem('login', JSON.stringify({ tokenReceived }));
              navigate("/");
              setToken(tokenReceived);
            }
        }
        catch(err) {
            setError(err.response.data.errors)
        }
    } 

    const logoutUser = () => {
        setToken(null)
        localStorage?.removeItem('login');
        navigate('/')
    }

    return {signupUser, loginUser, logoutUser}
};