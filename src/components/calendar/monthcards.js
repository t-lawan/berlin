import React from "react"
import PropTypes from "prop-types"
import DateCard from "./datecard"
import { DateManager } from "../../utility/date"
import { connect } from "react-redux"

class MonthCards extends React.Component {
  days = Object.keys(this.props.month)
  currentDate;
  hasBeenRendered;
  

  render() {
    return (
      <>
        <DateCard
          containsEvents={false}
          month={this.props.title}
          year={this.props.year}
        />
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
  year: PropTypes.any,
}


const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(MonthCards)
