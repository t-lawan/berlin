import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import styled from 'styled-components'
import { PageTitle } from "../../templates/page.styles"

const ParticipantVideo = styled.div`
  /* width: 80%; */
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
        {isInExperience123() ? (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: participant[language].participant_venue,
              }}
            />
            <p>
              {ParticipantSingleText[language].was_part_of}
              {experience.map((exp, index) => {
                return (
                  <React.Fragment key={index}>
                    {experience.length === index + 1 && experience.length > 1
                      ? "and"
                      : ""}
                    <span> exp. {exp} </span>
                    {experience.length === index + 1 ||
                    experience.length - 1 === index + 1
                      ? ""
                      : ","}
                  </React.Fragment>
                )
              })}
            </p>
          </>
        ) : null}
      </div>
      <div>
        <h2>
          {participant.group
            ? `${participant[language].participant_group_name}`
            : `${participant.firstname} ${participant.lastname}`}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].project_description,
          }}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].short_bio,
          }}
        />

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
            __html: participant[language].short_bio,
          }}
        />
        <ParticipantVideo
          dangerouslySetInnerHTML={{
            __html: participant.video,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].participant_video_caption
          }}
        />

      </div>
    </>
  )
}

const ParticipantSingleText = {
  EN: {
    was_part_of: "Was also part of:",
  },
  DE: {
    was_part_of: "War Teil von:",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(ParticipantSingle)
