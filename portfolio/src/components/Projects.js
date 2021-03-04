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
        <div className="container-fluid grey">
            <div className="row pb-5">
                <div className="col-12">
                    <h1 className="text-center project-title" id="projects" >My Projects</h1>
                </div>
            </div>
        </div>
        <div className="container-fluid grey">
            <div className="row">
                <div className="container col-12 col-lg-4 col-md-6 col-sm-12">
                    <div>
                        <img src={noteTakerDemo} class="card-img-top" alt="Note taking web-app demo"></img>
                        <div class="card-body grey">
                            <h5 class="card-title">Note Taker</h5>
                            <p class="card-text">A web-app that allows users to take, and delete multiple notes through express</p>
                            <a href="https://github.com/MH4454/Note_Taker" target="_blank" class="btn c-s">Visit this Repository</a>
                        </div>
                    </div>
                </div>
                <div className="container col-12 col-lg-4 col-md-6 col-sm-12">
                <div>
                        <img src={codingQuizDemo} class="card-img-top" alt="Coding Quiz web-app demo"></img>
                        <div class="card-body grey">
                            <h5 class="card-title">Coding Quiz</h5>
                            <p class="card-text">Challenge yourself and friends with a coding quiz, and see who has the better score.</p>
                            <a href="https://github.com/MH4454/Coding-Quiz" target="_blank" class="btn c-s">Visit this Repository</a>
                        </div>
                    </div>
                </div>
                <div className="container col-12 col-lg-4 col-md-6 col-sm-12">
                <div>
                        <img src={emeDemo} class="card-img-top" alt="eme demo"></img>
                        <div class="card-body grey">
                            <h5 class="card-title">Employee Management Engine</h5>
                            <p class="card-text">Allows users to plan the team they would like to manage or work with.</p>
                            <a href="https://github.com/MH4454/Employee-Management-Engine" target="_blank" class="btn c-s">Visit this Repository</a>
                        </div>
                    </div>
                </div>
                <div className="container col-12 col-lg-4 col-md-6 col-sm-12"><div>
                        <img src={readmeDemo} class="card-img-top" alt="Readme Generator demo"></img>
                        <div class="card-body grey">
                            <h5 class="card-title">Readme Generator</h5>
                            <p class="card-text">Are you tired of making readmes for all of your projects? Well look no further and try my readme generator for all your readme needs.</p>
                            <a href="https://github.com/MH4454/Readme_Generator" target="_blank" class="btn c-s">Visit this Repository</a>
                        </div>
                    </div></div>
                <div className="container col-12 col-lg-4 col-md-6 col-sm-12">
                <div>
                        <img src={weatherDashboardDemo} class="card-img-top" alt="Weather Dashboard demo"></img>
                        <div class="card-body grey">
                            <h5 class="card-title">Weather Dashboard</h5>
                            <p class="card-text">If you need to tell what weather it is like in a certain area, try my weather dashboard, so you won't be stuck in the rain</p>
                            <a href="https://github.com/MH4454/Weather_Dashboard" target="_blank" class="btn c-s">Visit this Repository</a>
                        </div>
                    </div>
                </div>
                <div className="container col-12 col-lg-4 col-md-6 col-sm-12"><div>
                        <img src={passwordDemo} class="card-img-top" alt="Password Generator demo"></img>
                        <div class="card-body grey">
                            <h5 class="card-title">Password Generator</h5>
                            <p class="card-text">Allows users to generate passwords base on the specifications that they provide.</p>
                            <a href="https://github.com/MH4454/Password-Generator" target="_blank" class="btn c-s">Visit this Repository</a>
                        </div>
                    </div></div>
            </div>
        </div>
        </>
    )
}

export default Projects
