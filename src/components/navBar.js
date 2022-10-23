import { useState,useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import Logo from '../assets/img/Logo.png';
import NavIcon1 from '../assets/img/weixin.svg';
import NavIcon2 from '../assets/img/sina.svg';
import NavIcon3 from '../assets/img/github.svg';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // 检查是否滚动
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" 
        className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* logo */}
                    <img src={Logo} 
                    alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" 
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('home')}>
                            首页
                        </Nav.Link>
                        <Nav.Link href="#skills" 
                        className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('skills')}>
                            掌握技能
                        </Nav.Link>
                        <Nav.Link href="#projects" 
                        className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('projects')}>
                            项目展示
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={NavIcon1} alt=""/></a>
                            <a href="#"><img src={NavIcon2} alt=""/></a>
                            <a href="#"><img src={NavIcon3} alt=""/></a>
                        </div>
                        <button className="vvd" 
                        onClick={() => console.log('connect')}>
                            <span>点击联系</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}