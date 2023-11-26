import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink className="menu__item" to="/ra_router_menu/">
        Главная
      </NavLink>
      <NavLink className="menu__item" to="/ra_router_menu/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className="menu__item" to="/ra_router_menu/timeattack">
        Time Attack
      </NavLink>
      <NavLink className="menu__item" to="/ra_router_menu/forza">
        Forza Karting
      </NavLink>
    </nav>
  )
}

export default Menu