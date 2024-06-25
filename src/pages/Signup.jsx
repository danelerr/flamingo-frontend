import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Únete a Flamingo ahora"
      description1="Contruye tu flujo de trabajo con IA"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
