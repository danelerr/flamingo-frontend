
import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
  const log = localStorage.getItem('id') !== null;
  let token = 12
  if (!log) {
    token = null
  }

  if (token !== null) {
    return children
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute
