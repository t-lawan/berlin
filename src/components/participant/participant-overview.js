import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { TwoColumnPageWrapper, PageTitle } from "../../templates/page.styles"
import {
  capitalise,
  createPath,
  getCurrentLanguageString,
} from "../../utility/helper"
import scrollIntoView from "scroll-into-view-if-needed"
import { Link } from "gatsby"
import { startTransition } from "../../store/action"
import { size, Color } from "../../index.styles"

const AlphabetContainer = styled.div`
  margin-bottom: 3rem;
  /* width: 40%; */
  @media (min-width: ${size.tablet}) {
    margin-bottom: 1rem;
  }
  @media (min-width: ${size.laptop}) {
    width: 40%;
    margin-bottom: 2rem;
  }
  @media (min-width: ${size.laptopM}) {
    width: 37%;
  }
  @media (max-width: ${size.mobileM}) {
    margin-bottom: 1rem;
  }
`

const ParticipantOverviewWrapper = styled(TwoColumnPageWrapper)`
  /* margin-bottom: 7rem; */
  position: relative;
`

const AlphabetLanguageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  > div:first-child > p {
    margin-bottom: 0;
  }
  @media (max-width: ${size.mobileM}) {
    padding-top: 1em;
    margin-bottom: -1em;
    :last-child {
      margin-bottom: 3rem;
    }
  }
  @media (min-width: ${size.laptop}) {
    padding-top: calc(97px + 2.5em);
    margin-bottom: calc(-97px - 2.5em);
    :last-child {
      margin-bottom: 9rem;
    }
    margin-top: 0px;
    :first-child {
      padding-top: calc(97px + 2.5em);
      margin-top: calc(-97px - 2.5em);
    }
  }
  @media (min-width: ${size.laptopM}) {
    grid-template-columns: 1fr 12fr;
    padding-top: calc(97px + 3em);
    margin-bottom: calc(-97px - 3em);
    :first-child {
      padding-top: calc(97px + 3em);
      margin-top: calc(-97px - 3em);
    }
  }
  @media (min-width: ${size.laptopL}) {
    padding-top: calc(107px + 3em);
    margin-bottom: calc(-107px - 3em);
    :first-child {
      margin-top: calc(-107px - 3em);
      padding-top: calc(107px + 3em);
    }
  }
`

const ParticipantAnchorLinkWrapper = styled.div`
  overflow-y: hidden;
  position: relative;
  @media (max-width: ${size.mobileM}) {
    margin-bottom: 0 !important;
  }
  @media (max-width: ${size.tabletL}) {
    position: relative;
    margin-bottom: 1rem;
  }
  @media (min-width: ${size.tabletL}) {
    display: block;
  }
`

const AnchorDiv = styled.div`
  position: fixed;
  overflow-y: scroll;
  @media (max-width: ${size.tabletL}) {
    position: relative;
    margin-bottom: 1rem;
  }
`

const ExperienceContainer = styled.div`
  @media (max-width: ${size.tabletL}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const AlphabetText = styled.span`
  padding: 0.2rem 0.5rem 0.2rem 0;
  display: inline-block;
  :hover {
    cursor: ${props => (props.hasParticipants ? "pointer" : "default")};
    color: ${props => (props.hasParticipants ? Color.red : "black")};
  }
  opacity: ${props => (props.hasParticipants ? 1 : 0.3)};
  @media (max-width: ${size.mobileM}) {
    padding: 0rem 1rem 0.5rem 0;
  }
`

const ExperienceState = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  ALL: 5,
}

const ParticipantName = styled.p`
  opacity: ${props => (props.isSelected ? 1 : 0.3)};
  margin: 0;
`

const ParticipantLink = styled(Link)`
  :hover > p {
    color: ${Color.red};
  }
  > p {
    transition: all 0.2s ease-in-out;
    font-size: 1em;
  }
`

const ExperienceText = styled.span`
  display: block;
  margin-bottom: 0.4rem;
  opacity: ${props => (props.isChosenExperience ? 1 : 0.3)};
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${size.mobileM}) {
    display: inline-block;
    margin-right: 1em;
    margin-bottom: 0;
  }
`

const ExperienceImage = styled.img`
  margin-top: 1.5rem;
  width: 10% !important;
  max-width: 30px;
  margin-left: 0.1rem;
  opacity: ${props => (props.isChosenExperience ? 1 : 0.3)};
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${size.tabletL}) {
    display: inline-block !important;
    margin: 0;
    width: 30px !important;
  }
`
class ParticipantOverView extends Component {
  language
  alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  participants = []
  experiences = [
    {
      id: 1,
      isText: true,
      display: "exp. 1",
    },
    {
      id: 2,
      isText: true,
      display: "exp. 2",
    },
    {
      id: 3,
      isText: true,
      display: "exp. 3",
    },
    {
      id: 4,
      isText: false,
      display:
        "https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/bb11_logo_mob.svg",
    },
  ]

