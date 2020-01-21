import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import {
  PageWrapperRes,
  TwoColumnPageWrapper,
  ResourcePublisherLink,
  TextBlock,
  PressArrowDown,
} from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color, size, ExternalLink } from "../../index.styles"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import RelatedResources from "./related-resources"
import styled from "styled-components"
import striptags from "striptags"
import ImageResource from "../../partials/ImageResource"
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

const ResourceTextDiv = styled.div`
  a {
    border-bottom: solid thin;
    border-color: ${Color.red};
  }
`

const ResourceTitle = styled.h1`
  font-size: 1.8em;
  line-height: 1.2;
`
const ResourceText = props => {
  const language = getCurrentLanguageString(props.languages)
  const r = props.resource;
  return (
    <PageWrapperRes colour={Color.yellow}>
      <ResourceNavigator hidden={!r.id} id={r.id} />
      <TwoColumnPageWrapper>
        <div>
          {r.thumbnail_image ? (
            <ImageResource id={r.thumbnail_image} withCaption={false} />
          ) : null}
          <TextBlock>

          {r.thumbnail_image ? (
              <ExternalLink id={r.text_based_resource[0].document_upload}>
                <PressArrowDown icon={faLongArrowAltDown} />
                <span> Download</span>{" "}
              </ExternalLink>
          ) : null}
            <p hidden={r.text_based_resource[0].document_language.length === 0}>
              {" "}
              {language === "EN" ? "Language" : "Sprache"}:{" "}
              {r.text_based_resource[0].document_language}
            </p>
          </TextBlock>
        </div>
        <div>
          <ResourceTitle
            dangerouslySetInnerHTML={{
              __html: striptags(r.title, ["em"]),
            }}
          />

          {r.author.length > 0 ? <p> {r.author} </p> : ""}
          <p>
            In:{" "}
            <ResourcePublisherLink
              hidden={r.publisher.title}
              target="_blank"
              href={r.publisher.title}
            >
              {r.publisher.title}
            </ResourcePublisherLink>
          </p>
          <p> {r[language].year}</p>
          <ResourceTextDiv
            dangerouslySetInnerHTML={{
              __html: r.text_based_resource[0].free_text_entry,
            }}
          />
        </div>
      </TwoColumnPageWrapper>
      <RelatedResources ids={[r.id]} />
    </PageWrapperRes>
  )
}

const getRandomIds = (resources, numberOfIds) => {
  let ints = []
  for (let i = 0; i < numberOfIds; i++) {
    ints.push(resources[Math.floor(Math.random() * resources.length)].id)
  }
  return ints
}

ResourceText.propTypes = {
  resource: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(ResourceText)
