import { AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { Link, matchPath, useLocation } from "react-router-dom"
import logo from "../../assets/Logo/Logo-Small-Dark.png"
import { NavbarLinks } from "../../data/navbar-links"
import { useEffect, useState } from "react"
function Navbar() {

  const location = useLocation()
  const [token, setToken] = useState(null)
    // seguridad
    useEffect(() => {
      const log = localStorage.getItem('id') !== null;
      if (log) {
        setToken(12)
      }
    }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-20 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">


        {/* Logo */}
        <Link to="/">
          <div className="flex  space-x-2 p-2">
          <img src={logo}  alt="Logo" width={40} height={5} loading="lazy"  /> 
          <h1 className="text-white font-extrabold text-2xl py-1">Flamingo App</h1>
          </div>
        </Link>


        
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-pink-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
              </li>
            ))}
            <li>
              <div
                className={`group relative flex cursor-pointer items-center gap-1 ${
                  matchRoute("/ai/:toolName")
                    ? "text-pink-25"
                    : "text-richblack-25"
                }`}
              >


                <p>IA</p>
                <BsChevronDown />
                <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                  <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>

                  {/* AQUI VOY A BLOQUEAR TODOS */}

                  <Link
                    to="http://llama.tecnoweb.art/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                  >
                    <p>Generación de texto (By Llama3)</p>
                  </Link>


                  <Link
                    to="http://177.222.103.79:5174/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                  >
                    <p>Generación de imágenes</p>
                  </Link>



                  <Link
                    to="/ai/chat-with-pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                  >
                    <p>Generación de voz</p>
                  </Link>

                  <Link
                    to="/ai/chat-with-pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                  >
                    <p>Generación de texto (Flamingo)</p>
                  </Link>


                </div>
              </div>
            </li>
          </ul>
        </nav>


        <div className="hidden items-center gap-x-4 md:flex">
          {token === null && (
            <Link to="/login">
              <button className="rounded-[12px] border border-richblack-700 bg-[#515DB1] px-[12px] py-[8px] text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-transform duration-200 ease-in-out">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[12px] border border-richblack-700 bg-[#515DB1] px-[12px] py-[8px] text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-transform duration-200 ease-in-out">
                Sign up
              </button>
            </Link>
          )}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
