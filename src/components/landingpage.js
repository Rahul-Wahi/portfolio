import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={process.env.PUBLIC_URL + '/rahul.png'}
                            className='avatar-img'
                            alt="avatar"
                        />
                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr />
                            <p>HTML/CSS | React | Angular | Java | Oracle</p>
                            <div className="social-links">
                                <a href="https://github.com/rahul-wahi" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="https://github.com/rahul-wahi" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default LandingPage;