import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import {
  getCurrentLanguageString,
  createPath,
  createProperty,
} from "../../utility/helper"
import { Color } from "../../index.styles"
import { Link } from "gatsby"
import { getItem } from "../../store/selector"
import { DateManager } from "../../utility/date"
import { UpcomingEventsContent } from "../events/upcomingevents";
import { startTransition } from "../../store/action";

const DocumentationListWrapper = styled.div`
  padding: 0.5rem;
`
const DocumentationItem = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  padding: 0.5rem 0;
`

const DocumentationLink = styled(Link)``
const DocumentationTextBox = styled.div`
  p {
      margin: 0;
  }
  :hover {
    color: ${Color.red};
  }
`

let content = {
  EN: {
    video: "Video",
    mp3: "Audio",
    imagegallery: "Image",
    text: "Text",
  },
  DE: {
    video: "Video",
    mp3: "Audio",
    imagegallery: "Image",
    text: "Text",
  },
}

const DocumentationList = props => {
  let language = getCurrentLanguageString(props.languages)
  let documentation = props.documentation

  const createComponent = (doc, index) => {
    let renderComponent
    let hasEventRelation = doc.related_events.length > 0
    if (hasEventRelation) {
      let event = getItem(props.events, doc.related_events[0])
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
                  __html: event[language].event_title,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: event[language].event_subtitle,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].doc_credits,
                }}
              />
              <p> {DateManager.toDatetring(event.dates[0].start_date)} </p>
              <p>{event.language == "other" ? event[language].other_language : UpcomingEventsContent[language][event.language]} </p>
            </DocumentationTextBox>
          </DocumentationItem>
        </DocumentationLink>
      )
    } else {
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
                  __html: doc[language].doc_credits,
                }}
              />
            </DocumentationTextBox>
          </DocumentationItem>
        </DocumentationLink>
      )
    }

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
