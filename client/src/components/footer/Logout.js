import React from "react";
import { Button } from "react-bootstrap/";

import Auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    Auth.logout();
    navigate("/", { replace: true });
  };
  return (
    <Button variant="light" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default Logout;
