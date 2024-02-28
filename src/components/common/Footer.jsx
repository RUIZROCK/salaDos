import {Container,Row,Col}  from 'react-bootstrap'
import logo1 from '../../assets/logo1.png'

const Footer = () => {
    return (
        <footer className="text-light p-2">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={2}><img className='logo' src={logo1} alt="Logo" /></Col>
                    <Col xs={{ offset: 1, span: 5 }} className='align-items-center'>
                         <p> <i className="bi bi-geo-alt"></i> Dirección : Gral Paz 545 - San Miguel de Tucumán </p>
                    </Col>
                    <Col xs={{ offset: 1, span: 3 }}>
                        <p>Redes Sociales <i className="bi bi-instagram"></i> <i className="bi bi-facebook"></i> <i className="bi bi-twitter-x"></i> </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;