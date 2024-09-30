import { Link } from "@chakra-ui/react";
import { Input, Textarea, Button } from "@chakra-ui/react";

export default function Component() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#1a1a1a", color: "white" }}>
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
      <main style={{ flex: 1, overflow: "hidden" }}>
        <div style={{ height: "100vh", overflow: "auto", scrollBehavior: "smooth", snapType: "y mandatory" }}>
          <Section id="about" animation="fadeInLeft">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", padding: "0 1rem" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/placeholder.svg"
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  style={{ borderRadius: "50%", width: "12rem", height: "12rem", objectFit: "cover" }}
                />
                <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "1rem" }}>John Doe</h2>
                <p style={{ color: "#00b8d4", fontSize: "1.25rem" }}>Full-Stack Developer</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>About Me</h2>
                <p>
                  I am a passionate full-stack developer with over 5 years of experience in the industry.
                </p>
              </div>
            </div>
          </Section>
          {/* Resto de las secciones */}
        </div>
      </main>
    </div>
  );
}

function Section({
  id,
  animation,
  bgColor,
  children,
}: {
  id: string;
  animation: string;
  bgColor?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={`snap-start h-screen flex items-center justify-center animate__animated animate__${animation}`}
      style={{ backgroundColor: bgColor || "inherit" }}
    >
      {children}
    </section>
  );
}

function CareerItem({
  title,
  company,
  duration,
  description,
}: {
  title: string;
  company: string;
  duration: string;
  description: string;
}) {
  return (
    <div style="space-y-8">
      <h3 style="text-2xl font-bold text-[#00b8d4]">{title}</h3>
      <p style="text-lg">
        {company} | {duration}
      </p>
      <p>{description}</p>
    </div>
  );
}

function SkillGrid() {
  const skills = [
    { title: "React", icon: CodepenIcon },
    { title: "Node.js", icon: CodepenIcon },
    { title: "JavaScript", icon: EclipseIcon },
    { title: "CSS", icon: CodepenIcon },
    { title: "MongoDB", icon: DatabaseIcon },
    { title: "PostgreSQL", icon: DatabaseIcon },
    { title: "Git", icon: GitGraphIcon },
    { title: "Docker", icon: DockIcon },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
      {skills.map(({ title, icon: Icon }, index) => (
        <div
          key={index}
          style={{ backgroundColor: "#2d2d2d", borderRadius: "1rem", padding: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Icon style={{ width: "3rem", height: "3rem", color: "#00b8d4" }} />
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "1rem" }}>{title}</h3>
        </div>
      ))}
    </div>
  );
}

function ProjectGrid() {
    const projects = [
      {
        title: "Project 1",
        description: "E-commerce Platform",
        details:
          "A fully-featured e-commerce platform built with React, Node.js, and MongoDB.",
      },
      {
        title: "Project 2",
        description: "Social Media Platform",
        details:
          "A social media platform built with React, Node.js, and PostgreSQL.",
      },
      {
        title: "Project 3",
        description: "Task Management App",
        details: "A task management app built with React, Node.js, and MongoDB.",
      },
    ];
  
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "2rem", lg: { gridTemplateColumns: "repeat(3, 1fr)" } }}>
        {projects.map((project, index) => (
          <div key={index} style={{ backgroundColor: "#1a1a1a", borderRadius: "1rem", overflow: "hidden" }}>
            <img
              src="/placeholder.svg"
              alt={project.title}
              width={600}
              height={400}
              style={{ width: "100%", height: "12rem", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{project.title}</h3>
              <p style={{ fontSize: "1.125rem", color: "#00b8d4", marginTop: "0.5rem" }}>{project.description}</p>
              <p style={{ marginTop: "1rem" }}>{project.details}</p>
              <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                <Link
                  href="#"
                  style={{
                    backgroundColor: "#ff9100",
                    color: "#1a1a1a",
                    fontWeight: "bold",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    transition: "background-color 0.3s",
                  }}
                  _hover={{ backgroundColor: "#e68200" }}
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  function ContactForm() {
    return (
      <form style={{ backgroundColor: "#2d2d2d", borderRadius: "1rem", padding: "2rem", maxWidth: "30rem", margin: "0 auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name" style={{ display: "block", fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            style={{ backgroundColor: "#1a1a1a", borderColor: "#3d3d3d", color: "white", borderRadius: "0.5rem", padding: "0.5rem 1rem", width: "100%", outline: "none" }}
            _focus={{ ring: 2, ringColor: "#00b8d4" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={{ backgroundColor: "#1a1a1a", borderColor: "#3d3d3d", color: "white", borderRadius: "0.5rem", padding: "0.5rem 1rem", width: "100%", outline: "none" }}
            _focus={{ ring: 2, ringColor: "#00b8d4" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message" style={{ display: "block", fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Enter your message"
            style={{ backgroundColor: "#1a1a1a", borderColor: "#3d3d3d", color: "white", borderRadius: "0.5rem", padding: "0.5rem 1rem", width: "100%", outline: "none" }}
            _focus={{ ring: 2, ringColor: "#00b8d4" }}
          />
        </div>
        <Button
          type="submit"
          style={{ backgroundColor: "#ff9100", color: "#1a1a1a", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "0.5rem", width: "100%" }}
          _hover={{ backgroundColor: "#e68200" }}
          onClick={() => alert("Message sent!")}
        >
          Send Message
        </Button>
      </form>
    );
  }
function CodepenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function DockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>
  );
}

function EclipseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  );
}

function GitGraphIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}
