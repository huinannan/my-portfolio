import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, desc, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt="img" />
                <div className="proj-text">
                <h4>{title}</h4>
                <span>{desc}</span>
            </div>
            </div>
           
        </Col>
    )
}