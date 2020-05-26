import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { truncateText, capitalise, pageMap } from "../utility/helper"
import SEO from "../components/seo/seo"
import { TwoColumnPageWrapper } from "./page.styles"
import AboutNavbar from "../components/about/about-navbar";
import AboutComponents from "../components/about/about-components";
import NewsList from "../components/news/newslist";
import striptags from 'striptags';

const About = props => {
  const content = props.pageContext;
  let description = content.acf[`${content.language.toUpperCase()}_row`] ? truncateText(striptags(content.acf[`${content.language.toUpperCase()}_row`].description)) : "";
  let path = pageMap.find((pg) => {
    return pg[props.pageContext.language.toUpperCase()] == content.slug
  })  


  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={AboutTitle[props.pageContext.title][`${props.pageContext.language.toUpperCase()}`]}
        description={`${description}`}
        lang={props.pageContext.language}
        pathname={path ? path[props.pageContext.language.toUpperCase()] : null}
      />
      <AboutNavbar currentPage={content.slug} />
      <AboutComponents content={content} />
    </TwoColumnPageWrapper>
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
      numberOfColumnsIsTwo={false}
      thirdColumn={thirdColumn}
    />
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}
const AboutTitle  = {
  "About": {
    EN: 'About',
    DE: 'Über'
  },
  "advisory board": {
    EN: 'Advisory board',
    DE: 'Beirat'
  },
  "team": {
    EN: 'Team',
    DE: 'Team'
  },
  "organization": {
    EN: 'Organization',
    DE: 'Verein'
  },
  "support": {
    EN: 'Support',
    DE: 'Unterstutzung'
  },

}

export default connect(
  mapStateToProps,
  null
)(About)
