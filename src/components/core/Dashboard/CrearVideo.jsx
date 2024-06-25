import { useSelector } from "react-redux"
import GeneratorPage from "../../../vite/GeneratorPage.jsx"


export default function CrearVideo() {
  const { user } = useSelector((state) => state.profile)

  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-richblack-5">
          Comienza a crear tus videos {user?.firstName} 🦩
        </h1>
        <p className="font-medium text-richblack-200">
          🦩
        </p>
      </div>
        <GeneratorPage/>
    </div>
  )
}
