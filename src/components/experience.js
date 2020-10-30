import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        const experience = this.props.experience;
        return(
            <Grid>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{experience.role}, {experience.companyName}, {experience.country}</h4>
                    <h6 style={{marginTop:'0px', marginLeft:'1em'}}><span>Technologies:</span> {experience.technologies}</h6>
                    <p style={{marginTop:'0px', marginLeft:'2em'}}>{experience.description}</p>
                </Cell>

                <Cell col={4}>
                    <p>{experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear}</p>
                </Cell>

            </Grid>
        )
    }
}

export default Experience;