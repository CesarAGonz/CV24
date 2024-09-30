import React from "react";

interface SectionProps {
  id: string;
  animation: string;
  bgColor?: string;
  children: React.ReactNode;
}

export default function Section({ id, animation, bgColor, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`snap-start h-screen flex items-center justify-center animate__animated animate__${animation}`}
      style={{ backgroundColor: bgColor || "inherit" }}
    >
      {children}
    </section>
  );
}
