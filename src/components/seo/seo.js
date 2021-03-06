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

function SEO({ description, lang, meta, title, image, pathname }) {
  let imageData
  // If an image ID has been passed query all WordpressWpMedia
  if (image) {
    let { allWordpressWpMedia } = useStaticQuery(
      graphql`
        query {
          allWordpressWpMedia(filter: { media_type: { eq: "image" } }) {
            edges {
              node {
                wordpress_id
                media_type
                source_url
                media_details {
                  height
                  width
                }
              }
            }
          }
        }
      `
    )
    // Find the image that matches the image ID
    imageData = allWordpressWpMedia.edges.find(media => {
      return media.node.wordpress_id === image
    })
  }

  const metaDescription =
    description ||
    (lang === "en"
      ? "The 11th Berlin Biennale for Contemporary Art is curated by María Berríos, Renata Cervetto, Lisette Lagnado, and Agustín Pérez Rubio. They envision the forthcoming edition as a series of lived experiences. From September 5 to November 1, 2020, the 11th Berlin Biennale will bring forth these experiences at various venues throughout the city."
      : "Die 11. Berlin Biennale für zeitgenössische Kunst wird von María Berríos, Renata Cervetto, Lisette Lagnado und Agustín Pérez Rubio kuratiert. Sie stellen sich die kommende Ausgabe als eine Folge gelebter Erfahrungen vor. Vom 5. September bis zum 1. November 2020 bringt die 11. Berlin Biennale diese Erfahrungen an mehreren Ausstellungsorten in der Stadt zusammen.")
  const siteUrl = "https://11.berlinbiennale.de"

  // Set default image
  let defaultImage =
    "https://admin11.berlinbiennale.de/wp-content/themes/bb11-exp3-full/images/bb11_og.jpg"
  let imageHeight = 433
  let imageWidth = 826
  // If the imageData was found set the correct url
  if (imageData) {
    defaultImage = imageData.node.source_url
    imageHeight = imageData.node.media_details.height;
    imageWidth = imageData.node.media_details.width;
  }
  let titleHeading =
    lang === "en"
      ? "11th Berlin Biennale for Contemporary Art"
      : "11. Berlin Biennale für zeitgenössische Kunst"
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defer={false}
      title={title ? `${title}  | ${titleHeading}` : `${titleHeading}`}
      meta={[
        {
          rel: 'canonical',
          href: `${siteUrl}/${lang === "en" ? "" : "de/"}${pathname || ""}`
        },
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
          property: `og:image`,
          content: `${defaultImage}`,
        },
        {
          property: `og:image:width`,
          content: `${imageWidth}`,
        },
        {
          property: `og:image:height`,
          content: `${imageHeight}`,
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
  pathname: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  pathname: PropTypes.string,
  image: PropTypes.number,
}

export default SEO
