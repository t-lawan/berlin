import React from "react"
import { PageWrapperRes, TwoColumnPageWrapper } from "../../templates/page.styles"
import { Color } from "../../index.styles"
import { getCurrentLanguageString } from "../../utility/helper";
import ResourceNavigator from "./resource-navigator";
import PropTypes from "prop-types"
import { connect } from "react-redux"

const ResourceVideo = props => {
    let language = getCurrentLanguageString(props.languages);
    let r = props.resource;

  return (
    <PageWrapperRes color={Color.yellow}>
        <ResourceNavigator id={r.id} />
        <TwoColumnPageWrapper>
            <div>
                <p> Text</p>
            </div>

            <div>
                <p> Video </p>
            </div>
        </TwoColumnPageWrapper>
    </PageWrapperRes>
    )
}

const getRandomIds = (resources, numberOfIds) => {
    let ints = []
    for (let i = 0; i < numberOfIds; i++) {
      ints.push(resources[Math.floor(Math.random() * resources.length)].id)
    }
    return ints
  }

ResourceVideo.propTypes = {
  resource: PropTypes.object,
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
)(ResourceVideo)
