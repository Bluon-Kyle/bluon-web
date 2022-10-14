import { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const HamburgerMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
      </button>

      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
      <NavLink
        to='/'
        activeClassName="active-link"
        onClick={() => closeMenu()}
        exact
      >
        Home
      </NavLink>
      </ul>

    </nav>
  )
}

export default HamburgerMenu

