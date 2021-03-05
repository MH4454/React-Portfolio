import React from 'react'
import HTML from "../assets/images/html-logo.png"
import CSS from "../assets/images/css-logo.png"
import JS from "../assets/images/js-logo.png"
import MySql from "../assets/images/mysql-logo.png"
import MongoDB from "../assets/images/mongo-logo.jpg"
import NodeJS from "../assets/images/NodeJS-logo.jpeg"
import ReactLogo from "../assets/images/react-logo.png"
import PWA from "../assets/images/PWA-logo.png"

const Technologies = () => {
    return (
    <>
        <div  className="container-fluid pt-5 pb-5">
            <h2 className="text-center">Technologies</h2>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 text-center inline-block">
                    <img src={HTML} className="logo" alt="HTML logo"></img>
                    <p className="font-weight-bold">HTML</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center inline-block">
                    <img src={CSS} className="logo" alt="CSS logo"></img>
                    <p className="font-weight-bold">CSS</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center inline-block">
                    <img src={JS} className="logo" alt="JS logo"></img>
                    <p className="font-weight-bold">Java Script</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center inline-block">
                    <img src={NodeJS} className="logo" alt="Node JS logo"></img>
                    <p className="font-weight-bold">Node JS</p>
                </div>
            </div>
        </div>
        <div className="container-fluid pt-5 pb-5 mt-5 mb-5">
            <div classNameName="row logo">
                <div className="col-lg-3 col-md-4 col-sm-6 text-center inline-block">
                    <img src={PWA} className="logo" alt="PWA logo"></img>
                    <p className="font-weight-bold">PWA</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center inline-block">
                    <img src={ReactLogo} className="logo" alt="React logo"></img>
                    <p className="font-weight-bold">React</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center inline-block">
                    <img src={MySql} className="logo" alt="MySql logo"></img>
                    <p className="font-weight-bold">MySql</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 text-center inline-block">
                    <img src={MongoDB} className="logo" alt="MongoDb logo"></img>
                    <p className="font-weight-bold">MongoDB</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Technologies
