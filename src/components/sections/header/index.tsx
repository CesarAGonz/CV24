import { Link } from "@chakra-ui/react";
import './HeaderStyles.css';
import { navLinks } from '../../../configs/config';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Link href="#" className="header-link">John Doe</Link>
        <nav className="header-nav">
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
