import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import UpcomingEvents from "../components/events/upcomingevents"
import { PageWrapper } from "../templates/page.styles";
import { Color } from "../index.styles";
import NewsList from "../components/news/newslist";
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper";

const NotFoundPage = (props) => {
  let language = getCurrentLanguageString(props.languages)
  let isGerman = props.location.pathname.split('/').includes('de');
  let renderComponent = (
    <PageWrapper colour={Color.red}>
      <SEO
        title={`404: ${content[language].seo_title}`}
        description={`404: ${content[language].seo_title}`}
        lang={isGerman ? 'de' : 'en'}
      />
      <p> {content[language].title}</p>
      {/* <p>You just hit a route that doesn&#39;t exist...</p> */}
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

const content = {
  EN: {
    title: 'Page not found',
    seo_title: 'Not found'
  },
  DE: {
    title: 'Seite nicht gefunden',
    seo_title: 'Nicht gefunden'
  }
}
const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(NotFoundPage)
