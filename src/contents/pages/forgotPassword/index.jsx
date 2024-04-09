import '../../archives/css/forgotPassword.css';
import RegisterBox from '../../components/RegisterBox'
import HeaderNav from '../../components/HeaderNav';

function ForgotPassword() {
  return (
    <div className="forgot">
      <HeaderNav />
      <RegisterBox title="Recuperar" />
    </div>
  )
}

export default ForgotPassword
