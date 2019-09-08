import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Convert } from "../../utility/convert"

const NewsWrapper = styled.div``

const RelatedNews = props => {
  const related_articles = [84];
    const regex = createRegex(related_articles);
  return (
    // <StaticQuery
    //   query={graphql`
    //     {
    //       allWordpressWpArticle {
    //         edges {
    //           node {
    //             wordpress_id
    //             slug
    //             template
    //             acf {
    //               attachments {
    //                 image
    //                 related_documents
    //               }
    //               de {
    //                 content
    //                 title
    //               }
    //               en {
    //                 content
    //                 title
    //               }
    //               experience {
    //                 label
    //                 value
    //               }
    //               related_articles
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `}
    //   render={data => {
    //     const articleArray = Convert.toArticleModelArray(
    //       data.allWordpressWpArticle
    //     )
    //     return (
    //       <ArticlesWrapper>
    //         {articleArray.map(article => (
    //           <p> Hello Thomas</p>
    //         ))}
    //       </ArticlesWrapper>
    //     )
    //   }}
    // />
    <h4> Related Articles</h4>
  )
}

const createRegex = relatedArticles => {
  const regex = `/(`
  relatedArticles.forEach((article_id, index) => {
    if (relatedArticles.length - 1 === index) {
      regex += `${article_id}`
    } else {
      regex += `${article_id}|`
    }
  })
}

RelatedArticles.propTypes = {
  related_news: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default RelatedArticles
