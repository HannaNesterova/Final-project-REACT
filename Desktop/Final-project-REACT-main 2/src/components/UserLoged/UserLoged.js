import { useAuth0 } from "@auth0/auth0-react";

function UserLoged(){
    const {user, isAuthenticated } = useAuth0();
    return(
        <div>
            {isAuthenticated && (
                <div>   
                    <p>Hello "{user.nickname}"</p>
                </div>
            )}

        </div>
    )
}

export default UserLoged;