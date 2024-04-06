import React from 'react';
import Logo from '../../archives/imgs/LogoHerdeiros.png';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import '../../archives/css/index.css'
import SignUpIcon from '../../archives/imgs/signupIcon.png'
import LogInIcon from '../../archives/imgs/loginIcon.png'
import GalhoDecoratio from '../../archives/imgs/galhosDecorationImage.png'
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container className='d-flex justify-content-center ' >
                <nav className='d-flex'>
                    <a href="/">
                        <Image src={Logo} style={{ width: '100px', height: '100px' }} alt='Herdeiros da Aurora' className='logo img-fluid' />
                    </a>
                    <Button className='btnIndex' onClick={() => navigate('/download')}>Download</Button>
                </nav>
            </Container>
            <Container className='d-flex justify-content-center fex-column'>
                <Container className='d-flex justify-content-center flex-column mainContainer '>
                    <Image src={GalhoDecoratio} fluid className='decoration galho1' />
                    <h1>Herdeiros da Aurora</h1>
                    <p>
                        Em um reino distante chamado Lumina, a paz e a prosperidade reinaram por séculos sob a luz da Aurora Eterna, um artefato mágico de imenso poder. No entanto, a Aurora Eterna desapareceu misteriosamente, levando o reino à beira do caos.

                        Quatro heróis de diferentes caminhos da vida são escolhidos pelo destino para embarcar em uma jornada épica. Eles são:

                        1. O Paladino: Um nobre cavaleiro de Lumina, jurou proteger o reino a todo custo.
                        2. O Mago: Um estudioso da magia antiga, busca o conhecimento para restaurar a Aurora Eterna.
                        3. O Padre: Um curandeiro devoto, acredita que a fé e a compaixão podem superar qualquer adversidade.
                        4. O Assassino: Um solitário de origens misteriosas, possui habilidades letais e um passado enigmático.

                        Juntos, eles devem enfrentar inúmeros desafios, resolver enigmas antigos e combater criaturas temíveis em sua busca para encontrar a Aurora Eterna e restaurar a luz a Lumina.

                        Ao longo do caminho, eles encontrarão aliados e inimigos, experimentarão triunfos e tragédias, e descobrirão não apenas os segredos do reino, mas também os deles próprios.
                    </p>
                    <Image src={GalhoDecoratio} fluid className='decoration galho2' />
                    <Container>
                        <Row className='d-flex gap-5'>
                            <Col className='d-flex justfy-content-center'>
                                <Button variant='primary' className='mainContainerBtn' onClick={() => navigate('/signup')}> <Image src={SignUpIcon} fluid />Cadastrar</Button>
                            </Col>
                            <Col className='d-flex justfy-content-center'>
                                <Button variant='primary' className='mainContainerBtn' onClick={() => navigate('/login')}> <Image src={LogInIcon} fluid />Entrar</Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default Index;
