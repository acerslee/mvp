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
  const {siteTitle, siteDesc, author} = site.siteMetadata;

  return (
    <Helmet htmlAttributes = {{lang: 'en'}} title = {siteTitle}>
      <meta name = 'description' content = {siteDesc} />
    </Helmet>
  )
}

