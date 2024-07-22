import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Login from "../pages/loginpage";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toogleHamburger() {
    setIsOpen(!isOpen);
  }
  return (
    <section className="header-section">
      <div className="headerpart">
        <div className="logo"><Link to={'/'}>abi</Link></div>
        <div className="searchbar">
          <input type="text" placeholder="Search items..." />
          <button className="s-1">
            <CiSearch />
          </button>
        </div>
        <div className="items">
          <ul className={`ulitems ? ${isOpen ? "active" : ""}`}>
            <li>
            <Link to={"/login"}>Login </Link>  
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">shop</a>
            </li>
          </ul>
        </div>
        <div className="hamburger " onClick={toogleHamburger}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}
export default Header;
