import React from 'react';
import {Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Project from "./projects";
import Contact from "./contact";
import Resume from "./resume";
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
)

export default Main;