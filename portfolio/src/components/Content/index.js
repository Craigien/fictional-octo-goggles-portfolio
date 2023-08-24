import React from 'react';

export default function Content() {
    return (
        // Main container for projects
       <section id="project-container">
        <h2>Projects</h2>
        <section id="projects">
            {/* Holds larger first project */}
            <div id="first-project">
                <h4>Music Review Web Application</h4>
                <p id="first-project-p">
                    A music review web application that allows the user to add reviews to their favorite albums from various artists.  Users can also review each other's posts.
                    <span className="page-links">Click the image to view</span>
                </p>
                <a href="https://agile-springs-19422-e0a9573c7a30.herokuapp.com/">
                    <img id="first-project-img" src={require("../../images/Project-02-Screenshot.png")} alt="Music Review Web Application" />
                </a>
            </div>

            {/* Horiseon webpage - using as placeholder */}
            <div id="other-projects-container">
            <div className="other-projects">
                <h4>BlackJack Game</h4>
                <p className="other-projects-p">
                    A BlackJack card game application using third party APIs for card deck and user location.  The user can determine how much money they wish to bet and play against the dealer in blackjack.
                    <span className="page-links">Click the image to view</span>
                </p>
                    <a href="https://craigien.github.io/super-duper-winner-project-01/">
                        <img className="other-projects-img" src={require("../../images/Project-01-Screenshot.png")} alt="BlackJack Game" />
                    </a>
                </div>

            {/* Placeholder project */}
            <div className="other-projects">
                <h4>Car Dealership</h4>
                <p className="other-projects-p">
                    Car dealership website that allows the user to view the vehicle inventory and create appointments to test drive vehicles.
                    <span className="page-links">Click the image to view</span>
                </p>
                <a href="https://radiant-fortress-44546-0acbf05b7546.herokuapp.com/">
                    <img className="other-projects-img" src={require("../../images/Project-03-Screenshot.png")} alt="Car Dealership" />
                </a>
            </div>

            {/* Random password generator - using as placeholder */}
            <div className="other-projects">
                <h4>Weather Dashboard</h4>
                <p className="other-projects-p">
                    A weather dashboard that allows the user to search for a city name and view the weather forecast for that city.  The current weather and 5-day forecast will be displayed.
                    <span className="page-links">Click the image to view</span>
                </p>
                <a href="https://craigien.github.io/urban-waddle-module-06-challenge/">
                    <img className="other-projects-img" src={require("../../images/Weather-Dashboard-Screenshot.png")} alt="Weather Dashboard" />
                </a>
            </div>

            {/* Placeholder project */}
            <div className="other-projects">
                <h4>Tech Blog</h4>
                <p className="other-projects-p">
                    Tech blog web application that allows users to add posts and comments.  Users can view other's posts can add their own comments to them.
                    <span className="page-links">Click the image to view</span>
                </p>
                <a href="https://dry-mountain-43107-252c46a3f548.herokuapp.com/">
                    <img className="other-projects-img" src={require("../../images/Tech-Blog-Screenshot.png")} alt="Tech Blog" />
                </a>
            </div>
            </div>
        </section>
       </section>
    );
}