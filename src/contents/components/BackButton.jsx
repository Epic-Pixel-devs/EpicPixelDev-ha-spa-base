import '../archives/css/forgotPassword.css'
import { useNavigate } from 'react-router-dom'

function BackButton() {

    const navigate = useNavigate()

    const redirectPage = () => {
        navigate('/login')
    }

    return (
        <span className="register-box-back">
            <p onClick={redirectPage}>Voltar</p>
        </span>
    )
}

export default BackButton