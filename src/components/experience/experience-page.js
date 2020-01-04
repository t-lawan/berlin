import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Color, size } from "../../index.styles"
import * as actionTypes from "../../store/action"

const ExperiencePageWrapper = styled.div`
  z-index: 5000;
  width: 100%;
  height: 100%;
  background: ${Color.yellow};
  position: fixed;
  display: ${props => (props.show ? "inherit" : "none")};
`

const ExperienceImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CloseImage = styled.img`
  width: 3%;
  align-self: flex-end;
  @media (max-width: ${size.tablet}) {
    width: 5%;
  }
`
const TopRow = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: row-reverse;
`
const ExperienceImage = styled.img`
  width: 30%;
  align-self: center;

  @media (max-width: ${size.tablet}) {
    width: 50%;
  }
`

class ExperiencePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      // this.closeExperiencePage();
      this.props.hideOverlay();
    }, 10000);
  }

  experiences = [
    {
      id: 1,
      url:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_2.svg",
    },
    {
      id: 2,
      url:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_3.svg",
    },
    {
      id: 3,
      url:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_4.svg",
    },
    {
      id: 4,
      url:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_5.svg",
    },
  ]

  closeExperiencePage = () => {
    this.setState({
      show: false,
    })
  }
  render() {
    return (
      <ExperiencePageWrapper
        onClick={this.closeExperiencePage}
        show={this.state.show && this.props.showOnHomePage && this.props.show_overlay}
      >
        <TopRow>
          <CloseImage
            onClick={this.closeExperiencePage}
            src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/close_overlay.svg"
          />
        </TopRow>

        <ExperienceImagesContainer>
          <ExperienceImage src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_1.svg" />
          {this.experiences.map((experience, index) => (
            <ExperienceImage key={index} src={experience.url} />
          ))}
        </ExperienceImagesContainer>
      </ExperiencePageWrapper>
    )
  }
}

ExperiencePage.propTypes = {
  hideInMobile: PropTypes.bool,
  showInMobile: PropTypes.bool,
  showOnHomePage: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    active_experience: state.active_experience,
    show_overlay: state.show_overlay
  }
}
const mapDispatchToProps = dispatch => {
  return {
    hideOverlay:() => {
      dispatch({type: actionTypes.HIDE_OVERLAY})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperiencePage)
