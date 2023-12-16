import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
    const getTokenFromLocalStorage = JSON.parse(
        localStorage.getItem("customer")
    );
    return !!!getTokenFromLocalStorage?.token ? (
        children
    ) : (
        <Navigate to="/login" replace={true} />
    );
};

export default PublicRoutes;
