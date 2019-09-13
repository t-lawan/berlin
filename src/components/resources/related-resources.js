import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { changeGridToOneRow, Color } from "../../index.styles"
import { getItems } from "../../store/selector"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { createPath, getCurrentLanguageString } from "../../utility/helper"

const RelatedResourcesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1em;
  ${changeGridToOneRow};
`

const ResourceLink = styled(AniLink)`
  text-decoration: none;
  color: black;
`

const RelatedResource = styled.div`
  background: ${Color.yellow};
  /* height: 40px; */
  padding: 1em;
  margin: 1em;
  border: 1px solid black;
`

const RelatedResources = props => {
  const language = getCurrentLanguageString(props.languages)
  const resources = getItems(props.resources, props.ids)
  console.log(resources)
  return (
    <RelatedResourcesWrapper>
      {resources.map((resource, index) => (
        <ResourceLink
          key={index}
          to={createPath(language, `resource/${resource.slug}`)}
        >
          <RelatedResource>
            <p>{resource.title}</p>
            <p>{resource.author}</p>
          </RelatedResource>
        </ResourceLink>
      ))}
    </RelatedResourcesWrapper>
  )
}

RelatedResources.propTypes = {
  ids: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    resources: state.resources,
  }
}

export default connect(
  mapStateToProps,
  null
)(RelatedResources)
