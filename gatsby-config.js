module.exports = {
  siteMetadata: {
    title: "Brandon Valosek",
    author: "Brandon Valosek",
    siteUrl: "https://bvalosek.com",
    description:
      "Brandon Valosek is a software engineer and musician currently living in Austin, Texas",
    keywords: [
      "Brandon",
      "Brandon Valosek",
      "Austin",
      "Texas",
      "Software Engineer",
      "Engineer",
      "Developer",
      "Software Architect",
      "Musician",
      "Austin Musician"
    ],
    taglines: [
      "Professional Software Engineer",
      "Occassional Musican",
      "Amateur Futurist"
    ],
    email: "bvalosek@gmail.com",
    twitter: "@bvalosek",
    location: "Austin, Texas, United States, Earth",
    gpgFingerprint: "1543 A5D2 3F4A 3D73 4748 2916 4983 6DBF 3D34 69F5"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/"
      }
    },
    "gatsby-transformer-yaml",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-51219306-1"
      }
    }
  ]
};
