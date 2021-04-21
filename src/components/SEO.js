import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
      }
    }
  }
`
export default function Seo() {

  const {site} = useStaticQuery(query)
  const {siteTitle, siteDesc} = site.siteMetadata;

  return (
    <Helmet htmlAttributes = {{lang: 'en'}} title = {siteTitle}>
      <meta name = 'description' content = {siteDesc} />
    </Helmet>
  )
}

