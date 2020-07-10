import React from "react"
import { PageWrapperRes, TwoColumnPageWrapper, ResourcePublisherLink} from "../../templates/page.styles"
import { Color, size } from "../../index.styles"
import { getCurrentLanguageString } from "../../utility/helper";
import ResourceNavigator from "./resource-navigator";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import striptags from "striptags";
import styled from 'styled-components'
const VideoContainer = styled.div`
  position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    margin-top:2em;
    width: 100%;
    height: auto;
    > iframe {
      position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
`
const ResourceTitle = styled.h1`
  line-height: 1.4;
  @media (max-width: ${size.tabletL}) {
    font-size: 1.2em;
    margin: 0.3em 0 1.0em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.0em;
    margin: 0em ;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
  }
`
const Author = styled.p`
  margin-bottom:0;
`
const Year = styled.p`
  margin-bottom: 0;
  margin-top: 1em;
`
const ResourceVideo = props => {
    let language = getCurrentLanguageString(props.languages);
    let r = props.resource;
  return (
    <PageWrapperRes colour={Color.yellow}>
        <ResourceNavigator id={r.id} />
          <VideoContainer
          dangerouslySetInnerHTML={{
            __html: r.video,
          }}
          />
        <TwoColumnPageWrapper>
            <div>
                <ResourceTitle
                  dangerouslySetInnerHTML={{
                    __html: striptags(r.title, ['em']),
                  }}
                />
                
                {r.author.length > 0 ? <Author> {r.author} </Author> : ""} 
                <Year> {r[language].year}</Year>
                <ResourcePublisherLink hidden ={!r.external_url_label} target="_blank" rel="noopener noreferrer" href={r.external_url}>
                  {" "}
                  {r.external_url_label}
                </ResourcePublisherLink>
            </div>

            <div>
                <div
                dangerouslySetInnerHTML={{
                  __html: r.description,
                }}
             />
            </div>
        </TwoColumnPageWrapper>
    </PageWrapperRes>
    )
}

ResourceVideo.propTypes = {
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
)(ResourceVideo)
