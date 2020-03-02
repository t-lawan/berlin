import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath, shuffle } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import { Color, size } from "../../index.styles"
import { Link } from "gatsby"
import * as actionTypes from '../../store/action';
const ResourcesListWrapper = styled.div`
  padding: 0.7em 1em;
  @media (max-width: ${size.mobileM}) {
    padding: 0 0.7em;
    background-color: #fff;
    border-top:1px solid #000;
  }
  @media (max-width: ${size.tabletL}) {
    padding: 0.7em 0.7em;
  }
  @media (min-width: ${size.laptop}) {
    padding-bottom: 120px;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 0.9em 1.2em;
  }
`

const ResourceTitle = styled.p`
  font-size: 1em;
  transition:all 0.2s ease-in-out;
  :last-child {
    margin-bottom:0;
  }
  @media (max-width: ${size.mobileM}) {
    font-size:1.1em;
    margin-bottom:0.3em;
  }
  @media (min-width: ${size.mobileL}) {
    font-size:0.95em;
    margin-bottom:0.3em;
  }
  @media (min-width: ${size.laptop}) {
    font-size:1em;
  }
`
const ResourceTitleImage = styled.p`
  font-size: 1em;
  margin-top: 0.4em;
  transition:all 0.2s ease-in-out;
  :last-child {
    margin-bottom:0;
  }
  @media (max-width: ${size.mobileM}) {
    font-size:1.1em;
    margin-bottom:0.3em;
  }
  @media (min-width: ${size.mobileL}) {
    font-size:0.95em;
    margin-bottom:0.3em;
  }
  @media (min-width: ${size.laptop}) {
    font-size:1em;
  }
`

const ResourceLabel = styled.p`
  font-size: 1em;
  margin: 0.5em 0 0;
  @media (max-width: ${size.mobileM}) {
    font-size:1.1em;
  }
  @media (min-width: ${size.mobileL}) {
    font-size:0.95em;
  }
  @media (min-width: ${size.laptop}) {
    font-size:1em;
  }
`

const ResourceItemLink = styled(Link)`
  text-decoration: none;
  :hover {
    ${ResourceTitle}:first-child {
      color: ${Color.red};
    }
    ${ResourceTitleImage} {
      color: ${Color.red};
    }
  }
  :last-child div {
      border-bottom:none;
  }
  > p {
    font-size: 1em;
  }
`

const ResourceItem = styled.div`
  padding-top: 1em;
  color: black;
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid black;
  :first-child {
    padding-top:0;
  }
  > div > picture > img {
    margin-bottom:0.3em;
  }
 > div > picture > img {
   margin-bottom:0.3em !important;
 }
`

const TextBox = styled.div`
  padding: 0.7em 0.75em;
  background: ${Color.yellow};
  /* border: 1px solid black; */
  margin-bottom: 0rem;
  @media (max-width: ${size.tablet}) {
    padding: 0.7em 0.7em;
  }
  > p:first-child {
    margin-bottom: 0;
  }
  > p:nth-child(2) {
    margin-top: 0.2em;
  }
`
const Author = styled.p`
  margin-bottom:0;
  @media (max-width: ${size.mobileM}) {
    font-size: 1.1em;
    margin-top: -0.3em;
    line-height: 1.4;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.95em;
    line-height: 1.4;
    margin-top: 0em;
    margin-bottom:0em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1em;
    line-height: 1.4;
    margin-top: -0.3em;
    margin-bottom:0em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1em;
    line-height: 1.4;
    margin-top: -0.3em;
    margin-bottom:0em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1em;
    line-height: 1.4;
    margin-top: -0.3em;
    margin-bottom:0em;
  }
`
const ResourcesList = props => {
  let language = getCurrentLanguageString(props.languages)
  let resources = shuffle(props.resources).slice(0, 6);

  const createComponent = (index) => {
    const resource = resources[index]
    let renderComponent
    switch (resource.type) {
      case "imagegallery":
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
            onClick={() => props.startTransition()}
          >
            <ResourceItem>
              <ImageResource
                id={resource.image_gallery[0].wordpress_id}
                withCaption={false}
              />
              <ResourceTitleImage> {resource.title} </ResourceTitleImage>
              {resource.author.length > 0 ? <Author> {resource.author} </Author> : ""}
            </ResourceItem>
          </ResourceItemLink>
        )
        break
      case "text":
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
            onClick={() => props.startTransition()}
          >
            <ResourceItem>
              <TextBox>
                <ResourceTitle> {resource.title} </ResourceTitle>
                 {resource.subtitle.length > 0 ? <ResourceTitle> {resource.subtitle} </ResourceTitle> : ""}
                 {resource.author.length > 0 ? <ResourceTitle> {resource.author} </ResourceTitle> : ""}
              </TextBox>
              <ResourceLabel> {resource[language].label} </ResourceLabel>
            </ResourceItem>
          </ResourceItemLink>
        )
        break
      case "image":
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
            onClick={() => props.startTransition()}
          >
            <ResourceItem key={index}>
              <ImageResource id={resource.image} withCaption={false} />
              <ResourceTitleImage> {resource.title} </ResourceTitleImage>
              {resource.author.length > 0 ? <Author> {resource.author} </Author> : ""}
            </ResourceItem>
          </ResourceItemLink>
        )
        break
      case "mp3":
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
            onClick={() => props.startTransition()}
          >
            <ResourceItem key={index}>
              <TextBox>
                <ResourceTitle> {resource.title} </ResourceTitle>
                {resource.author.length > 0 ? <ResourceTitle> {resource.author} </ResourceTitle> : ""}
              </TextBox>
              <ResourceLabel> {resource[language].label} </ResourceLabel>

            </ResourceItem>
          </ResourceItemLink>
        )
        break
      default:
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
            onClick={() => props.startTransition()}
          >
            <ResourceItem key={index}>
              <ResourceTitle> {resource.title} </ResourceTitle>
            </ResourceItem>
          </ResourceItemLink>
        )
        break
    }
    return renderComponent
  }

  return (
    <ResourcesListWrapper>
      {resources.map((resource, index) => createComponent(index))}
    </ResourcesListWrapper>
  )
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
      dispatch({ type: actionTypes.START_TRANSITION}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourcesList)
