import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import { Color } from "../../index.styles"
import { Link } from "gatsby"
const ResourcesListWrapper = styled.div`
  padding: 2em;
`

const ResourceTitle = styled.p`

`

const ResourceItemLink = styled(Link)`
  text-decoration: none;
  :hover {
    ${ResourceTitle} {
      color: ${Color.red};
    }
  }
`

const ResourceItem = styled.div`
  padding-top: 1em;
  color: black;
  border-bottom: 1px solid black;
`

const TextBox = styled.div`
  padding: 1em 0.75em;
  background: ${Color.yellow};
  border: 1px solid black;
  margin-bottom: 1rem;
`
const ResourcesList = props => {
  let language = getCurrentLanguageString(props.languages);
  const createComponent = index => {
    const resource = props.resources[index]
    let renderComponent
    switch (resource.type) {
      case "imagegallery":
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
          >
            <ResourceItem>
              <ImageResource
                id={resource.image_gallery[0].wordpress_id}
                withCaption={false}
              />
              <ResourceTitle> {resource.title} </ResourceTitle>
            </ResourceItem>
          </ResourceItemLink>
        )
        break
      case "text":
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
          >
            <ResourceItem>
              <TextBox>
                <ResourceTitle> {resource.title} </ResourceTitle>
                <p> {resource.author} </p>
              </TextBox>
              <p> {resource[language].label} </p>
            </ResourceItem>
          </ResourceItemLink>
        )
        break
      case "image":
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
          >
            <ResourceItem key={index}>
              <ImageResource id={resource.image} withCaption={false} />
              <ResourceTitle> {resource.title} </ResourceTitle>
            </ResourceItem>
          </ResourceItemLink>
        )
        break
      default:
        renderComponent = (
          <ResourceItemLink
            to={createPath(language, `resource/${resource.slug}`)}
            key={index}
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
      {props.resources.map((resource, index) => createComponent(index))}
    </ResourcesListWrapper>
  )
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
)(ResourcesList)
