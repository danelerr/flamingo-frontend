// This will prevent authenticated users from accessing this route
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {

  const log = localStorage.getItem('id') === null;
  let token = null
  if (!log) {
    token = 12
  }

  if (token === null) {
    return children
  } else {
    return <Navigate to="/dashboard/" />
  }
}

export default OpenRoute
