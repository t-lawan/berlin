import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles";

const DocumentationAudio= props => {
  let language = getCurrentLanguageString(props.languages);

  return (
      <PageWrapper>
          <h2> Audio </h2>
          <TwoColumnPageWrapper>
            <div> 
                <h2> Text</h2>
            </div>
            <div> 
                <h2> More Text</h2>
            </div>
          </TwoColumnPageWrapper>
      </PageWrapper>
  )
}

DocumentationAudio.propTypes = {
    documentation: PropTypes.object
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
)(DocumentationAudio)