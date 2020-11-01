import React from 'react';
import {Switch, Route} from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Project from "./projects";
import Contact from "./contact";
import Resume from "./resume";

const Main = ({resumeData}) => (
    <Switch>
        <Route exact path="/portfolio" render={(props) => (
            <LandingPage resumeData={resumeData}/>
        )}/>
        <Route exact path="/portfolio/aboutme" component={About}/>

        <Route exact path="/portfolio/projects" render={(props) => (
            <Project resumeData={resumeData}/>
        )}/>
        <Route exact path="/portfolio/resume" render={(props) => (
            <Resume resumeData={resumeData}/>
        )}/>

            <Route exact path="/portfolio/contact" render={(props) => (
                <Contact resumeData={resumeData}/>
            )}/>

    </Switch>
)

export default Main;