import React from "react"
import PropTypes from "prop-types"
import DateCard from "./datecard"
import { DateManager } from "../../utility/date"

class MonthCards extends React.Component {
  days = Object.keys(this.props.month);
  currentDate = DateManager.currentDate();
  getElement = () => {
    const element = document.getElementById(`date-${this.currentDate}`);
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  componentDidMount() {
    this.getElement();
  }
  render() {
    return (
      <>
        <DateCard containsEvents={false} month={this.props.title} year={this.props.year}  />
        {this.days.map(day => (
          <DateCard
            key={day}
            containsEvents={true}
            events={this.props.month[day]}
            month={this.props.title}
            day={day}
            year={this.props.year}
          />
        ))}
      </>
    )
  }

}

MonthCards.propTypes = {
  month: PropTypes.any,
  title: PropTypes.string,
  year: PropTypes.any
}
export default MonthCards
