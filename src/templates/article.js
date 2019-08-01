import React from "react"
import Layout from "../components/layout"
import { Convert } from "../utility/convert"

export default  ({pageContext}) => {
    console.log(pageContext);
  const article = Convert.toArticleModel(pageContext)
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: article.en.title }} />
      <div dangerouslySetInnerHTML={{ __html: article.en.content }} />
    </Layout>
  )
}
