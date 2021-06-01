import React from "react"
import PageLinks from "../constants/links"

const Navbar = () => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header"></div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}
export default Navbar
