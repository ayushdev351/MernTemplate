import { useCookies } from "react-cookie";
import {useNavigate} from "react-router-dom";

function Logout() {
    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access-token", "");
        window.localStorage.clear();
        navigate("/auth");
    }
    
    return(
        <button onClick={logout}>
            Logout
        </button>
    )
}

export default Logout;