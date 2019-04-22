import { useStaticQuery, graphql } from "gatsby";

interface SiteMetadata {
  title: string;
  author: string;
  siteUrl: string;
  description: string;
  taglines: string[];
  keywords: string[];
  email: string;
  twitter: string;
  location: string;
  gpgFingerprint: string;
}

interface SocialLink {
  caption: string;
  link: string;
}

interface FileInfo {
  publicURL: string;
  relativePath: string;
}

function useGatsbyData() {
  return useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
          taglines
          keywords
          email
          twitter
          location
          gpgFingerprint
        }
      }

      social: allSocialYaml {
        nodes {
          caption
          link
        }
      }

      files: allFile {
        nodes {
          publicURL
          relativePath
        }
      }
    }
  `) as {
    site: { siteMetadata: SiteMetadata };
    social: { nodes: SocialLink[] };
    files: { nodes: FileInfo[] };
  };
}

export function useFiles(): ReadonlyArray<FileInfo> {
  const q = useGatsbyData();
  return q.files.nodes;
}

export function useSiteMetadata(): SiteMetadata {
  const q = useGatsbyData();
  return q.site.siteMetadata;
}

export function useSocial(): ReadonlyArray<SocialLink> {
  const q = useGatsbyData();
  return q.social.nodes;
}
