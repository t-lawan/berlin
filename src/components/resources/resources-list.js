import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import { Color } from "../../index.styles"

const ResourcesListWrapper = styled.div`
  padding: 2em;
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
  console.log(1, props.resources);
  let language = getCurrentLanguageString(props.languages);

  const createComponent = index => {
    const resource = props.resources[index];
    let renderComponent;
    switch (resource.type) {
      case "imagegallery":
        renderComponent = (
          <ResourceItem key={index}>
            <ImageResource
              id={resource.image_gallery[0].wordpress_id}
              withCaption={false}
            />
            <p> {resource.title} </p>
          </ResourceItem>
        )
        break
      case "text":
        renderComponent = (
          <ResourceItem key={index}>
            <TextBox>
              <p> {resource.title} </p>
              <p> {resource.author} </p>
            </TextBox>
            <p> {resource[language].label} </p>

          </ResourceItem>
        )
        break
      default:
        renderComponent = (
          <ResourceItem key={index}>
            <p> {resource.title} </p>
          </ResourceItem>
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
