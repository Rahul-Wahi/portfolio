import React, {Component} from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} >
                        <h2>{this.props.resumeData.name}</h2>
                        <img src={this.props.resumeData.profileImage}
                        alt="avatar"
                        style={{height: '250px'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em', textAlign:'justify'}}>
                            {this.props.resumeData.aboutme}
                        </p>
                    </Cell>
                    <Cell col={6}>

                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontFamily: 'Anton', fontSize:'25px'}}>
                                        <i className="fa fa-phone" aria-hidden="true"/>
                                        {this.props.resumeData.phone}
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontFamily: 'Anton', fontSize:'25px'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        {this.props.resumeData.mail}
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Contact;