import React, {Component} from 'react';
import {Card, CardText, CardActions, CardTitle, Cell, Grid, Tab, Tabs, Button, CardMenu, Icon} from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    handleClick(url) {
        window.open(url);
    }

    changeCategory() {

        if (this.state.activeTab === 0) {
            const projects = this.props.resumeData.projects.map(project =>
                <div className="project">
                    <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                        <h3>{project.name}</h3>
                        <CardTitle style={{
                            color: 'black', height: '200px', background:
                                'url(' + project.img + ') center / cover'
                        }}>
                        </CardTitle>
                        <CardText><span>Technologies: </span>{project.technologies}
                            {project.description.map(descriptions =>
                                <li style={{
                                    marginTop: '0px',
                                    marginLeft: '0',
                                    fontSize: '15px',
                                    textAlign: 'justify'
                                }}>{descriptions}</li>
                            )}</CardText>
                        <CardActions border>
                            {project.github.length > 0 &&
                            <Button onClick={() => this.handleClick(project.github[0])} colored>Github</Button>

                            }

                        </CardActions>
                        <CardMenu style={{color: '#ffff'}}>
                            <Icon name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            );
            return (
                <div className="projects-grid">
                    {projects}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Projects</Tab>
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