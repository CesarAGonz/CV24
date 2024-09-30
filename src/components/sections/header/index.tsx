import { Link } from "@chakra-ui/react";
import './HeaderStyles.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Link href="#" className="header-link">John Doe</Link>
        <nav className="header-nav">
          {["About", "Career", "Skills", "Projects", "Contact"].map((item, index) => (
            <Link key={index} href="#" className="header-nav-link">
              {item}
            </Link> 
          ))}
        </nav>
      </div>
    </header>
  );
}
