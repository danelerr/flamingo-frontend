import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Bienvenido de nuevo"
      description1="Continua tus proyectos."
      description2="Consume nuestros servicios."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
