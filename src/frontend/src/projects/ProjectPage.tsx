import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import styles from "./ProjectPage.module.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id as string];

  if (!project) {
    return <div>專案不存在</div>;
  }

  return (
    <div className={styles.projectDetail}>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>

      <section>
        <h2>專案描述</h2>
        <p>{project.detailDescription}</p>
      </section>

      <section>
        <h2>使用技術</h2>
        <ul>
          {project.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>主要功能</h2>
        <ul>
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* 其他區塊... */}
    </div>
  );
}
