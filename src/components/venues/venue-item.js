import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import ImageGalleryResource from "../../partials/ImageGalleryResource"
import { TextBlock } from "../../templates/page.styles"
import { ExternalLink, Color, size } from "../../index.styles"

const VenueItemWrapper = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: ${size.laptop}) {
    padding-top: calc(97px + 2.5em);
    margin-bottom: -6rem;
    :last-child {
    margin-bottom: 3rem;
    }
    margin-top: 0px;
    :first-child {
    margin-top: calc(-97px - 2.5em);
    }
  }

  @media (min-width: ${size.laptopL}) {
    padding-top: calc(110px + 2.7em);
    :first-child {
    margin-top: calc(-110px - 2.7em);
    }
  }
`

const VenueLink = styled(ExternalLink)`
  border-bottom: solid 1px ${Color.red};
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${Color.red}; 
  }
`

const VenueDescription = styled.div``

const ImageWrapper = styled.div`
  padding-bottom: 1rem;
`
const VenueAccess = styled.p`
margin-top: 0.7em !important;
`
const VenueAddress = styled.p`
  display: inline-block;
  padding-right: 0.2rem !important;
`
const VenueItem = props => {
  let language = getCurrentLanguageString(props.languages)
  let venue = props.venue;
  return (
    <VenueItemWrapper id={`ven-${venue.slug}`}>
      <p>{venue[language].venue_name}</p>
      
      {venue.image_gallery ? (
          <ImageWrapper >
            <ImageGalleryResource ids={venue.image_gallery} />
          </ImageWrapper>
        ) : null}
      
      <TextBlock>
        <VenueDescription
          dangerouslySetInnerHTML={{
            __html: venue[language].venue_description,
          }}
        />
      </TextBlock>
      
    </VenueItemWrapper>
  )
}

let content = {
  EN: {
    directions: "Access",
    wheelchair_access: "Wheelchair accessible",
    link_to_map: "Directions",
    hours: "Opening hours",
  },
  DE: {
    directions: "Anfahrt",
    wheelchair_access: "Barrierefrei",
    link_to_map: "Karte",
    hours: "Öffnungszeiten",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(VenueItem)
