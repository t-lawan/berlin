import React from "react"
import Layout from "../components/layout"
import "@getbase/grid/index.css"
import ArticleList from "../components/articles/articlelist"
import Column from "../components/column"
const IndexPage = () => (
  <Layout>
    <div className="row">
      <Column className="col-6" rightBorder={true}>
        <ArticleList />
      </Column>
      <Column className="col-6">
        <h1> Hello</h1>
      </Column>
    </div>
  </Layout>
)

export default IndexPage
