import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import { PageWrapper, TwoColumnPageWrapper } from "./page.styles"
import { getDocument } from "../store/selector"

const PracticalInformation = props => {
  const language = getCurrentLanguageString(props.languages)
  const pageInfo = props.pageContext
  const image = getDocument(props.documents, pageInfo.acf.thumbnail_image)
  const url = image ? image.url : '';
  const renderComponent = (
    <TwoColumnPageWrapper>
      <div>
        <div>
          {pageInfo.acf[language].address_info.map((address, index) => (
            <p key={index}> {address.address_line} </p>
          ))}
        </div>
        <div>
          <p>Opening times</p>
          {pageInfo.acf[language].opening_times.map((time, index) => (
            <p key={index}> {time.opening_time_line} </p>
          ))}
        </div>
        <div>
          <p>Access</p>
          {pageInfo.acf.directions.map((directions, index) => (
            <p key={index}> {directions.directions_line} </p>
          ))}
        </div>
      </div>

      <div>
        <img src={url} />
        <div
          dangerouslySetInnerHTML={{
            __html: pageInfo.acf[language].venue_description,
          }}
        />
      </div>
    </TwoColumnPageWrapper>
  )

  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={<UpcomingEvents />}
    />
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(PracticalInformation)
