interface CareerItemProps {
    title: string;
    company: string;
    duration: string;
    description: string;
  }
  
  export default function CareerItem({ title, company, duration, description }: CareerItemProps) {
    return (
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00b8d4" }}>{title}</h3>
        <p style={{ fontSize: "1.125rem" }}>{company} | {duration}</p>
        <p>{description}</p>
      </div>
    );
  }
  