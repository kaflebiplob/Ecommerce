import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Login from "../pages/loginpage";
import { BiCart } from "react-icons/bi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toogleHamburger() {
    setIsOpen(!isOpen);
  }
  return (
    <section className="header-section">
     
      <div className="headerpart">
        <div className="logo">
          <Link to={"/"}>abi</Link>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search items..." />
          <button className="s-1">
            <CiSearch />
          </button>
        </div>
        <div className="items">
          <ul className={`ulitems ? ${isOpen ? "active" : ""}`}>
            <li style={{ margin: 0, padding: 0 }}>
              <Link to={"/login"} style={{ padding: 0, margin: 0 }}>
                Login{" "}
              </Link>
              /
              <Link to={"/register"} style={{ padding: 0, margin: 0 }}>
                register
              </Link>
            </li>
            <li>
              <Link to={"/contact"}> Contact</Link>
            </li>
            <li>
              <Link to={"/aboutus"}>About</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <BiCart style={{ alignItems: "center", height: 18.4 }} />
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
