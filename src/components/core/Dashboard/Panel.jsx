import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Videos from "../../../vite/Videos.jsx"


export default function Instructor() {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    
    setLoading(true)
    const x = async () => {
      const res = await fetch(`http://177.222.103.79:3000/obtener-videos-usuario/${localStorage.getItem('id')}`);
      const data = await res.json();
      setCount(data.length)
    }
    x()
    setLoading(false)
  }, [])


  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-richblack-5">
          Hola {localStorage.getItem('nombre')} 👋🦩🦩
        </h1>
        <p className="font-medium text-richblack-200">
          Vamos a gestionar los videos
        </p>
      </div>
      {loading ? (
        <div className="spinner"></div>
      ) : count > 0 ? (
        <Videos/>
      ) : (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">
            Aún no has creado ningún video
          </p>
          <Link to="/dashboard/crear-video">
            <p className="mt-1 text-center text-lg font-semibold text-pink-50">
              Crear un video
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}
