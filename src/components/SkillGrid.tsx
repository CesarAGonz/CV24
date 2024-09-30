import CodepenIcon from './icons/CodepenIcon';
import EclipseIcon from './icons/EclipseIcon';
import DatabaseIcon from './icons/DatabaseIcon';
import GitGraphIcon from './icons/GitGraphIcon';
import DockIcon from './icons/DockIcon';

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

export default function SkillGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
      {skills.map(({ title, icon: Icon }, index) => (
        <div key={index} style={{ backgroundColor: "#2d2d2d", borderRadius: "1rem", padding: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Icon style={{ width: "3rem", height: "3rem", color: "#00b8d4" }} />
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "1rem" }}>{title}</h3>
        </div>
      ))}
    </div>
  );
}
