import { useState, useEffect } from "react";
import { Col, Container,Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const toRotate = [ "前端开发", "web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300- Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        // 输入和删除效果
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i= loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)  
        }

        if (!isDeleting && updatedText === fullText) {
            setDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" 
        id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                        <span>Welcome to my Portfolio</span>
                        </span>
                        <h1>
                            {`Hi,I'm Tang Ruijie `}
                            <span className="wrap">
                            {text}
                            </span>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil sunt voluptatum. Recusandae nihil similique magnam tempore distinctio nobis illum natus impedit ut quod? Tempore accusamus soluta repellat enim.
                        </p>
                        <button onClick={() => console.log('connect')}>
                            联系我吧！
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="25" 
                            height="25" 
                            fill="currentColor" 
                            class="bi bi-arrow-right-circle" 
                            viewBox="0 0 16 16"
                            >
                                <path fill-rule="evenodd" 
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="顶部图片"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}