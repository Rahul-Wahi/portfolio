import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";

class Education extends Component {
    render() {
        const education = this.props.education;
        return (
            <Grid>
                <Cell col={8}>
                    <p style={{marginTop:'0px'}}>{education.specialization}, {education.universityName}</p>
                </Cell>
                <Cell col={4}>
                    <p className="duration" >{education.startMonth} {education.startYear} - {education.endMonth} {education.endYear}</p>
                </Cell>

            </Grid>
        )
    }
}

export default Education;