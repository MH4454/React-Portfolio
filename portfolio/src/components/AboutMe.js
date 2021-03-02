import React from 'react'
import Selfie from "../Selfie.jpg"

const AboutMe = () => {
    return (
    <div id="about-me" className="container-fluid row">
        <div class="container-fluid col-md-6">
            <div className="margin-a">
                <img src={Selfie} className="rounded-circle" alt="Selfie"></img>
            </div>
        </div>
        <div className="container-fluid col-md-6 ">
            <h2 className="margin-b">ABOUT ME</h2>
                <p className="margin-c text-center">Hello. Im Michael its nice to meet you.</p>
                <p className="margin-c">I am a full stack developer that is always looking to enhance my skills.
                    I take pride in my web applications and will make sure that my work is both functional and aesthetically pleasing.
                    I make responsive websites for all devices mobile and desktop users. I could also provide a list of your competitors advantages and weaknesses.
                    All of this is necessary to give your customers something that your competitors do not provide. I can develop Web-apps, Landing Pages, Business Websites, and up-coming skill E-commerce.
                </p>
        </div>
    </div>
    )
}

export default AboutMe
