import React from 'react';
import { Button, Form, Modal } from "react-bootstrap/";

import Auth from '../../utils/auth'

function Logout() {
  const handleLogout = async (e) => {
    e.preventDefault();
    Auth.logout();
  }
    return (
    <Button variant="light" onClick={handleLogout}>
        Logout
      </Button>
  )
}

export default Logout