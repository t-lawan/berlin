import React from "react"
import styled from "styled-components"
import NewsList from "../components/news/newslist"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import ResourcesList from "../components/resources/resources-list";

const IndexPage = () => {
  const firstColumn = (
    <>
    <UpcomingEvents />
    </>
  )
  const secondColumn = (
    <>
    <p> Hello </p>
    </>
  )
  return (
    <Layout
    firstColumn={<ResourcesList />}
    secondColumn={secondColumn}
    numberOfColumnsIsTwo={true}
    thirdColumn={<UpcomingEvents />}
  />
  )

}

export default IndexPage
