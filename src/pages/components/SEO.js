import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        author
        siteDesc: description
      }
    }
  }
`

export default function Seo() {

  const {site} = useStaticQuery(query)
  const {title, description, author} = site.siteMetadata;

  return (
    <Helmet htmlAttributes = {{lang: 'en'}} title = {title}>
      <meta name = 'description' content = {description} />
    </Helmet>
  )
}

