import React from 'react'
import Linkedin from "../assets/images/linkedin-logo.png"
import GMail from "../assets/images/gmailcon.png";
import GitHub from "../assets/images/github-icon.png";

const Contact = () => {
    return (
        <>
        <div className="container-fluid grey pb-5 pt-5" id="contact">
            <div className="row">
                <div className="col text-center">
                    <h2>Contact Me</h2>
                </div>
            </div>
        </div>   
        <div className="container-fluid grey pt-5 pb-5">
            <div className="row">
                <div className="col d-flex justify-content-around">
                    <a href="https://www.linkedin.com/in/michael-hernandez-303a8ba3" target="_blank">
                        <img src={Linkedin} className="linkedin-logo" alt="Linkedin logo"></img>
                    </a>
                </div>
                <div className="col d-flex justify-content-around">
                    <a href="https://github.com/MH4454" target="_blank">
                        <img src={GitHub} className="github-logo" alt="Github logo"></img>
                    </a>
                </div>
                <div className="col d-flex justify-content-around">
                    <a href="mailto:MH4454@gmail.com" target="_blank">
                        <img src={GMail} className="gmail-logo" alt="Gmail logo"></img>
                    </a>
                </div>
            </div>
        </div>   
        </>
    )
}

export default Contact
