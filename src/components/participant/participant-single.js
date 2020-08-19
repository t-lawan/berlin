import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import styled from "styled-components"
import { PageTitle } from "../../templates/page.styles"
import ImageGalleryResource from "../../partials/ImageGalleryResource"
import { size } from "../../index.styles"
import ParticipantNavigator from "./participant-navigator";

const ParticipantVideo = styled.div`
  /* width: 80%; */
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`
const ExpNumber = styled.span`
  font-size: 1em;
  font-style: italic;
`

const ParticipantImageWrapper = styled.div`
  padding: 0rem;
  /* max-width: 100%; */
  display: inherit;
`
const ParticipantName = styled.h1`
  padding-bottom: 0.5rem;
  font-size: 1.6em;
  display: none;
  @media (min-width: ${size.laptop}) {
    display: block;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.7em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.9em;
  }
  line-height: 1.2;
`

const ParticipantColumn = styled.div`
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

const ParticipantSingle = props => {
  let language = getCurrentLanguageString(props.languages)
  let participant = props.participant
  let experience = participant.experience
  experience = experience.filter(exp => {
    return exp != "4"
  })
  let isInExperience123 = () => {
    return (
      experience.includes("1") |
      experience.includes("2") |
      experience.includes("3")
    )
  }

  return (
    <>
      <PageTitle>
        {" "}
        {participant.group
          ? `${participant[language].participant_group_name}`
          : `${participant.firstname} ${participant.lastname}`}
      </PageTitle>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].participant_venue,
          }}
        />
        {/* {!isInExperience123() ? ( */}
            <p>
              {experience && experience.length > 0
                ? ParticipantSingleText[language].was_part_of
                : null}
              {experience.map((exp, index) => {
                return (
                  <React.Fragment key={index}>
                    {experience.length === index + 1 && experience.length > 1
                      ? `${ParticipantSingleText[language].and}`
                      : ""}
                    <ExpNumber> exp. {exp} </ExpNumber>
                    {experience.length === index + 1 ||
                    experience.length - 1 === index + 1
                      ? ""
                      : ""}
                  </React.Fragment>
                )
              })}
            </p>
        {/* ) : null} */}
      </div>
      <ParticipantColumn>
        <ParticipantName>
          {participant.group
            ? `${participant[language].participant_group_name}`
            : `${participant.firstname} ${participant.lastname}`}
        </ParticipantName>
        {participant[language].participant_group_members ? (
          <div
            dangerouslySetInnerHTML={{
              __html: participant[language].participant_group_members,
            }}
          />
        ) : null}
        {participant.image_gallery ? (
          <ParticipantImageWrapper>
            <ImageGalleryResource ids={participant.image_gallery} />
          </ParticipantImageWrapper>
        ) : null}



        {participant[language].short_bio ? (
          <div
            dangerouslySetInnerHTML={{
              __html: participant[language].short_bio,
            }}
          />
        ) : null}

        {participant[language].group_bios ? (
          <div>
            {participant[language].group_bios.map((member, index) => (
              <>
                <p key={index}> {member.full_name}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: member.biography,
                  }}
                />
              </>
            ))}
          </div>
        ) : null}

        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].project_description,
          }}
        />

        {participant.video ? (
          <ParticipantVideo
            dangerouslySetInnerHTML={{
              __html: participant.video,
            }}
          />
        ) : null}
        {participant[language].participant_video_caption ? (
          <div
            dangerouslySetInnerHTML={{
              __html: participant[language].participant_video_caption,
            }}
          />
        ) : null}
        {participant[language].works_list ? (
          <p>{ParticipantSingleText[language].list}</p>
        ) : null}
        {participant[language].works_list ? (
          <div
            dangerouslySetInnerHTML={{
              __html: participant[language].works_list,
            }}
          />
        ) : null}
      </ParticipantColumn>
    </>
  )
}

const ParticipantSingleText = {
  EN: {
    was_part_of: "Was also part of:",
    and: "and ",
    list: "List of works",
  },
  DE: {
    was_part_of: "War Teil von:",
    and: "und ",
    list: "Werkliste",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience
  }
}

export default connect(mapStateToProps, null)(ParticipantSingle)
