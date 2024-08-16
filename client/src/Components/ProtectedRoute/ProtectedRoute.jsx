import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, children, redirectTo = "/" }) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo}/>
    }
return children ? children : <Outlet/>
}

export default ProtectedRoute;