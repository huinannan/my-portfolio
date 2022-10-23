import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
            title: "项目名称",
            desc: "项目描述",
            imgUrl: projImg1,
        },
        {
            title: "项目名称",
            desc: "项目描述",
            imgUrl: projImg1,
        },
        {
            title: "项目名称",
            desc: "项目描述",
            imgUrl: projImg1,
        }
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>项目展示</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Tab.Container id="projects-tabs" 
                    defaultActiveKey="first">
                        <Nav variant="pills" 
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Vue</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">React</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Angular</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">小程序</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp">
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                               <ProjectCard 
                                               key={index}
                                               {...project}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                               <ProjectCard 
                                               key={index}
                                               {...project}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                               <ProjectCard 
                                               key={index}
                                               {...project}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                               <ProjectCard 
                                               key={index}
                                               {...project}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="img"/>
        </section>
    )
} 