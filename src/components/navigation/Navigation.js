import React from "react";
import './Navigation.css';

const Navigation = ({onRouteChange , isSignedin}) => {
        if(isSignedin){
            return(
                <nav className="na">
                    <p onClick={() => onRouteChange('signout')} className="signout">
                        Sign out
                    </p>
                </nav>
            );
        }
        else{
            return(
                
                <nav className="na">
                    <p onClick={() => onRouteChange('signin')} className="signout">
                        Signin
                    </p>
                    <p onClick={() => onRouteChange('register')} className="signout">
                        Register
                    </p>
                </nav>
                
            );
        }
    
}

export default Navigation;