import React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata, useFiles } from "../hooks/gatsby";

export function Head() {
  const {
    title,
    description,
    author,
    keywords,
    twitter,
    siteUrl
  } = useSiteMetadata();
  const files = useFiles();

  const me = files.find(f => f.relativePath === "images/me.jpg");

  const meUrl = `${siteUrl}${me.publicURL}`;

  if (!me) {
    throw new Error("unable to find me image");
  }

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta
        name="copyright"
        content={`&copy; Copyright ${new Date().getFullYear()}`}
      />
      <meta name="keywords" content={keywords.join(", ")} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:image" content={meUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={meUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={title} />
    </Helmet>
  );
}
