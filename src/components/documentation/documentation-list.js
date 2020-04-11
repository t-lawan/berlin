import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import {
  getCurrentLanguageString,
  createPath,
} from "../../utility/helper"
import { Color } from "../../index.styles"
import { Link } from "gatsby"
import { startTransition } from "../../store/action";

const DocumentationListWrapper = styled.div`
  padding: 0;
`
const DocumentationItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  padding: 0em 0 2em;
  > p {
    font-size: 1em;
  }
`

const DocumentationLink = styled(Link)`
> p {
  font-size: 1em;
}
`
const DocumentationTextBox = styled.div`
  p {
      margin: 0;
      font-size: 1em;
      transition: all 0.2s ease-in-out;
  }
  :hover {
    color: ${Color.red};
  }
`

let content = {
  EN: {
    video: "Video",
    mp3: "Audio",
    imagegallery: "Images",
    text: "Text",
  },
  DE: {
    video: "Video",
    mp3: "Audio",
    imagegallery: "Fotos",
    text: "Text",
  },
}

const DocumentationList = props => {
  let language = getCurrentLanguageString(props.languages)
  let documentation = props.documentation

  const createComponent = (doc, index) => {
    let renderComponent;
    
      renderComponent = (
        <DocumentationLink
          to={createPath(language, `documentation/${doc.slug}`)}
          onClick={() => props.startTransition()}
        >
          <DocumentationItem key={index}>
            <p> {content[language][doc.type]} </p>
            <DocumentationTextBox>
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].title,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].subtitle,
                }}
              />
              
            </DocumentationTextBox>
          </DocumentationItem>
        </DocumentationLink>
      )
    

    return renderComponent
  }
  return (
    <DocumentationListWrapper>
      {documentation.map((doc, index) => createComponent(doc, index))}
    </DocumentationListWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    resources: state.resources,
    documentation: state.documentation,
    events: state.events,
  }
}

const mapDispatchToProps = dispatch => {
    return {
      startTransition: () =>
        dispatch(startTransition()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DocumentationList)
