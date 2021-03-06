import React from "react"
import { LogoWrapper } from "./logo.styles"
import { connect } from "react-redux"
import { getDocument } from "../../store/selector"

const Logo = props => {
  let experience = props.experience
  let exhibition = props.exhibitions.filter(ex => {
    return ex.experience == experience
  })[0]
  let image = getDocument(props.documents, exhibition.animation)
  return (
    <>
      {image ? (
        <LogoWrapper
          style={{
            backgroundImage: `url(${image.publicUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></LogoWrapper>
      ) : null}
    </>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    exhibitions: state.exhibitions,
    documents: state.documents,
  }
}

export default connect(mapStateToProps, null)(Logo)
