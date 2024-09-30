import { Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 10, backgroundColor: "#1a1a1a", borderBottom: "1px solid #2d2d2d", padding: "1rem 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 1rem" }}>
        <Link href="#" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00b8d4" }}>John Doe</Link>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {["About", "Career", "Skills", "Projects", "Contact"].map((item, index) => (
            <Link key={index} href="#" style={{ transition: "color 0.3s", color: "inherit" }} _hover={{ color: "#ff9100" }}>
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
