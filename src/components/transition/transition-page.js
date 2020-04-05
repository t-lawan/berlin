import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import TransitionLogo from '../../images/bb1_loader_white.gif';
import { stopTransition } from "../../store/action";
import { size } from "../../index.styles";
let transitionName = "transition-page"

const TransitionPageWrapper = styled.div`
  z-index: 4500;
  width: calc(66.66% - 1px);
  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }
  height: 100%;
  background: white;
  position: fixed;
  text-align: center;
  padding: 5rem;
  display: ${props => (props.show ? "block" : "none")};
  transition: opacity 500ms ease-in-out;
  &.${transitionName}-enter {
    opacity: 0 !important;
  }

  &.${transitionName}-enter-active {
    opacity: 1 !important;
  }

  &.${transitionName}-exit {
    opacity: 1 !important;
  }

  &.${transitionName}-exit-active {
    opacity: 0 !important;
  }
`

const TransitionImage = styled.img`
  /* bring your own prefixes */
  /* transform: translate(-50%, -50%); */
  width: 120px !important;
  z-index: inherit;
`

class TransitionPage extends React.Component {
  
  hideTransition = () => {
    setTimeout(() => {
      this.props.stopTransition();
    }, 300)
  }
  render() {
    return (
      <CSSTransition
        in={this.props.isInTransition}
        timeout={3000}
        classNames={transitionName}
        mountOnEnter
        unmountOnExit
      >
        <TransitionPageWrapper show={this.props.isInTransition}>
          {/* <TransitionImageContainer> */}
          <TransitionImage onLoad={() => this.hideTransition()} src={TransitionLogo} />
          {/* </TransitionImageContainer> */}
        </TransitionPageWrapper>
      </CSSTransition>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    stopTransition: () =>
      dispatch(stopTransition()),
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    active_experience: state.active_experience,
    isInTransition: state.isInTransition,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransitionPage)
