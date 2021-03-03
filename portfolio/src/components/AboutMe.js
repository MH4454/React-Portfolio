import React from 'react'
import Selfie from "../Selfie.jpg"

const AboutMe = () => {
    return (
    <div id="about-me" className="container-fluid">
        <div className="row">
            <div className="col-sm-6 my-col">
                <div className="selfie-margin">
                    <img src={Selfie} className="rounded-circle" alt="Selfie"></img>
                </div>
            </div>
            <div className="col-sm-6">
            <h2 className="title-margin">ABOUT ME</h2>
                <p className="p-margin text-center">Hello. Im Michael its nice to meet you.</p>
                <p className="p-margin">I am a full stack developer that is always looking to enhance my skills.
                    I take pride in my web applications and will make sure that my work is both functional and aesthetically pleasing. I can develop Web-apps, Landing Pages, Business Websites, and up-coming skill E-commerce.
                    I make responsive websites for all devices mobile and desktop users. I could also provide a list of your competitors advantages and weaknesses.
                    All of this is necessary to give your customers something that your competitors do not provide.
                </p>
            </div>
        </div>
    </div>
    )
}

export default AboutMe
