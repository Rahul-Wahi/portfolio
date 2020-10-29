import React, {Component} from 'react';
import {Card, CardText, CardActions, CardTitle, Cell, Grid, Tab, Tabs, Button, CardMenu, Icon} from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab:0};
    }

    changeCategory () {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background:
                    'url(https://www.flaticon.com/svg/static/icons/svg/124/124021.svg) center / cover'}}>
                     Twitter Clone
                    </CardTitle>
                    <CardText>
                        sdjkbasdhv c sckjabdcjkxn cc
                        xbjc jx ckh nbz
                        KB jnxm ,jxk. ,nmn,kjz,bbzn,b
                    </CardText>

                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#ffff'}}>
                        <Icon name='share'/>
                    </CardMenu>
                </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'black', height: '176px', background:
                        'url(https://www.flaticon.com/svg/static/icons/svg/124/124021.svg) center / cover'}}>
                    Twitter Clone
                </CardTitle>
                <CardText>
                    sdjkbasdhv c sckjabdcjkxn cc
                    xbjc jx ckh nbz
                    KB jnxm ,jxk. ,nmn,kjz,bbzn,b
                </CardText>

                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color: '#ffff'}}>
                    <Icon name='share'/>
                </CardMenu>
            </Card>
                </div>
                )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab : tabId})} ripple>
                    <Tab>Projects</Tab>
                    <Tab>Projects1</Tab>
                </Tabs>
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.changeCategory()}
                            </div>
                        </Cell>
                    </Grid>

                </section>

            </div>
        )
    };
}

export default Project;