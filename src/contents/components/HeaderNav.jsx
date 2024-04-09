import Logo from '../archives/imgs/LogoHerdeiros.png'
import { Container, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function HeaderNav() {
    const navigate = useNavigate()

    return (
        <header>
            <Container className='d-flex justify-content-center ' >
                <nav className='d-flex'>
                    <a href="/">
                        <Image src={Logo} style={{ width: '100px', height: '100px' }} alt='Herdeiros da Aurora' className='logo img-fluid' />
                    </a>
                    <Button className='btnIndex' onClick={() => navigate('/download')}>Download</Button>
                </nav>
            </Container>
        </header>
    )
}

export default HeaderNav