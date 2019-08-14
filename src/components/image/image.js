import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// const query = graphql`
//   query {
//     file(relativePath: {eq: "src/images/berlin-heading.svg"}) {

//     }
//   }
// `

const Image = props => {
  return <img src={props.src} alt={props.alt} height="auto" width="auto" />
  // return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image;
