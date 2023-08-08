import React from "react";
import './Logo.css';
import Tilt from 'react-parallax-tilt';
import brain from'./brain.png';

const Logo = () => {
    return(
        <div className="logo">
            <Tilt >
                <div className="logo2 ba bw2 shadow-5"  style={{ height: '150px',width: '150px'}}>
                    <img alt="img" src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;