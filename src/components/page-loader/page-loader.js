import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import PageLoaderLogo from "../../images/transition.gif"
import { Color } from "../../index.styles"
import { setFreshLoadToFalse } from "../../store/action"

const PageLoaderWrapper = styled.div`
  background: ${Color.yellow};
  width: 100%;
  height: 100%;
  z-index: 7000;
  position: fixed;
  display: ${props => (props.show ? "inherit" : "none")};
`

const PageLoaderImage = styled.img`
  display: block;
  width: 120px !important;
  margin: auto;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
`

class PageLoader extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.setFreshLoadToFalse();
        }, 2000)
    }
  render() {
    return (
      <PageLoaderWrapper show={this.props.freshLoad && !this.props.isHome}>
        <PageLoaderImage src={PageLoaderLogo} />
      </PageLoaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    freshLoad: state.freshLoad,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFreshLoadToFalse: () => dispatch(setFreshLoadToFalse()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLoader)
