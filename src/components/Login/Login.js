import UserLoged from '../UserLoged/UserLoged';
import './styleLogin.css';
import { useAuth0 } from "@auth0/auth0-react";


function Login(){
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { logout } = useAuth0();

    return(
        <div>
            {!isAuthenticated ? (
            <button onClick={() => loginWithRedirect()}
                className='btn-login' type="submit">
                    Login
                </button>
            ):(
                <div>
                <button onClick={() => logout()}
                className='btn-login' type="submit">
                    Logout
                </button>
                </div>
            )} 
            </div>
    )

}

export default Login;