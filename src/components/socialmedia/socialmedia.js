import React from "react"
import {
  SocialMediaWrapper,
  SocialMediaText,
  SocialMediaLink,
  NewsletterForm,
} from "./socialmedia.styles"

const socialMediaLinks = [
  { name: "facebook", url: "https://www.facebook.com/" },
  { name: "instagram", url: "https://www.instagram.com/" },
]

const SocialMedia = props => {
  let showNewsletterInput = false
  const toggleNewsletterInput = () => {
    showNewsletterInput = !showNewsletterInput
    console.log(showNewsletterInput);
  }
  return (
    <SocialMediaWrapper>
      <div>
        <SocialMediaText onClick={toggleNewsletterInput}>
          newsletter
        </SocialMediaText>
        {socialMediaLinks.map(link => (
          <SocialMediaLink key={link.name} target="_blank" href={link.url}>
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

export default SocialMedia
