import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import {
  PageWrapperRes,
  TwoColumnPageWrapper,
  ResourcePublisherLink,
} from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color, size, ExternalLink } from "../../index.styles"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import RelatedResources from "./related-resources"
import styled from "styled-components"
import striptags from "striptags"
import ImageResource from "../../partials/ImageResource"
import { getDocument } from "../../store/selector"

const ResourceTextDiv = styled.div`
  a {
    border-bottom: solid thin;
    font-size: 1em;
    border-color: ${Color.red};
    transition: all 0.2s ease-in-out;
    :hover {
      color: ${Color.red};
    }
  }
`

const ResourceTitle = styled.h1`
  line-height: 1.2;
  @media (max-width: ${size.tabletL}) {
    font-size: 1.2em;
    margin: 0.3em 0 1em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.6em;
    margin-top: -0.7em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.7em;
    margin-top: -0.9em;
  }
`
const Mobhide = styled.div`
  @media (max-width: ${size.tablet}) {
    display: none;
  }
`
const Dthide = styled.div`
  @media (min-width: ${size.laptop}) {
    display: none;
  }
  line-height: 1.5;
  > a > span {
    font-size: 0.95em;
  }
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
`
const Author = styled.p`
  margin-bottom: 0;
  > em > a {
    font-size: 1em;
  }
  > a {
    font-size: 1em;
  }
`
const ArrowDown = styled.span`
background-image: url(https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/pdf_icon.svg);
    background-repeat: no-repeat;
    background-position: -3px 6px;
    background-size: 18px 13px;
    padding-left: 17px;
`


const ResourceText = props => {
  const language = getCurrentLanguageString(props.languages)
  const r = props.resource
  let doc
  if (r.text_based_resource[0].document_upload) {
    doc = getDocument(props.documents, r.text_based_resource[0].document_upload)
  }
  return (
    <PageWrapperRes colour={Color.yellow}>
      <ResourceNavigator hidden={!r.id} id={r.id} />
      <TwoColumnPageWrapper>
        <Mobhide>
          {r.thumbnail_image ? (
            <ImageResource id={r.thumbnail_image} withCaption={false} />
          ) : null}
          {doc ? (
            <ExternalLink href={doc.url} target="__blank">
              <ArrowDown />
              <span> {r.text_based_resource[0].document_download_label} </span>
            </ExternalLink>
          ) : null}

          <p hidden={r.text_based_resource[0].document_language.length === 0}>
            {" "}
            {language === "EN" ? "Language" : "Sprache"}:{" "}
            {r.text_based_resource[0].document_language}
          </p>
        </Mobhide>
        <div>
          <ResourceTitle
            dangerouslySetInnerHTML={{
              __html: striptags(r.title, ["em"]),
            }}
          />

          {r.author.length > 0 ? <Author> {r.author} </Author> : ""}
          <Author hidden={!r.publisher.title}>
            In:{" "}<em>
            <ResourcePublisherLink
              hidden={!r.publisher.title}
              target="_blank"
              href={r.publisher.title}
            >
              {r.publisher.title}
            </ResourcePublisherLink></em>
          </Author>
          <p> {r[language].year}</p>
          <Dthide>
            {doc ? (
              <ExternalLink href={doc.url} target="__blank" rel="noopener noreferrer">
                <ArrowDown />
                <span>
                  {" "}
                  {r.text_based_resource[0].document_download_label}{" "}
                </span>
              </ExternalLink>
            ) : null}

            <p hidden={r.text_based_resource[0].document_language.length === 0}>
              {" "}
              {language === "EN" ? "Language" : "Sprache"}:{" "}
              {r.text_based_resource[0].document_language}
            </p>
            {/* <ImageResource id={r.thumbnail_image} withCaption={false} /> */}
            {/* <ExternalLink id={r.text_based_resource[0].document_upload}>
          <PressArrowDown icon={faLongArrowAltDown} />
          <span> Download</span>{" "}
        </ExternalLink> */}
            {/* <p hidden={r.text_based_resource[0].document_language.length === 0}>
              {" "}
              {language === "EN" ? "Language" : "Sprache"}:{" "}
              {r.text_based_resource[0].document_language}
            </p> */}
          </Dthide>
          <ResourceTextDiv
            dangerouslySetInnerHTML={{
              __html: r.text_based_resource[0].free_text_entry,
            }}
          />
        </div>
      </TwoColumnPageWrapper>
      <RelatedResources border={true} ids={[r.id]} />
    </PageWrapperRes>
  )
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
