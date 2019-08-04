import React from "react";
import { EventsWrapper, EventItem } from "./upcomingevents.styles";
import { generateEvents } from "../../models/EventsModel";
import {connect} from 'react-redux';
import { getCurrentLanguageString } from "../../utility/helper";

let events = generateEvents(10);

const UpcomingEvents = props => {
    const filteredEvents = events.filter((event) => {
        return event.experience === props.experience
    });
    const language = getCurrentLanguageString(props.languages);
    return (
    <EventsWrapper>
        {filteredEvents.map(event => (
            <EventItem key={event.id}>
                <p> {event.start_date.toString()}</p>
                <p> {event[language].title}</p>
                <p> {event[language].subtitle}</p>
                <p> {event.venue}</p>
            </EventItem>
        ))}
    </EventsWrapper>
)}

const mapStateToProps = state => {
    return {
        languages: state.languages,
        experience: state.experience
    }
}

export default connect(mapStateToProps, null)(UpcomingEvents);