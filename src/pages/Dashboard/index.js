import React from "react";

import { FaUserAlt } from "react-icons/fa";

import { MdKeyboardArrowDown, MdExitToApp } from "react-icons/md";

import { Container, Sidebar, TodoList, Footer } from "./styles";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("@token"));

  return (
    <Container>
      <Sidebar>
        <div>
          <h4>{user.username}</h4>
        </div>
      </Sidebar>
    </Container>
  );
}
