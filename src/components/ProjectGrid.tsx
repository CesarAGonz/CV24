import { Link } from "@chakra-ui/react";

const projects = [
  {
    title: "Project 1",
    description: "E-commerce Platform",
    details: "A fully-featured e-commerce platform built with React, Node.js, and MongoDB.",
  },
  {
    title: "Project 2",
    description: "Social Media Platform",
    details: "A social media platform built with React, Node.js, and PostgreSQL.",
  },
  {
    title: "Project 3",
    description: "Task Management App",
    details: "A task management app built with React, Node.js, and MongoDB.",
  },
];

export default function ProjectGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "2rem" }}>
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
              <Link href="#" style={{ backgroundColor: "#ff9100", color: "#1a1a1a", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "0.5rem", transition: "background-color 0.3s" }} _hover={{ backgroundColor: "#e68200" }}>
                View Project
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
