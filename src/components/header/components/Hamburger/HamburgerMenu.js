import { useState} from 'react'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import './_hamburger.scss'
import { hamItems } from './HamItems'
import HamMenuRender from './HamMenuRender'

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

      <ul className={`menuNav ${navbarOpen ? " showMenu" : "close"}`} >

          {hamItems.map((menu, index) =>{
            return(
              <HamMenuRender items={menu} key={index} closeMenu={closeMenu}/>
            )
          })}
      </ul>

    </nav>
  )
}

export default HamburgerMenu

