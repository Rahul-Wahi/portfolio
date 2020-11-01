import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

class LandingPage extends Component {
    render() {
        const socialLinkComp = this.props.resumeData.socialLinks.map(socialLink =>
        <a href={socialLink.url} target="_blank">
            <i className={socialLink.className} aria-hidden="true" />
        </a>
        );
        const skills = this.props.resumeData.skillsHomePage.join(" | ");

        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={this.props.resumeData.profileImage}
                            className='avatar-img'
                            alt="avatar"
                        />
                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr />
                            <p>{skills}</p>
                            <div className="social-links">
                                {socialLinkComp}
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default LandingPage;