import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Color, size, keyFrameExperienceImage, showDisplayForTablet, hideDisplayForTablet } from "../../index.styles"
import * as actionTypes from "../../store/action"

const ExperiencePageWrapper = styled.div`
  z-index: 5000;
  left: 5%;
  width: calc(100% - 10%);
  height: 100vh;
  background: #fbf95d;
  position: fixed;
  display: ${props => (props.show ? "inherit" : "none")};
  @media (max-width: ${size.mobileM}) {
    width:100%;
    left: 0;
    bottom:45px;
    height:calc(100vh - 87px);
    top:40px;
  }
  @media (min-width: ${size.mobileL}) {
    width:100%;
    left: 0;
    bottom:0px;
    height:calc(100vh - 40px);
    top:40px;
  }
  @media (min-width: ${size.laptop}) {
    left: 5%;
    top:0;
    width: calc(100% - 10%);
    height: 100vh;
  }
`

const ExperienceImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  /* display:block; */
  align-items: center;
  justify-content: center;
  @media (max-width: ${size.mobileM}) {
    margin-top:0px;
    top: 50%;
    width:60%;
    display: block;
    position: absolute;
    height: auto;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  @media (min-width: ${size.mobileL}) {
    margin-top:0px;
    top: 50%;
    width:45%;
    display: block;
    position: absolute;
    height: auto;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  @media (min-width: ${size.laptop}) {
    width:100%;
    display: flex;
  flex-direction: column;
  height: 80vh;
  /* display:block; */
  align-items: center;
  justify-content: center;
  }
`


const CloseImage = styled.img`
  width: 3%;
  align-self: flex-end;
  @media (max-width: ${size.tablet}) {
    width: 5%;
  }
  @media (max-width: ${size.mobileM}) {
    width: 7%;
  }
`
const TopRow = styled.div`
  display: flex;
  padding: 0.7em;
  flex-direction: row-reverse;
  > img {
    margin-bottom:0;
  }
`
const ExperienceImage = styled.img`
  width: 40%;
  align-self: center;
  :nth-child(3) {
    animation: ${keyFrameExperienceImage} 0.2s ease-in-out 0s forwards;
    margin-top: 3em;
    opacity: 0;
    margin-bottom: 0.3em;
    animation-delay: 0.8s;
  }
  :nth-child(5) {
    animation: ${keyFrameExperienceImage} 0.2s ease-in-out 0s forwards;
    margin-bottom: 0.65em;
    opacity: 0;
    animation-delay: 1.2s;
  }
  :nth-child(7) {
    animation: ${keyFrameExperienceImage} 0.2s ease-in-out 0s forwards;
    margin-bottom: 0.65em;
    opacity: 0;
    animation-delay: 1.8s;
  }
  :nth-child(9) {
    animation: ${keyFrameExperienceImage} 0.2s ease-in-out 0s forwards;
    margin-top: 3em;
    opacity: 0;
    animation-delay: 2.4s;
  }
  ${hideDisplayForTablet};
`

const ExperienceImageMob = styled.img`
  width: 90%;
  align-self: center;
  :nth-child(4) {
    animation: ${keyFrameExperienceImage} 0.2s ease-in-out 0s forwards;
    margin-top: 0em;
    opacity: 0;
    margin-bottom: 1em;
    animation-delay: 0.8s;
  }
  :nth-child(6) {
    animation: ${keyFrameExperienceImage} 0.2s ease-in-out 0s forwards;
    margin-bottom: 0.65em;
    opacity: 0;
    animation-delay: 1.2s;
  }
  :nth-child(8) {
    animation: ${keyFrameExperienceImage} 0.2s ease-in-out 0s forwards;
    margin-bottom: 0.65em;
    opacity: 0;
    animation-delay: 1.8s;
  }
  :nth-child(10) {
    animation: ${keyFrameExperienceImage} 0.2s ease-in-out 0s forwards;
    margin-top: 1em;
    margin-bottom:0;
    opacity: 0;
    animation-delay: 2.4s;
  }
  ${showDisplayForTablet};
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
      //this.props.hideOverlay();
    }, 10000);
  }

  experiences = [
    {
      id: 1,
      url:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_2.svg",
      urlmob:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/smartphone_en_2.svg",
    },
    {
      id: 2,
      url:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_3.svg",
      urlmob:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/smartphone_en_3.svg",
    },
    {
      id: 3,
      url:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_4.svg",
      urlmob:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/smartphone_en_4.svg",
    },
    {
      id: 4,
      url:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_5.svg",
      urlmob:
        "https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/smartphone_en_5.svg",
    },
  ]

  closeExperiencePage = () => {
    this.props.hideOverlay();
  }
  render() {
    return (
      <ExperiencePageWrapper
        onClick={this.closeExperiencePage}
        show={this.props.showOnHomePage && this.props.show_overlay}
      >
        <TopRow>
          <CloseImage
            onClick={this.closeExperiencePage}
            src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/close_overlay.svg"
          />
        </TopRow>

        <ExperienceImagesContainer>
          <ExperienceImage hideInTablet={true} src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/vorschaltseite_animiert_1.svg" />
          <ExperienceImageMob showInTablet={true} src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/smartphone_en_1.svg" />
          {this.experiences.map((experience, index) => (
            <React.Fragment key={index}>
            <ExperienceImage hideInTablet={true} src={experience.url} />
            <ExperienceImageMob showInTablet={true} key={index} src={`${experience.urlmob}`} />
            </React.Fragment>
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
