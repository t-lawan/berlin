import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"
import { Convert } from "../../utility/convert"

const NewsListWrapper = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  align-items: center;
  align-content: center;
`

const NewsListInner = styled.div``

const NewsList = props => (
  // <StaticQuery
  //   query={graphql`
  //     {
  //       allWordpressWpArticle {
  //         edges {
  //           node {
  //             id
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
  //     const articleArray = Convert.toArticleModelArray(data.allWordpressWpArticle);
  //     return (
  //       <ArticleListWrapper>
  //         {articleArray.map(article => (
  //           <Article key={article.id} article={article} />
  //         ))}
  //       </ArticleListWrapper>
  //     )
  //   }}
  // />

  <NewsListWrapper>
    <h3> Article List</h3>
  </NewsListWrapper>
)

export default NewsList
