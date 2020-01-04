import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import UpcomingEvents from "../components/events/upcomingevents"
import { PageWrapper } from "../templates/page.styles";
import { Color } from "../index.styles";
import NewsList from "../components/news/newslist";

const NotFoundPage = () => {
  let renderComponent = (
    <PageWrapper colour={Color.red}>
      <SEO
        title={`404: Not found`}
        description={`404: Not found`}
        lang={'en'}
      />
      <p> Page not found.</p>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </PageWrapper>
  )

  let thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )
  return (
    <Layout
      firstColumn={renderComponent}
      secondColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={thirdColumn}
    />
  )
}

export default NotFoundPage
