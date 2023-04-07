import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCilck = () => {
    navigate("/signup");
  };

  return (
    <div>
      Login
      <button onClick={handleCilck}>navigate</button>
    </div>
  );
};
