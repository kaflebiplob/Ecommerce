import { useState } from "react";
import { CiSearch } from "react-icons/ci";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toogleHamburger() {
    setIsOpen(!isOpen);
  }
  return (
    <section className="header-section">
      <div className="headerpart">
        <div className="logo">abi</div>
        <div className="searchbar">
          <input type="text" placeholder="Search items..." />
          <button className="s-1">
            <CiSearch />
          </button>
        </div>
        <div className="items">
          <ul className={`ulitems ? ${isOpen ? "active" : ""}`}>
            <li>
              <a href="">login/signup</a>
            </li>
            <li>
              <a href="">contact</a>
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
