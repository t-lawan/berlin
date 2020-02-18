import React from "react"
import {
  EventsWrapper,
  EventItem,
  EventLink,
  EventTitle,
} from "./upcomingevents.styles"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  createPath,
  transitionBackground,
  truncateText,
  getNumberOfWords,
} from "../../utility/helper"
import moment from "moment"
import "moment/locale/en-gb"
import "moment/locale/de"
import { getVenue } from "../../store/selector"
import striptags from "striptags"
import PropTypes from "prop-types";

let calendar_items = []
const UpcomingEvents = props => {
  const language = getCurrentLanguageString(props.languages)
  calendar_items = props.calendar_items
  let currentExhibition = props.exhibitions.find(exhibition => {
    return exhibition.experience == props.experience
  })

  const filteredItems = calendar_items
    .filter(item => {
      if (moment().diff(moment(currentExhibition.end_date)) <= 0) {
        return (
          item.experience.includes(props.experience.toString()) &&
          item.item === "event" &&
          (props.experience >= props.active_experience
            ? moment(item.start_date).diff(moment()) >= 0
            : true)
        )
      } else {
        return (
          item.item === "event" &&
          item.experience.includes(props.experience.toString())
        )
      }
    })
    .sort((a, b) => {
      return a.start_date - b.start_date
    })


  return (
    <EventsWrapper isHome={props.isHome}>
      <p hidden={filteredItems.length !== 0}>
        {" "}
        {language === "EN"
          ? "There are no upcoming events for this experience"
          : "Es gibt keine bevorstehenden Veranstaltungen für diese Erfahrung"}{" "}
      </p>
      {filteredItems.map(item => (
        <EventItem isActive={currentExhibition.active} key={item.id}>
          <EventLink fade to={createPath(language, `${item.slug}`)}>
            {/* <EventLink
            cover
            direction="down"
            bg={transitionBackground}
            colour="black"
            to={createPath(language, `${item.slug}`)}
          > */}
            <p>
              {" "}
              {moment(item.start_date)
                .locale(language.toLowerCase())
                .format("dddd, D.M.YYYY")}
            </p>
            <p> {item[language].display_time}</p>
            <EventTitle
              dangerouslySetInnerHTML={{ __html: item[language].title }}
            />
            {item[language].subtitle ? (
              <EventTitle
                dangerouslySetInnerHTML={{
                  __html: `<p>${truncateText(
                    striptags(item[language].subtitle),
                    16
                  )} ...</p>`,
                }}
              />
            ) : null}

            <p> {getVenue(props.venues, item.venue[0])[language].venue_name}</p>
            <p>
              {item.language == "other"
                ? item[language].other_language
                : freeAdmision[language][item.language]}
            </p>
            <p hidden={!item.is_free}> {freeAdmision[language].text}</p>
          </EventLink>
        </EventItem>
      ))}
    </EventsWrapper>
  )
}

export const freeAdmision = {
  DE: {
    text: "Freier Eintritt, begrenzte Kapazität",
    en: "Auf Englisch",
    de: "Auf Deutsch",
    rsvp: "RSVP erforderlich",
  },
  EN: {
    text: "Free admission, limited capacity",
    en: "In English",
    de: "In German",
    rsvp: "RSVP Required",
  },
}

UpcomingEvents.propTypes = {
isHome: PropTypes.boolean,
}

UpcomingEvents.defaultProps = {
isHome: false
};
const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    calendar_items: state.calendar_items,
    venues: state.venues,
    active_experience: state.active_experience,
    exhibitions: state.exhibitions,
    news: state.news,
  }
}

export default connect(mapStateToProps, null)(UpcomingEvents)
