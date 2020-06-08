import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import { TextBlock } from "../../templates/page.styles"
import { ExternalLink, Color, size } from "../../index.styles"

const VenueItemWrapper = styled.div`
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
      <ImageWrapper >
        <ImageResource
          id={venue.thumbnail_image ? venue.thumbnail_image : 411}
          withCaption={false}
        />
      </ImageWrapper>
      <TextBlock>
        {venue.address.map((address, index) => (
          <VenueAddress key={index}> {`${address.address_line},`}</VenueAddress>
        ))}
        <VenueAddress> {`${venue.plz}`} </VenueAddress>
        <VenueAddress> {` ${venue.city}`}</VenueAddress>
      </TextBlock>

      {venue[language].access_info ? (
        <TextBlock>
              <VenueDescription
          dangerouslySetInnerHTML={{
            __html: venue[language].access_info,
          }}
        />
        </TextBlock>
        ) : null}
      
      
      {venue[language].opening_hours ? (
        <TextBlock>
          <p> {content[language].hours} </p>
          {venue[language].opening_hours.map((hours, index) => (
            <p key={index}> {hours.hours}</p>
          ))}
          </TextBlock>
      ) : null}

      {venue.public_transit ? (
        <TextBlock>
          <p> {content[language].directions} </p>
          {venue.public_transit.map((direction, index) => (
            <p key={index}> {direction.transit_option}</p>
          ))}
          <p><VenueLink
          colour={Color.red}
          href={venue.google_map_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content[language].link_to_map}
        </VenueLink></p>
          <p hidden={!venue.wheelchair_access}>
          {" "}
          {content[language].wheelchair_access}{" "}
          </p>

        </TextBlock>
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
