import { useState} from "react"
import axios from "axios"

import Form from "./Form";

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async(e) => {
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/auth/register", {
                username,
                password,
            })
            alert("Registration Done! Now Login");
        } catch(err){
            console.error(err);
        }
    };

    return(
        <div className="auth-container">
            <Form 
            username = {username}
            setUsername= {setUsername}
            password = {password}
            setPassword = {setPassword}
            submitHandler = {submitHandler}
            type = "Register"
        />
        </div>
    )
}

export default Register;