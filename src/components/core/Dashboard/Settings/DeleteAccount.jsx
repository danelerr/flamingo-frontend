import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteProfile } from "../../../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    alert("Cuenta borrada")
    navigate("/")
  }


  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-5">
            Eliminar Cuenta
          </h2>
          <div className="w-3/5 text-pink-25">
            <p>¿En serio quieres borrar tu cuenta?</p>
            <p>
              Una vez borrada, se perderá toda tu información sin derecho a recuperarse, nosotros no guardamos nada como política de privadad
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer italic text-pink-300"
            onClick={handleDeleteAccount}
          >
            Estoy seguro que voy a borrar mi cuenta.
          </button>
        </div>
      </div>
    </>
  )
}
