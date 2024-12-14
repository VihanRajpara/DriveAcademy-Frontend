import { UserContext } from "./User";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";

const UserState = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const [user, setUser] = useState();
  const [refresh, setRefresh] = useState(0);
  const location = useLocation();
  const updateRefresh = () => {
    setRefresh((prev) => prev + 1);
  };

  const getCurrentUserData = async () => {
    try {
      const currentUser = await api.get("/auth/user/currentuser");
      console.log("Current user data:", currentUser.data);
      setUser(currentUser.data);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
      navigate("/");
    }
  };
  useEffect(() => {
    if (token) {
      getCurrentUserData();
    } else {
      const currentPath = location.pathname;
     !["/", "/expire"].includes(currentPath) && navigate("/");
      
    }
  }, [refresh]);

  return <UserContext.Provider value={{ user, updateRefresh }}>{children}</UserContext.Provider>;
};

export default UserState;
