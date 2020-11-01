import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main'
import {Link} from "react-router-dom";
import resumeData from "./resumeData";

function App() {
  return (

      <div   className="demo-big-content" >
        <Layout fixedHeader>
            <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">{resumeData.name}</Link>} scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer  title={<Link style={{textDecoration:'none', color:'grey'}} to="/">{resumeData.name}</Link>}>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>

            <Content>
                <div className="page-content" />
                <Main resumeData={resumeData}/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
