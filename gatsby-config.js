module.exports = {
  siteMetadata: {
    title: "PhotoShack",
    author: "Alex Lee",
    description: "PhotoShack is a photo-editor with a user authentication system. Developed using Gatsby and Firebase"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    // "gatsby-env-variables",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components"
  ],
};
