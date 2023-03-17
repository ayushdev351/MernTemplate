import {useState} from "react"
import axios from "axios";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

import Form from "./Form";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const submitHandler = async(e) => {
        e.preventDefault();
        // In registration we just added user to the db, thus no response data was sent.
        // In Login the user token & userId are send thus we need to grab it => and set user session
        try{
            const response = await axios.post("http://localhost:5000/auth/login", {
                username,
                password
            })

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
    }

    return(
        <div className="auth-container">
            <Form 
            username = {username}
            setUsername= {setUsername}
            password = {password}
            setPassword = {setPassword}
            submitHandler = {submitHandler}
            type = "Login"
        />
        </div>
    )
}

export default Login;