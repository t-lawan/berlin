import React from "react"
import styled from "styled-components"
import NewsList from "../components/news/newslist"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"

const IndexPage = () => {
  const firstColumn = (
    <>
    <NewsList />
    </>
  )
  const secondColumn = (
    <>
    <p> Hello </p>
    </>
  )
  return (
    <Layout
    firstColumn={firstColumn}
    secondColumn={secondColumn}
    numberOfColumnsIsTwo={true}
    thirdColumn={<UpcomingEvents />}
  />
  )

}

export default IndexPage
