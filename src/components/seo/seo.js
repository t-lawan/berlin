/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {

  const metaDescription = 'The 11th Berlin Biennale for Contemporary Art is curated by María Berríos, Renata Cervetto, Lisette Lagnado, and Agustín Pérez Rubio. They envision the forthcoming edition as a series of lived experiences. From June 13 to September 13, 2020, the 11th Berlin Biennale will bring forth these experiences at various venues throughout the city. ';
  let titleHeading = lang === 'en' ? "11th Berlin Biennale for Contemporary Art" : "11. Berlin Biennale für zeitgenössische Kunst"
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? `${title}  | ${titleHeading}` : `${titleHeading}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
