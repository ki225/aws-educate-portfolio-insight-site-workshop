import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  labels: string[];
  views: number;
  onClick: () => void;
}

export default function Card({
  id,
  title,
  subtitle,
  description,
  labels,
  views = 0, // Default value for views
  onClick,
}: CardProps): React.JSX.Element {
  return (
    <Link
      to={`/project/${id}`}
      className="card-link"
      onClick={(e) => {
        e.preventDefault(); // 阻止默认导航
        onClick(); // 先执行你的 POST handler
      }}
    >
      <div className="card">
        <div className="card-image">
          {/* 這裏放你的圖片 */}
          <div className="card-image-placeholder" />
        </div>
        <div className="card-body">
          <div className="card-body-title">{title}</div>
          <div className="card-body-sub">{subtitle}</div>
          <p className="card-description">{description}</p>
          <div className="card-labels">
            {labels.map((lbl, i) => (
              <button
                key={i}
                className={`card-label ${
                  i === labels.length - 1 ? "filled" : "outline"
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div className="card-views">👁️ {views}</div>
      </div>
    </Link>
  );
}
