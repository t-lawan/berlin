import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { changeGridToOneRow, Color } from "../../index.styles"
import { getItems } from "../../store/selector"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { createPath, getCurrentLanguageString, transitionBackground } from "../../utility/helper"
import { get } from "http";

const RelatedResourcesWrapper = styled.div`
  display: grid;
  width:calc(100% - 1em);
  margin-left:0.5em;
  margin-bottom:2em;
  margin-right:0.5em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 0em;
  ${changeGridToOneRow};
`

const ResourceLink = styled(AniLink)`
  text-decoration: none;
  color: black;
  grid-auto-rows: 1fr;
`

const RelatedResource = styled.div`
  background: ${Color.yellow};
  min-height: 9em;
  height:100%;
  position:relative;
  padding: 0.5em 0.5em 1.5em;
  margin: 0.35em;
  border: 1px solid black !important;
  :hover{
    >p{
      color: ${Color.red}
    }
  }
`

const ResourceText = styled.p`
  font-size: 0.85em;
  margin-top:0;
  :first-child {
    font-size:1em;
    line-height:1.3;
    margin-bottom:0.5em;
  }
  :last-child {
    margin-bottom:0em;
    position:absolute;
    bottom:0.7em;
  }
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

  }

  return (
    <RelatedResourcesWrapper>
      {resources.map((resource, index) => (
        <ResourceLink
          key={index}
          to={createPath(language, `resource/${resource.slug}`)}
          cover direction="down"
          bg={transitionBackground}
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
