import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

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
    <Link
      to={`/project/${id}`}
      className={styles.cardLink}
      onClick={handleClick}
    >
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardBody}>
          <div className="card-header-area">
            <div className={styles.cardBodyTitle}>{title}</div>
            <div className={styles.cardBodySub}>{subtitle}</div>
          </div>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.cardLabels}>
            {labels.map((lbl, i) => (
              <button
                key={i}
                className={`${styles.cardLabel} ${
                  i === labels.length - 1 ? styles.filled : styles.outline
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.cardViews}>👁️ {views}</div>
      </div>
    </Link>
  );
}
