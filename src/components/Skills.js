import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter2 from "../assets/img/meter2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                        掌握技能
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            <br></br>
                            Tempore accusamus soluta repellat enim.
                        </p>
                        <Carousel responsive={responsive}
                        infinite={true}
                        className="skill-slider" 
                        >
                            <div className='item'>
                                <img src={meter2} alt="图"/>
                                <h5>Vue</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="图"/>
                                <h5>React</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="图"/>
                                <h5>Angular</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="图"/>
                                <h5>小程序</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
      )
}

