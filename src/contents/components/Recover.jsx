import { HiOutlineMail } from 'react-icons/hi'
import { useState } from 'react';
import axios from 'axios'
import '../archives/css/forgotPassword.css'

function Recover() {

    const [emailRecover, setEmailRecover] = useState('')
    const [emailExists, setEmailExists] = useState(false)
    const [emailError, setEmailError] = useState('')

    const handleEmailSubmit = async (e) => {
        e.preventDefault()

        if (!emailRecover) {
            setEmailError('O campo de e-mail deve ser preenchido.')
            return
        }

        // Validar se o e-mail existe
        try {
            //     TODO: quando tiver conexão com o back, fazer um POST para validação do usuário

            //     const response = await axios.post('endpoint', { emailRecover})
            //     if (response.status === 200) {
            //         // setEmailExists(true)
            //         // Back cria token temporario e enviar email
            //         // Atualizar página para "E-mail enviado com sucesso"
            //     } else {
            //         // setEmailExists(false)
            //         // setEmailError("E-mail invalido, favor digitar um e-mail cadastrado.")
            //         // Retorna mensagem de e-mail invalido
            //     }
            // } catch (error) {
            //     // Retorna mensagem de erro ao fazer a requisição
            // }


            // Código abaixo feito para teste da página usando json-server
            // const response = await axios.get(`http://localhost:8000/users?email=${emailRecover}`)
            if (emailRecover === "email@teste.com") {
                setEmailExists(true)

            } else {
                setEmailExists(false)
                setEmailError("E-mail invalido, favor digitar um e-mail cadastrado.")
            }
        } catch (error) {
            console.error("Erro ao verificar e-mail: ", error.message)
        }
    }

    return (
        <div className='recover'>
            {emailExists ? (
                <p className='recuperado'>E-mail com link de atualização de senha enviado para: {emailRecover}</p>
            ) : (
                <>
                    <p>
                        Preencha o campo abaixo com o e-mail que você usou para se cadastrar. Iremos te enviar um e-mail com o as instruções de recuperação da sua conta!
                    </p><form id="form-email">
                        <div className="mb-3 form-email">
                            <label htmlFor="emailInput" className="form-label">Seu Email</label>
                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="Seu email"
                                    onChange={(e) => { setEmailRecover(e.target.value); setEmailError(''); }} />
                                <HiOutlineMail />
                                {emailError && <p className="error-message">{emailError}</p>}
                            </div>
                        </div>
                    </form><button type="submit" form="form-email" className="btn-recover" onClick={handleEmailSubmit}>Enviar</button>
                </>
            )}

        </div>
    )
}

export default Recover