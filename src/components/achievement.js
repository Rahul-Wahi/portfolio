import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Achievement extends Component {
    render() {
        const achievementsList = this.props.achievements.map(achievement =>
            <li style={{marginTop:'0px'}}>{achievement.description}</li>
        )
        const achievementsTime = this.props.achievements.map(achievement =>
            <p className="duration" style={{margin:'0'}}>{achievement.year}</p>
        )
        return(
            <Grid>
                <Cell col={9}>
                    {achievementsList}
                </Cell>


                <Cell col={3}>
                    {achievementsTime}
                </Cell>
            </Grid>
        )
    }
}

export default Achievement;