import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Login from "../Login";

const CheckoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login", { replace: true });
            return;
        }

        try {
            const decoded = jwtDecode(token);

            const currentTime = Date.now() / 1000;

            if (decoded.exp < currentTime) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");

                navigate("/login", { replace: true });
            } else {
                navigate("/dashboard/home", { replace: true });
            }
        } catch (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            navigate("/login", { replace: true });
        }
    }, [navigate]);

    return (
        <div className="">
                <Login />
        </div>
    );
};

export default CheckoutPage;

