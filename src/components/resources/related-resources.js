import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { changeGridToOneRow, Color } from "../../index.styles"
import { getItems } from "../../store/selector"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { createPath, getCurrentLanguageString } from "../../utility/helper"
import { get } from "http";

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
  min-height: 8em;
  padding: 1em;
  margin: 1em;
  border: 1px solid black;
  :hover{
    >p{
      color: ${Color.red}
    }
  }
`

const ResourceText = styled.p`
  font-size: 0.8em;
`

const RelatedResources = props => {
  const language = getCurrentLanguageString(props.languages)
  let resources = getItems(props.resources, props.ids)

  // Get genres from resources
  let genres = [];
  resources.forEach((resource )=> {
    resource.genre.forEach((g) => {
      if(!genres.includes(g)) {
        genres.push(g);
      }
    })
  })

  if(genres.length > 0) {

  // Get all resources belonging to genres
  let resourceGenres = []
  genres.forEach((genre) => {
    let rs = props.resources.filter((resource) => {
      return resource.genre.includes(genre);
    })
    resourceGenres.push(...rs);
  });

  // Filter duplicates
  resourceGenres = resourceGenres.filter((r, i) => resourceGenres.map((rm) => rm.id).indexOf(r.id) === i );
  // Filter resources passed in
  resources.forEach((resource) => {
    resourceGenres = resourceGenres.filter((rg) => rg.id !== resource.id);
  })
  // Shuffle array
  resourceGenres = resourceGenres.sort(() => Math.random() - 0.5);

  // Add to resources function
  resources.push(...resourceGenres)

  // Reduce to 9
  if(resources.length > 9) {
    resources = resources.slice(0, 9);
  }

  console.log(resources.length);
  }

  return (
    <RelatedResourcesWrapper>
      {resources.map((resource, index) => (
        <ResourceLink
          key={index}
          to={createPath(language, `resource/${resource.slug}`)}
        >
          <RelatedResource>
            <ResourceText>{resource.title}</ResourceText>
            <ResourceText>{resource.author}</ResourceText>
            <ResourceText>{resource[language].label}</ResourceText>
          </RelatedResource>
        </ResourceLink>
      ))}
    </RelatedResourcesWrapper>
  )
}

RelatedResources.propTypes = {
  ids: PropTypes.array
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
