import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
    render() {
        const educationComp = this.props.resumeData.education.map(educationInfo =>
            <Education education={educationInfo} />
        );
        const expericeComp = this.props.resumeData.work.map(workInfo =>
            <Experience experience={workInfo} />
        );
        console.log("rahul")

        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/rahul.png'}
                                 alt="avatar"
                                 style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '1em'}}>{this.props.resumeData.name}</h2>
                        <h4>{this.props.resumeData.headline}</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>{this.props.resumeData.aboutme}</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>{this.props.resumeData.address}</p>
                        <h5>Phone</h5>
                        <p>{this.props.resumeData.phone}</p>
                        <h5>Email</h5>
                        <p>{this.props.resumeData.mail}</p>
                        <h5>Web</h5>
                        <p>{this.props.resumeData.website}</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h3>Education</h3>
                        {educationComp}
                        <hr style={{borderTop: '3px solid $e22947'}}/>
                        <h3>Experience</h3>
                        {expericeComp}
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Resume;