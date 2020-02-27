import React from "react"
import { PageWrapperRes, TwoColumnPageWrapper } from "../../templates/page.styles"
import { Color, size } from "../../index.styles"
import { getCurrentLanguageString } from "../../utility/helper";
import ResourceNavigator from "./resource-navigator";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import striptags from "striptags";

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
  line-height: 1.2;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2em;
    margin: 0.3em 0 1.0em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.03rem;
    margin: 0em;
  }
`
const Author = styled.p`
  margin-bottom:0;
`
const ResourceVideo = props => {
    let language = getCurrentLanguageString(props.languages);
    let r = props.resource;

  return (
    <PageWrapperRes color={Color.yellow}>
        <ResourceNavigator id={r.id} />
          <VideoContainer
          dangerouslySetInnerHTML={{
            __html: props.r.video,
          }}
          />
        <TwoColumnPageWrapper>
            <div>
                <ResourceTitle
                  dangerouslySetInnerHTML={{
                    __html: striptags(r.title, ['em']),
                  }}
                />
                {r.label.length > 0 ? <Author> {r[language].label} </Author> : ""} 
                {r.author.length > 0 ? <Author> {r.author} </Author> : ""} 
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

const getRandomIds = (resources, numberOfIds) => {
    let ints = []
    for (let i = 0; i < numberOfIds; i++) {
      ints.push(resources[Math.floor(Math.random() * resources.length)].id)
    }
    return ints
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
