import React from "react"
import styled from "styled-components"
import NewsList from "../components/news/newslist";
import Column from "../components/columns/column";
import Layout from "../components/layout/layout";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

`
const IndexPage = () => (

  <Layout>
    <ColumnWrapper>
      <Column rightBorder={true}>
        <NewsList />
      </Column>
      <Column>
        <h1> Hello</h1>
      </Column>
    </ColumnWrapper>
  </Layout>
)

export default IndexPage
