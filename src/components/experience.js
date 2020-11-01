import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        const experience = this.props.experience;
        const description = experience.description.map(workDescription =>
            <li style={{marginTop:'0px', marginLeft:'1em', fontSize:'15px', textAlign:'justify'}}><span>{workDescription}</span></li>
        );
        return(
            <Grid>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{experience.role}, {experience.companyName}, {experience.country}</h4>
                    <h6 style={{marginTop:'0px', marginLeft:'1em'}}><span>Technologies:</span> {experience.technologies}</h6>
                </Cell>


                <Cell col={4}>
                    <p className="duration">{experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear}</p>
                </Cell>

                {description}

            </Grid>
        )
    }
}

export default Experience;