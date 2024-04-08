import { AiFillThunderbolt } from "react-icons/ai"
import '../archives/css/forgotPassword.css'
import Recover from "./Recover"
import BackButton from './BackButton'

function RegisterBox({ title }) {
    return (
        <div className="container-recover">
            <div className="register-box">
                <BackButton />
                <p className="register-box-title">
                    <AiFillThunderbolt className="thunderSvg" />
                    {title}
                    <AiFillThunderbolt className="thunderSvg" />
                </p>
                <Recover />
            </div>

        </div>
    )
}


export default RegisterBox