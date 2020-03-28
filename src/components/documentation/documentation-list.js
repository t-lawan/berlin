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
import striptags from "striptags"
import { UpcomingEventsContent } from "../events/upcomingevents";
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
const DocTitle = styled.div`
  font-size: 1em;
  margin: 0em;
  line-height: 1.2;
  transition: all 0.2s ease-in-out;
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
    imagegallery: "Bilder",
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
              <DocTitle
                dangerouslySetInnerHTML={{
                  __html: striptags(event[language].event_title, ["em"]),
                }}
              />
              
              <div
                dangerouslySetInnerHTML={{
                  __html: event[language].event_subtitle,
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
