import React from 'react';

export default function Content() {
    return (
        // Main container for projects
       <section id="project-container">
        <h2>Projects</h2>
        <section id="projects">
            {/* Holds larger first project */}
            <div id="first-project">
                <h4>Coding Bootcamp Study Guide</h4>
                <p id="first-project-p">
                    This study guide is for the coding bootcamp that I am enrolled in.  It contains useful items that I have learned so far within the bootcamp.
                    <span className="page-links">Click the image to view</span>
                </p>
                <a href="https://craigien.github.io/prework-study-guide/">
                    <img id="first-project-img" src={require("../../images/Coding-Bootcamp-Study-Guide.png")} alt="Coding bootcamp study guide" />
                </a>
            </div>

            {/* Horiseon webpage - using as placeholder */}
            <div id="other-projects-container">
            <div className="other-projects">
                <h4>Horiseon Marketing Management</h4>
                <p className="other-projects-p">
                    This is a webpage for a fictitious marketing management company named Horiseon.  The webpage contains information about the services that Horiseon offers.
                    <span className="page-links">Click the image to view</span>
                </p>
                    <a href="https://craigien.github.io/scaling-fishstick-module-01-challenge/">
                        <img className="other-projects-img" src={require("../../images/Horiseon-Marketing-Management.png")} alt="Horiseon marketing management" />
                    </a>
                </div>

            {/* Placeholder project */}
            <div className="other-projects">
                <h4>Used Car Dealership</h4>
                <p className="other-projects-p">
                    This website is for a fictitious used car dealership specializing in the sale of exotic vehicles.
                    <span className="page-links">Click the image to view</span>
                    <span className="image-credit">Image credit - Peter Broomfield</span>
                </p>
                <a href="#">
                    <img className="other-projects-img" src={require("../../images/Car-Dealership.jpg")} alt="Used car dealership" />.
                </a>
            </div>

            {/* Random password generator - using as placeholder */}
            <div className="other-projects">
                <h4>Password Generator</h4>
                <p className="other-projects-p">
                    This is a random password generator application.  
                    It allows the user to generate a password based of off specified criteria such as number of characters and character types.
                    <span className="page-links">Click the image to view</span>
                </p>
                <a href="https://craigien.github.io/urban-tribble-module-03-challenge/">
                    <img className="other-projects-img" src={require("../../images/Password-Generator.png")} alt="Password generator application" />
                </a>
            </div>

            {/* Placeholder project */}
            <div className="other-projects">
                <h4>Music History Webpage</h4>
                <p className="other-projects-p">
                    This is a website dedicated to music history.  The website content specializes in the history of rock and roll.
                    <span className="page-links">Click the image to view</span>
                    <span className="image-credit">Image credit - Mink Mingle</span>
                </p>
                <a href="#">
                    <img className="other-projects-img" src={require("../../images/Music-History.jpg")} alt="Turntable with record" />
                </a>
            </div>
            </div>
        </section>
       </section>
    );
}