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
  z-index: 999999;
  position: fixed;
  display: ${props => (props.show ? "inherit" : "none")};
`

const PageLoaderImage = styled.img`
  display: block;
  width: 200px !important;
  margin: auto;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
`

class PageLoader extends React.Component {
    componentDidMount() {
      this.hidePageLoader()
    }

    hidePageLoader = () => {
      setTimeout(() => {
        this.props.setFreshLoadToFalse();
    }, 1000)
    }

    componentDidUpdate(prevProps) {
      if(this.props.freshLoad !== prevProps.freshLoad) {
        this.hidePageLoader();
      }
    }
  render() {
    return (
      <PageLoaderWrapper show={this.props.freshLoad}>
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
