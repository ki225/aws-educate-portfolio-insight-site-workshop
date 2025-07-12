import React from "react";
import Card from "./Card";

export default function ProjectSection(): React.JSX.Element {
  const cards = [
    {
      title: "Sorting Hat Website",
      subtitle: "0322 CP Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      labels: ["S3", "EC2", "CP"],
      views: 120,
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      labels: ["Label", "Label"],
      views: 120,
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      labels: ["Label", "Label"],
      views: 120,
    },
  ];

  return (
    <section id="project" className="project-section">
      <h2 className="project-title">Project</h2>
      <div className="project-grid">
        {cards.map((c, i) => (
          <Card
            key={i}
            id={String(i)}
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
