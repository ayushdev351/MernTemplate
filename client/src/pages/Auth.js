import Register from "../components/Register";
import Login from "../components/Login";

function Auth(){
    return (
        <div className="auth">
            <Register/>
            <Login/>
        </div>
    )
}

export default Auth;