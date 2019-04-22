import React from "react";
import { useSiteMetadata } from "../hooks/gatsby";

export function Header() {
  const { title, taglines } = useSiteMetadata();

  return (
    <header className="mh3">
      <h1 className="ttu f1-ns">{title}</h1>
      <p className="flex flex-column lh-title">
        {taglines.map(s => (
          <span key={s}>{s}</span>
        ))}
      </p>
    </header>
  );
}
