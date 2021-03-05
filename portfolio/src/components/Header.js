import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Full Stack Developer</h1>
                <Typed
                className="typed-text"
                strings={["Web Design", "Web Development", "Database Storage", "Framework", "Testing"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#contact" className="btn-main-offer" id="aboutme">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header
