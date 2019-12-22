import React from "react"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import { Color } from "../../index.styles"
import { getCurrentLanguageString } from "../../utility/helper";
import ResourceNavigator from "./resource-navigator";
import PropTypes from "prop-types"
import { connect } from "react-redux"

const ResourceVideo = props => {
    let language = getCurrentLanguageString(props.languages);
    let r = props.resource;
    let resourceIds = [];
    if(props.resources.length !== 0) {
        resourceIds = props.resources.map(res => {
            return res.id;
        })
    } else {
        resourceIds = getRandomIds(props.resources, 4);
    }
  return (
    <PageWrapper color={Color.yellow}>
        <ResourceNavigator id={r.id} />
        <TwoColumnPageWrapper>
            <div>
                <p> Text</p>
            </div>

            <div>
                <p> Video </p>
            </div>
        </TwoColumnPageWrapper>
    </PageWrapper>
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
    resources: state.resources,
  }
}

export default connect(
  mapStateToProps,
  null
)(ResourceVideo)
