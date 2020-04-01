import React from "react"
import {
  SocialMediaWrapper,
  SocialMediaText,
  SocialMediaLink,
} from "./socialmedia.styles"
import * as actionTypes from "../../store/action"
import { connect } from "react-redux"

export const socialMediaLinks = [
  { name: "facebook", url: "https://www.facebook.com/BerlinBiennale" },
  { name: "instagram", url: "https://www.instagram.com/berlinbiennale/" },
]

const SocialMedia = props => {
  const toggleNewsletterInput = () => {
    props.showModal()
  }
  return (
    <SocialMediaWrapper>
      <div>
        <SocialMediaText onClick={() => toggleNewsletterInput()}>
          newsletter
        </SocialMediaText>
        {socialMediaLinks.map(link => (
          <SocialMediaLink key={link.name} target="_blank" rel="noopener noreferrer" href={link.url}>
            {link.name}
          </SocialMediaLink>
        ))}
      </div>

      {/* {showNewsletterInput ? (
        <NewsletterForm> hello</NewsletterForm>
      ) : (
        <NewsletterForm> thomas </NewsletterForm>
      )} */}
    </SocialMediaWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch({ type: actionTypes.SHOW_MODAL }),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialMedia)
