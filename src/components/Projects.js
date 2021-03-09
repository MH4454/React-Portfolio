import React from 'react'
import noteTakerDemo from "../assets/images/notetakerdemo.gif";
import codingQuizDemo from "../assets/images/CodingQuizdemo.gif";
import emeDemo from "../assets/images/EME-Demo.gif";
import passwordDemo from "../assets/images/password-demo.gif";
import weatherDashboardDemo from "../assets/images/Weather_Dashboard_Demo.gif";
import readmeDemo from "../assets/images/readme-demo.gif";

const Projects = () => {
    return (
        <>
        <div className="container-fluid grey mt-5 pt-5">
            <div className="row pb-5">
                <div className="col-12">
                    <h1 className="text-center project-title"  >My Projects</h1>
                </div>
            </div>
        </div>
        <div className="container-fluid grey">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                    <div>
                        <img src={noteTakerDemo} className="card-img-top" alt="Note taking web-app demo"></img>
                        <div className="card-body grey">
                            <h5 className="card-title">Note Taker</h5>
                            <p className="card-text">A web-app that allows users to take, and delete multiple notes through express</p>
                            <a href="https://github.com/MH4454/Note_Taker" target="_blank" className="btn c-s">Visit this Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                <div>
                        <img src={codingQuizDemo} className="card-img-top" alt="Coding Quiz web-app demo"></img>
                        <div className="card-body grey">
                            <h5 className="card-title">Coding Quiz</h5>
                            <p className="card-text">Challenge yourself and friends with a coding quiz, and see who has the better score.</p>
                            <a href="https://github.com/MH4454/Coding-Quiz" target="_blank" className="btn c-s">Visit this Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                <div>
                        <img src={emeDemo} className="card-img-top" alt="eme demo"></img>
                        <div className="card-body grey">
                            <h5 className="card-title">Employee Management Engine</h5>
                            <p className="card-text">Allows users to plan the team they would like to manage or work with.</p>
                            <a href="https://github.com/MH4454/Employee-Management-Engine" target="_blank" className="btn c-s">Visit this Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-12"><div>
                        <img src={readmeDemo} className="card-img-top" alt="Readme Generator demo"></img>
                        <div className="card-body grey">
                            <h5 className="card-title">Readme Generator</h5>
                            <p className="card-text">Are you tired of making readmes for all of your projects? Well look no further and try my readme generator for all your readme needs.</p>
                            <a href="https://github.com/MH4454/Readme_Generator" target="_blank" className="btn c-s">Visit this Repository</a>
                        </div>
                    </div></div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                <div>
                        <img src={weatherDashboardDemo} className="card-img-top weather" alt="Weather Dashboard demo"></img>
                        <div className="card-body grey">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">If you need to tell what weather it is like in a certain area, try my weather dashboard, so you won't be stuck in the rain</p>
                            <a href="https://github.com/MH4454/Weather_Dashboard" target="_blank" className="btn c-s">Visit this Repository</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-12"><div>
                        <img src={passwordDemo} className="card-img-top" alt="Password Generator demo"></img>
                        <div className="card-body grey">
                            <h5 className="card-title" id="technologies">Password Generator</h5>
                            <p className="card-text">Allows users to generate passwords base on the specifications that they provide.</p>
                            <a href="https://github.com/MH4454/Password-Generator" target="_blank" className="btn c-s" >Visit this Repository</a>
                        </div>
                    </div></div>
            </div>
        </div>
        </>
    )
}

export default Projects
