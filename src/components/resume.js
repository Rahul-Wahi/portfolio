import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Achievement from "./achievement";

class Resume extends Component {
    render() {
        const educationComp = this.props.resumeData.education.map(educationInfo =>
            <Education education={educationInfo} />
        );
        const expericeComp = this.props.resumeData.work.map(workInfo =>
            <Experience experience={workInfo} />
        );

        const achievementComp = <Achievement achievements= {this.props.resumeData.achievements} />;


        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={this.props.resumeData.profileImage}
                                 alt="avatar"
                                 style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '1em'}}>{this.props.resumeData.name}</h2>
                        <h4>{this.props.resumeData.headline}</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>{this.props.resumeData.aboutme}</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>{this.props.resumeData.phone}</p>
                        <h5>Email</h5>
                        <p>{this.props.resumeData.mail}</p>
                        <h5>Github</h5>
                        <a href={this.props.resumeData.github} target="_blank">{this.props.resumeData.github}</a>
                        <h5>Linkedin</h5>
                        <a href={this.props.resumeData.github} target="_blank">{this.props.resumeData.github}</a>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h3>Education</h3>
                        {educationComp}
                        <hr style={{borderTop: '3px solid $e22947'}}/>
                        <h3>Experience</h3>
                        {expericeComp}
                        <hr style={{borderTop: '3px solid $e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="Java"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />
                        <Skills
                            skill="Spring"
                            progress={75}
                        />
                        <Skills
                            skill="React"
                            progress={80}
                        />
                        <hr style={{borderTop: '3px solid $e22947'}}/>
                        <h2>Achievements</h2>
                        {achievementComp}
                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Resume;