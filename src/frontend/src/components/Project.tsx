import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ProjectData, projectsData } from "../data/projectsData";
import { useNavigate } from "react-router-dom";
import { loadConfig } from "../lib/action/config";

interface ViewRecord {
  project_id: string;
  view_count: number;
  project_title?: string;
}

export default function ProjectSection(): React.JSX.Element {
  const metas: ProjectData[] = Object.values(projectsData);

  const [viewsMap, setViewsMap] = useState<Record<string, number>>({});
  const [apiBaseUrl, setApiBaseUrl] = useState<string>("");

  useEffect(() => {
    loadConfig().then((config) => {
      setApiBaseUrl(config.API_BASE_URL);
    });
  }, []);

  useEffect(() => {
    fetch(`${apiBaseUrl}/v1/projects/views`)
      .then((res) => res.json())
      .then((data: { projects: ViewRecord[] }) => {
        console.log("GET views response:", data);
        const m: Record<string, number> = {};
        data.projects.forEach((r) => {
          m[r.project_id] = r.view_count;
        });
        setViewsMap(m);
      })
      .catch((err) => {
        console.error("無法取得 view counts:", err);
      });
  }, []);

  const navigate = useNavigate();

  const handleCardClick = async (id: string, title: string) => {
    try {
      await fetch(`${apiBaseUrl}/v1/projects/view`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ project_id: id, project_title: title }),
      });
      // 可選：直接更新本地 state，避免 reload
      setViewsMap((prev) => ({
        ...prev,
        [id]: (prev[id] ?? 0) + 1,
      }));
    } catch (e) {
      console.error("無法 POST view:", e);
    } finally {
      navigate(`/project/${id}`);
    }
  };
  return (
    <section id="project" className="project-section">
      <h2 className="project-title">Project</h2>
      <div className="project-grid">
        {metas.map((meta) => (
          <Card
            key={meta.id}
            id={meta.id}
            title={meta.title}
            subtitle={meta.subtitle}
            description={meta.description}
            labels={meta.labels}
            views={viewsMap[meta.id] ?? 0}
            onClick={() => handleCardClick(meta.id, meta.title)}
          />
        ))}
      </div>
    </section>
  );
}
