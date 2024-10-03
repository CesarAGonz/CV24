import { useState } from "react";
import { Link } from "@chakra-ui/react";
// import MenuIcon from '@mui/icons-material/Menu';
import './HeaderStyles.css';
import { navLinks } from '../../../configs/config';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-container">
        <Link href="#" className="header-link">CesarDev</Link>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
          {/* <MenuIcon className="menu-icon" /> */}
        </button>
        <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
          {navLinks.map((item, index) => (
            <Link key={index} href="#" className="header-nav-link">
              {item}
            </Link> 
          ))}
        </nav>
      </div>
    </header>
  );
}
