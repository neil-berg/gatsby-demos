module.exports = {
  siteMetadata: {
    title: "Personal Portfolio!",
    author: "Neil Berg",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
