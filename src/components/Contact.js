import { response } from "express";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImag from '../assets/img/contact-img.svg'
export const Contact = () => {
    const formInputDetails = {
        firstName: '',
        lastName: '',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails, setFormDetails] = useState(formInputDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) =>{
            e.preventDefault();
            setButtonText('发送中...');
            let reponse = await fetch ("http://localhost:5000/contact",{
                method: "POST",
                headers: {
                    "Content-Type": "Application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
            setButtonText("发送");
            let result = response.json();
            setFormDetails(formInputDetails);
            if (result.code === 200) {
                setStatus({success:true, message:'信息发送成功'});
            }else{
                setStatus({success:false, message:'发送失败，请稍后重试'})
            }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImag} alt="图片"/>
                    </Col>
                    <Col md={6}>
                        <h2>点击联系我</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" 
                                    value={formDetails.firstName} 
                                    placeholder="名字"
                                    onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" 
                                    value={formDetails.lastName} 
                                    placeholder="姓氏"
                                    onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" 
                                    value={formDetails.email} 
                                    placeholder="邮箱"
                                    onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" 
                                    value={formDetails.phone} 
                                    placeholder="手机号码"
                                    onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                <textarea row="6" value={formDetails.message} 
                                placeholder="" 
                                onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type="submit">
                                    <span>{buttonText}</span>
                                </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}