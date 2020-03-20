import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
import { startTransition } from "../../store/action"
import styled from "styled-components"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { Color } from "../../index.styles"
import PropTypes from "prop-types"

const PubLink = styled.div`
    color: ${props => props.isSelected ? `${Color.red}` : 'inherit'};
`
const PublicationNavbar = props => {
  const language = getCurrentLanguageString(props.languages)
  
  return (
    <>
      {props.publications.map((pub, index) => (
        <Link
          key={index}
          to={createPath(language, `publication/${pub.slug}`)}
          onClick={() => props.startTransition()}
          activeStyle={{ color: Color.red }}
        >
          {" "}
          <PubLink
            isSelected={props.currentSlug === pub.slug}
            dangerouslySetInnerHTML={{
              __html: pub[language].title,
            }}
          />
        </Link>
      ))}
    </>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    publications: state.publications,
  }
}

PublicationNavbar.propTypes = {
  currentSlug: PropTypes.string,
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch(startTransition()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicationNavbar)
