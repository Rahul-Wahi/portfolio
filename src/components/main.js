import React from 'react';
import {Switch, Route} from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Project from "./projects";
import Contact from "./contact";
import Resume from "./resume";
import { Redirect } from 'react-router-dom';

const Main = ({resumeData}) => (
    <Switch>
        <Route exact path="/" render={(props) => (
            <LandingPage resumeData={resumeData}/>
        )}/>
        <Route exact path="/aboutme" component={About}/>

        <Route exact path="/projects" render={(props) => (
            <Project resumeData={resumeData}/>
        )}/>
        <Route exact path="/resume" render={(props) => (
            <Resume resumeData={resumeData}/>
        )}/>

            <Route exact path="/contact" render={(props) => (
                <Contact resumeData={resumeData}/>
            )}/>

        <Route render={() => <Redirect to={{pathname: "/"}} />} />

    </Switch>
)

export default Main;