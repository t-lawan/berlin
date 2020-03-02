import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { changeGridToOneRow, Color, size } from "../../index.styles"
import { getItems } from "../../store/selector"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import striptags from "striptags"
import { createPath, getCurrentLanguageString, transitionBackground, truncateText, getNumberOfWords } from "../../utility/helper"
import { get } from "http";
import { startTransition } from "../../store/action";

export const RelatedResourcesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width:calc(100% - 1em);
  margin-left:0.5em;
  margin-bottom:2em;
  margin-right:0.5em;
  @media (max-width: ${size.mobileM}) {
    /*background-color:#FFF;*/
    margin-bottom:0em;
    padding-bottom:2em;
  }
  @media (min-width: ${size.laptop}) {
    margin-bottom:4em;
  }
`

const ResourceLink = styled(AniLink)`
  text-decoration: none;
  color: black;
  margin-bottom:0.7em;
  position: relative;
  @media (max-width: ${size.mobileM}) {
  width:50%;
  }
  @media (min-width: ${size.mobileL}) {
  width:33.33%;
  }
  @media (min-width: ${size.laptopM}) {
  width:25%;
  }
`

const RelatedResource = styled.div`
  background: ${Color.yellow};
  min-height: 9em;
  height:100%;
  position:relative;
  padding: 0.5em 0.5em 1.5em;
  margin: 0.35em 0.35em 0 0.35em;
  border: 1px solid black !important;
  :hover{
    >p{
      color: ${Color.red}
    }
  }
`

const ResourceText = styled.p`
  font-size: 0.85em;
  transition: all 0.2s ease-in-out;
  margin-top:0;
  :first-child {
    font-size:1em !important;
    line-height:1.2;
    margin-bottom:0.5em;
  }
  :last-child {
    margin-bottom:0em;
    position:absolute;
    bottom:0.7em;
  }
  @media (min-width: ${size.mobileL}) {
    font-size: 1.1em !important;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.9em !important;
  }
  @media (min-width: ${size.laptop}) {
    :last-child {
      font-size: 0.85em !important;
    }
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
          onClick={() => props.startTransition()}
          to={createPath(language, `resource/${resource.slug}`)}
          fade
          // cover direction="down"
          // bg={transitionBackground}
        >
          <RelatedResource>
            <ResourceText>{getNumberOfWords(resource.title) > 11 ?  `${truncateText(resource.title, 10)} ...` : resource.title}</ResourceText>
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

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () =>
      dispatch(startTransition()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedResources)
