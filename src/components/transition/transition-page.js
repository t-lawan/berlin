import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

const TransitionPageWrapper = styled.div`
  z-index: 4500;
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  text-align: center;
  display: ${props => (props.show ? "block" : "none")};
`

const TransitionImageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: inherit;
`

const TransitionImage = styled.img`

  /* bring your own prefixes */
  /* transform: translate(-50%, -50%); */
  width: 20% !important;

  z-index: inherit;
`
class TransitionPage extends React.Component {
  render() {
    return (
      <TransitionPageWrapper show={this.props.isInTransition}>
        {/* <TransitionImageContainer> */}
            <TransitionImage src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/waitaminute1.gif" />
        {/* </TransitionImageContainer> */}
      </TransitionPageWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    active_experience: state.active_experience,
    isInTransition: state.isInTransition,
  }
}

export default connect(mapStateToProps, null)(TransitionPage)
