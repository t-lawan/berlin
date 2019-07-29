import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"
import Article from "./article"
import { Convert } from "../../utility/convert";

const ArticleListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`

const ArticleListInner = styled.div``

const ArticleList = props => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpArticle {
          edges {
            node {
              id
              wordpress_id
              slug
              template
              acf {
                attachments {
                  image
                  related_documents
                }
                de {
                  content
                  title
                }
                en {
                  content
                  title
                }
                experience {
                  label
                  value
                }
                related_articles
              }
            }
          }
        }
      }
    `}
    render={data => {
      const articleArray = Convert.toArticleModelArray(data.allWordpressWpArticle);
      return (
        <ArticleListWrapper>
          {articleArray.map(article => (
            <Article key={article.id} article={article} />
          ))}
        </ArticleListWrapper>
      )
    }}
  />
)

export default ArticleList
