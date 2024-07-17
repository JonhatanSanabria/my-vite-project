import ViteLogo from "./ViteLogo"
import Menu from "./Menu"

export default function NavBar() {
    return (
        <nav id="navbar">
          <div id="logo">
          <ViteLogo height="1.8rem" width="3rem"/>
             <span>Vite</span>
            </div>
          <div id="search-container">
              <input type="text" placeholder="Search"/>
          </div>
          <div></div>
          <Menu />
          <div></div>
     </nav>
    )
}