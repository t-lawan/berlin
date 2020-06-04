import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { TwoColumnPageWrapper } from "../../templates/page.styles"
import {
  capitalise,
  createPath,
  getCurrentLanguageString,
} from "../../utility/helper"
import scrollIntoView from "scroll-into-view-if-needed"
import { Link } from "gatsby"
import { startTransition } from "../../store/action";

const AlphabetContainer = styled.div`
  margin-bottom: 3rem;
`

const ParticipantOverviewWrapper = styled(TwoColumnPageWrapper)`
  margin-bottom: 7rem;
`

const AlphabetLanguageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
`

const ExperienceContainer = styled.div``

const AlphabetText = styled.span`
  padding: 0.4rem 0.3rem;
  display: inline-block;
  :hover {
    cursor: pointer;
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

const ExperienceText = styled.span`
  display: block;
  margin-bottom: 0.4rem;
  :hover {
    cursor: pointer;
  }
`

const ExperienceImage = styled.img`
  margin-top: 1rem;
  width: 10% !important;
  :hover {
    cursor: pointer;
  }
`
class ParticipantOverView extends Component {
  language;
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
  partipants = []
  experiences = [
    {
      id: 1,
      isText: true,
      display: "exp 1",
    },
    {
      id: 2,
      isText: true,
      display: "exp 2",
    },
    {
      id: 3,
      isText: true,
      display: "exp 3",
    },
    {
      id: 4,
      isText: false,
      display:
        "https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/bb11_logo_nav.svg",
    },
  ]

  constructor(props) {
    super(props)
    this.state = {
      chosenExperience: ExperienceState.TWO,
    }
    this.partipants = this.alphabet.map(value => {
      return {
        participants: [
          { name: `${value + "elena"}`, experience: 1 },
          { name: `${value + "homas"}`, experience: 2 },
        ],
        letter: value,
      }
    })
  }

  experienceHasChosen = experience => {
    switch (this.state.chosenExperience) {
      case ExperienceState.ONE:
        return experience === this.state.chosenExperience
      case ExperienceState.TWO:
        return experience === this.state.chosenExperience
      case ExperienceState.THREE:
        return experience === this.state.chosenExperience
      case ExperienceState.FOUR:
        return experience === this.state.chosenExperience
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
        scrollMode: "if-needed",
        block: "center",
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
        <div>
          <AlphabetContainer>
            {this.alphabet.map((value, index) => (
              <AlphabetText
                key={index}
                onClick={() => this.scrollToAnchor(value)}
              >
                {" "}
                {value.toUpperCase()}{" "}
              </AlphabetText>
            ))}
          </AlphabetContainer>
          <ExperienceContainer>
            {this.experiences.map((value, index) => (
              <>
                {value.isText ? (
                  <ExperienceText
                    onClick={() => this.changeExperience(value.id)}
                    key={index}
                  >
                    {" "}
                    {value.display}{" "}
                  </ExperienceText>
                ) : (
                  <ExperienceImage
                    onClick={() => this.changeExperience(value.id)}
                    src={value.display}
                    key={index}
                  />
                )}
              </>
            ))}
          </ExperienceContainer>
        </div>
        <div>
          {this.partipants.map((value, index) => (
            <AlphabetLanguageContainer
              key={index}
              id={`anchor-${value.letter}`}
            >
              <div>
                <p> {value.letter.toUpperCase()}</p>
              </div>
              <div>
                {value.participants.map((participant, i) => (
                  <Link
                    key={i}
                    onClick={() => this.props.startTransition()}
                    to={createPath(this.language, "participant/dodie-bellamy")}
                  >
                    <ParticipantName
                      isSelected={this.experienceHasChosen(
                        participant.experience
                      )}
                    >
                      {" "}
                      {capitalise(participant.name)}{" "}
                    </ParticipantName>
                  </Link>
                ))}
              </div>
            </AlphabetLanguageContainer>
          ))}
        </div>
      </ParticipantOverviewWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch(startTransition()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantOverView)
