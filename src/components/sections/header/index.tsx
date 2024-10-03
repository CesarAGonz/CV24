import { useState } from "react";
import { Link } from "@chakra-ui/react";
import './HeaderStyles.css';
import { navLinks } from '../../../configs/config';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-container">
        <Link href="#" className="header-link">CesarDev</Link>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
        ☰
        </button>
        <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
          {navLinks.map((item: string, index: number) => (
            <Link key={index} href="#" className="header-nav-link">
              {item}
            </Link> 
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
