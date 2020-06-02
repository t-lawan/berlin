import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import { TextBlock } from "../../templates/page.styles"
import { ExternalLink, Color } from "../../index.styles";

const VenueItemWrapper = styled.div`
  margin-bottom: 3rem;
`

const VenueLink = styled(ExternalLink)`
  padding-bottom: 1em;
`

const ImageWrapper = styled.div`
  padding-bottom: 1rem;
`

const VenueAddress = styled.p`
  display: inline-block;
  padding-right:0.2rem !important;
`
const VenueItem = props => {
  let language = getCurrentLanguageString(props.languages)
  let venue = props.venue
  console.log('VEN|UE', venue)
  return (
    <VenueItemWrapper>
      <p>{venue[language].venue_name}</p>
      <ImageWrapper id={`ven-${venue.slug}`}>
        <ImageResource id={venue.thumbnail_image ? venue.thumbnail_image : 411} withCaption={false} />
      </ImageWrapper>
      <TextBlock>
        {venue.address.map((address, index) => (
          <VenueAddress key={index}> {`${address.address_line},`}</VenueAddress>
        ))}
        <VenueAddress> {`${venue.plz}, `} </VenueAddress>
        <VenueAddress> {` ${venue.city}`}</VenueAddress>
      </TextBlock>
      <p> {content[language].directions} </p>
      {venue.public_transit ? <TextBlock>
        {venue.public_transit.map((direction, index) => (
          <p key={index}> {direction.transit_option}</p>
        ))}
      </TextBlock> : null}
      <TextBlock>
        <p hidden={!venue.wheelchair_access}> {content[language].wheelchair_access} </p>
      </TextBlock>
      <TextBlock>
        <VenueLink
          colour={Color.red}
          href={venue.google_map_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content[language].link_to_map}
        </VenueLink>
      </TextBlock>
    </VenueItemWrapper>
  )
}

let content = {
  EN: {
    directions: "Directions",
    wheelchair_access: "Wheelchair access",
    link_to_map: "Link to map"
  },
  DE: {
    directions: "Directions",
    wheelchair_access: "Wheelchair access",
    link_to_map: "Link to map"
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(VenueItem)
