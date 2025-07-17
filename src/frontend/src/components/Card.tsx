import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  labels: string[];
  views: number;
  onClick: () => void;
}

export default function Card({
  id,
  title,
  subtitle,
  description,
  image,
  labels,
  views = 0, // Default value for views
  onClick,
}: CardProps): React.JSX.Element {
  const navigate = useNavigate();
  const handleClick = () => {
    onClick(); // 呼叫父層傳來的副作用（POST + alert）
  };

  return (
    <Link to={`/project/${id}`} className="card-link" onClick={handleClick}>
      <div className="card">
        <div className="card-image">
          {image ? (
            <img src={image} alt={title} className="card-image-actual" />
          ) : (
            <div className="card-image-placeholder"></div>
          )}
        </div>
        <div className="card-body">
          <div className="card-header-area">
            <div className="card-body-title">{title}</div>
            <div className="card-body-sub">{subtitle}</div>
          </div>
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
