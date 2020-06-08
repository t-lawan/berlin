import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Color, size } from "../../index.styles"
import ImageGalleryResource from "../../partials/ImageGalleryResource"
import { getCurrentLanguageString } from "../../utility/helper"

const PublicationItemWrapper = styled.div`
  margin-bottom: 3rem;

  @media (min-width: ${size.laptop}) {
    padding-top: calc(97px + 2.5em);
    margin-top: 225px;
    padding-bottom: -110px;
    :first-child {
      margin-top: calc(-97px - 2.5em);
    }
  }

  @media (min-width: ${size.laptopL}) {
    padding-top: calc(110px + 2.7em);
    padding-bottom: -110px; 
    :first-child {
      margin-top: calc(-110px - 2.7em);

    }
  }
`

const PublicationDescription = styled.div`
  a {
    font-size: 1em;
    border-bottom: solid 1px ${Color.red};
    transition: all 0.2s ease-in-out;
    :hover {
      color: ${Color.red};
    }
  }
`
const PublicationImageWrapper = styled.div`
  /* width: inherit; */
`

const PublicationItem = props => {
  let language = getCurrentLanguageString(props.languages)

  let publication = props.publication

  return (
    <PublicationItemWrapper id={`pub-${publication.slug}`}r>
      <PublicationImageWrapper >
        <ImageGalleryResource ids={publication.image_gallery} />
      </PublicationImageWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: publication[language].title,
        }}
      />
      <PublicationDescription
        dangerouslySetInnerHTML={{
          __html: publication[language].description,
        }}
      />
    </PublicationItemWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    publications: state.publications,
  }
}

export default connect(mapStateToProps, null)(PublicationItem)
