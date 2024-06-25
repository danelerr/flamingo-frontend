import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"

function LoginForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    const data = {
      correo: email,
      contrasena: password,
    };
    console.log(data)
    const query = await fetch(`http://177.222.103.79:3000/validar-usuario`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json"
      }
    });
    const res = await query.json();
    if (res.login) {

      // redireccionar al home
      localStorage.clear();
      localStorage.setItem('id', res.id);
      localStorage.setItem('nombre', res.nombre);
      localStorage.setItem('correo', res.correo);
      localStorage.setItem('creditos', res.creditos);
      navigate("/dashboard");
    } else {
      alert("Error en algun dato")
    }
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Correo electrónico <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="example@correo.com"
          className="form-style w-full"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Contraseña <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="1234"
          className="form-style w-full !pr-10"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Olvidate tu Contraseña
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-[#515DB1]  py-[8px] px-[12px] font-medium text-white/85 hover:shadow-none hover:scale-95 transition-all duration-200"
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
