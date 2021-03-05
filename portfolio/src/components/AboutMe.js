import React from 'react'
import Selfie from "../assets/images/Selfie.jpg"

const AboutMe = () => {
    return (
    <div className="container-fluid mt-5 mb-5" >
        <div className="row mt-5 mb-5">
            <div className="col-sm-12 col-lg-6">
            
             <img src={Selfie} className="rounded-circle mx-auto d-block" alt="Selfie"></img>
                
            </div>
            <div className="col-sm-12 col-lg-6">
            <h2 className="title-margin" >ABOUT ME</h2>
                <p className="p-margin text-center">Hello. Im Michael its nice to meet you.</p>
                <p className="p-margin" id="projects">I am a full stack developer that is always looking to enhance my skills.
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
