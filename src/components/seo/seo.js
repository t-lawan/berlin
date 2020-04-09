/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, title, image, pathname }) {

  const metaDescription =
    description ||
    (lang === "en"
      ? "The 11th Berlin Biennale for Contemporary Art is curated by María Berríos, Renata Cervetto, Lisette Lagnado, and Agustín Pérez Rubio. They envision the forthcoming edition as a series of lived experiences. From June 13 to September 13, 2020, the 11th Berlin Biennale will bring forth these experiences at various venues throughout the city."
      : "Die 11. Berlin Biennale für zeitgenössische Kunst wird von María Berríos, Renata Cervetto, Lisette Lagnado und Agustín Pérez Rubio kuratiert. Sie stellen sich die kommende Ausgabe als eine Folge gelebter Erfahrungen vor. Vom 13. Juni bis zum 13. September 2020 bringt die 11. Berlin Biennale diese Erfahrungen an mehreren Ausstellungsorten in der Stadt zusammen.")
  const siteUrl = "https://11.berlinbiennale.de"
  let defaultImage =
    image ||
    "https://admin11.berlinbiennale.de/wp-content/themes/bb11-exp3-full/images/bb11_og.jpg"
  let titleHeading =
    lang === "en"
      ? "11th Berlin Biennale for Contemporary Art"
      : "11. Berlin Biennale für zeitgenössische Kunst"
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
          property: `og:url`,
          content: `${siteUrl}/${lang === "en" ? "" : "de/"}${pathname || ""}`,
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
          property: `og:image`,
          content: `${defaultImage}`,
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
  image: ``,
  pathname: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  pathname: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
