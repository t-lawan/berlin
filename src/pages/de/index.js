import React from "react"
import styled from "styled-components"
import NewsList from "../../components/news/newslist"
import Layout from "../../components/layout/layout"
import UpcomingEvents from "../../components/events/upcomingevents"

const IndexPage = () => (
  <Layout
    firstColumn={<NewsList />}
    secondColumn={<p> Hello </p>}
    numberOfColumnsIsTwo={true}
    thirdColumn={<UpcomingEvents/>}
  />
)

export default IndexPage
