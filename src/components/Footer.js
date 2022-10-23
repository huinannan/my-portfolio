import { Container, Row, Col } from "react-bootstrap";
import Logo from '../assets/img/Logo.png';
import NavIcon1 from '../assets/img/weixin.svg';
import NavIcon2 from '../assets/img/sina.svg';
import NavIcon3 from '../assets/img/github.svg';

export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={Logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div3 className="social-icon">
                <a href="#"><img src={NavIcon1} alt="Icon" /></a>
                <a href="#"><img src={NavIcon2} alt="Icon" /></a>
                <a href="#"><img src={NavIcon3} alt="Icon" /></a>
              </div3>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }