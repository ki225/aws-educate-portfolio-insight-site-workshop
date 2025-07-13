import React from "react";
import Card from "./Card";
import { projectsData } from "../data/projectsData";

export default function ProjectSection(): React.JSX.Element {
  const cards = Object.values(projectsData);

  return (
    <section id="project" className="project-section">
      <h2 className="project-title">Project</h2>
      <div className="project-grid">
        {cards.map((c, i) => (
          <Card
            key={i}
            id={c.id}
            title={c.title}
            subtitle={c.subtitle}
            description={c.description}
            labels={c.labels}
            views={c.views}
          />
        ))}
      </div>
    </section>
  );
}
