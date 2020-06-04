import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import {
  getCurrentLanguageString,
  createPath,
} from "../../utility/helper"
import { Color, size } from "../../index.styles"
import { Link } from "gatsby"
import { startTransition } from "../../store/action";

const DocumentationListWrapper = styled.div`
  padding: 0;
   @media (max-width: ${size.tablet}) {
    margin-top: -1.5em;
   }
`
const DocumentationItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  > p {
    font-size: 1em;
    @media (max-width: ${size.tablet}) {
      hyphens: auto;
    }
  }
  @media (min-width: ${size.mobileS}) {
    padding: 0em 0 1em;
    column-gap: 0.5em;
  }
  @media (min-width: ${size.laptop}) {
    padding: 0em 0 1.5em;
    column-gap: 0em;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 0em 0 1.75em;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 0em 0 2em;
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
  let documentation = props.documentation.filter((d) => {
    return d.list_on_media_overview;
  }).sort((a, b) => {
    return new Date(b.published_date).valueOf() - new Date(a.published_date).valueOf();
  })
  const createComponent = (doc, index) => {
    let renderComponent;
      
      renderComponent = (
        <DocumentationLink
          to={createPath(language, `documentation/${doc.slug}`)}
          onClick={() => props.startTransition()}
          key={index}
        >
          <DocumentationItem>
            <p> {doc[language].document_type_label} </p>
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