  constructor(props) {
    super(props)
    this.state = {
      chosenExperience: ExperienceState.ALL,
    }
    this.participants = this.alphabet.map(value => {
      let part = props.participants.filter((p, i) => {
        return p.sorting_name[0].toLowerCase() === value
      })
      part = part.sort((a, b) => {
        return a.sorting_name.localeCompare(b.sorting_name)
      })
      return {
        participants: part,
        letter: value,
      }
    })
  }

  isPartOfExperience = experience => {
    switch (this.state.chosenExperience) {
      case ExperienceState.ONE:
        return experience.includes(this.state.chosenExperience.toString())
      case ExperienceState.TWO:
        return experience.includes(this.state.chosenExperience.toString())
      case ExperienceState.THREE:
        return experience.includes(this.state.chosenExperience.toString())
      case ExperienceState.FOUR:
        return experience.includes(this.state.chosenExperience.toString())
      case ExperienceState.ALL:
        return true
      default:
        return true
    }
  }

  scrollToAnchor = anchor => {
    const parent = document.getElementById(`column-one`)
    const element = document.getElementById(`anchor-${anchor}`)
    if (element) {
      scrollIntoView(element, {
        // scrollMode: "if-needed",
        block: "start",
        inline: "nearest",
        behavior: "smooth",
        boundary: parent,
        skipOverflowHiddenElements: true,
      })
    }
  }

  changeExperience = experience => {
    let chosenExperience =
      experience === this.state.chosenExperience
        ? ExperienceState.ALL
        : experience

    this.setState({
      chosenExperience: chosenExperience,
    })
  }
  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <ParticipantOverviewWrapper id="anchor-parent">
        <PageTitle
          dangerouslySetInnerHTML={{
            __html: content[this.language].title,
          }}
        />
        <ParticipantAnchorLinkWrapper>
          <AnchorDiv>
            <AlphabetContainer>
              {this.participants.map((value, index) => (
                <AlphabetText
                  key={index}
                  onClick={() => this.scrollToAnchor(value.letter)}
                  hasParticipants={value.participants.length > 0}
                >
                  {" "}
                  {value.letter.toUpperCase()}{" "}
                </AlphabetText>
              ))}
            </AlphabetContainer>
            <ExperienceContainer>
              {this.experiences.map((value, index) => (
                <>
                  {value.isText ? (
                    <ExperienceText
                      key={index}
                      onClick={() => this.changeExperience(value.id)}
                      isChosenExperience={
                        this.state.chosenExperience === value.id ||
                        this.state.chosenExperience === ExperienceState.ALL
                      }
                    >
                      {" "}
                      {value.display}{" "}
                    </ExperienceText>
                  ) : (
                    <ExperienceImage
                      key={index}
                      onClick={() => this.changeExperience(value.id)}
                      isChosenExperience={
                        this.state.chosenExperience === value.id ||
                        this.state.chosenExperience === ExperienceState.ALL
                      }
                      src={value.display}
                    />
                  )}
                </>
              ))}
            </ExperienceContainer>
          </AnchorDiv>
        </ParticipantAnchorLinkWrapper>
        <div>
          {this.participants.map((value, index) => (
            <>
              {value.participants.length > 0 ? (
                <AlphabetLanguageContainer
                  key={index}
                  id={`anchor-${value.letter}`}
                >
                  <div>
                    <p> {value.letter.toUpperCase()}</p>
                  </div>
                  <div>
                    {value.participants.map((participant, i) => (
                      <>
                        {/* <ParticipantLink to={createPath(this.language, `participant/${participant.slug}`)} key={i}> */}
                        <ParticipantName
                          key={i}
                          isSelected={this.isPartOfExperience(
                            participant.experience
                          )}
                        >
                          {" "}
                          {!participant.group
                            ? `${participant.firstname} ${participant.lastname}`
                            : `${
                                participant[this.language]
                                  .participant_group_name
                              }`}
                        </ParticipantName>
                        {/* </ParticipantLink> */}
                      </>
                    ))}
                  </div>
                </AlphabetLanguageContainer>
              ) : null}
            </>
          ))}
        </div>
      </ParticipantOverviewWrapper>
    )
  }
}

let content = {
  EN: {
    title: "Participants",
  },
  DE: {
    title: "Beteiligte",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    participants: state.participants,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch(startTransition()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantOverView)
