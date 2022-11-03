import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../pages";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      window.localStorage.removeItem("user");
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
};
export default Logout;
