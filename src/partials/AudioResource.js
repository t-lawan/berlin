import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import styled from "styled-components"
import { getDocument } from "../store/selector"
import { getCurrentLanguageString } from "../utility/helper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlayCircle,
  faPlay,
  faPause,
  faPauseCircle,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons"
import { TextBlock } from "../templates/page.styles"

const AudioResourceWrapper = styled.section`
  /* display: flex;
  flex-direction: row; */
  padding: 1em 0;
`

const ActionIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
  :hover {
    cursor: pointer;
  }
  transition: ease-in-out;
  transition-duration: 10;
`

const AudioPlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: space-evenly;
  align-items: center;
`

const TimeProgressBar = styled.progress`
  width: 50%;
  &[value] {
    -webkit-appearance: none;
    appearance: none;
    background-color: rgba(0, 0, 0, 0.4);
    color: black;
    height: 0.3rem;
    border: 0;
    /* height: 5px; */
  }
  &[value]::-webkit-progress-bar {
    background-color: black;
    border: 0;
    /* border-radius: 2px; */
    /* border: 1px solid lighten(#acacac, 20%); */
    color: black;
  }

  &::-moz-progress-bar {
    background: black;
    border: 0;
    color: black;
  }

  &::-webkit-progress-value {
    color: black;
    background-color: black;
  }
`

const VolumeProgressBar = styled(TimeProgressBar)`
  width: 10%;
`
class AudioResource extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    withCaption: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.audio_tag = React.createRef()
    this.time_progress_ref = React.createRef()
    this.volume_progress_ref = React.createRef()
    this.state = {
      isPlaying: false,
      currentTime: 0,
      length: 0,
      volume: 1,
      prevVolume: 0
    }
  }
  audio
  language
  skipPercentage = 0.02
  changeVolume = 0.1

  setAudioInfo = () => {
    let audio = this.audio_tag.current
    this.setState({
      currentTime: audio.currentTime,
      length: audio.duration,
      volume: audio.volume,
    })
  }
  initProgressBar = () => {
    let audio = this.audio_tag.current
    this.setState({
      currentTime: audio.currentTime,
      length: audio.duration,
    })

    this.reset()
  }

  play = () => {
    this.audio_tag.current.play()
    this.setState({
      isPlaying: true,
    })
  }

  pause = () => {
    this.audio_tag.current.pause()
    this.setState({
      isPlaying: false,
    })
  }

  reset = () => {
    if (this.audio_tag.current.currentTime === this.state.length) {
      this.audio_tag.current.currentTime = 0
    }
  }

  increaseVolume = () => {
    if (this.audio_tag.current.volume !== 1) {
      this.audio_tag.current.volume =
        this.audio_tag.current.volume + this.changeVolume
      this.setState({
        volume: this.audio_tag.current.volume,
      })
    }
  }

  calculateTotalValue = length => {
    let hours = Math.floor(length / 3600)
    let minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2)

    let time =
      hours > 0
        ? `${hours}:${this.showProperTime(
            minutes - hours * 60
          )}:${this.showProperTime(seconds)}`
        : `${this.showProperTime(minutes)}:${this.showProperTime(seconds)}`

    return time
  }

  showProperTime = value => {
    let time = value < 10 ? "0" + value : value
    return time
  }

  seekTime = event => {
    if (this.state.isPlaying) {
      let rect = this.time_progress_ref.current.getBoundingClientRect()
      const percent = (event.clientX - rect.left) / rect.width
      this.audio_tag.current.currentTime = percent * this.state.length
    }
  }

  seekVolume = event => {
      let rect = this.volume_progress_ref.current.getBoundingClientRect()
      const percent = (event.clientX - rect.left) / rect.width;
      this.audio_tag.current.volume = percent;
      this.setState({
        volume: percent
      })
  }

  toggleMute = () => {
    if(this.audio_tag.current.volume > 0) {
      let prevVolume = this.audio_tag.current.volume 
      this.audio_tag.current.volume = 0;
      this.setState({
        volume: 0,
        prevVolume: prevVolume
      })
    } else {
      this.audio_tag.current.volume = this.state.prevVolume;
      this.setState({
        volume: this.state.prevVolume
      })
    }

  }

  calculateCurrentValue = currentTime => {
    let current_hour = Math.floor(currentTime / 3600),
      current_minute = Math.floor(currentTime / 60),
      current_seconds_int = currentTime - current_minute * 60,
      current_seconds_str = current_seconds_int.toString(),
      current_seconds = current_seconds_str.substr(0, 2)

    let current_time =
      current_hour > 0
        ? `${current_hour}:${this.showProperTime(
            current_minute - current_hour * 60
          )}:${this.showProperTime(current_seconds)}`
        : `${this.showProperTime(current_minute)}:${this.showProperTime(
            current_seconds
          )}`

    return current_time
  }

  // calculateCurrentValue = currentTime => {
  //   let current_hour = parseInt(currentTime / 3600) % 24,
  //     current_minute = parseInt(currentTime / 60) % 60,
  //     current_seconds_long = currentTime % 60,
  //     current_seconds = current_seconds_long.toFixed()

  //   let current_time =
  //     current_hour > 0 ?
  //     `${this.showProperTime(current_minute)}:${this.showProperTime(current_seconds)}`
  //     : `${current_hour}:${this.showProperTime(current_minute)}:${this.showProperTime(current_seconds)}`;

  //   return current_time
  // }

  UNSAFE_componentWillMount() {
    this.audio = getDocument(this.props.documents, this.props.id)
  }

  componentDidMount() {}
  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <AudioResourceWrapper>
        <audio
          preload="metadata"
          ref={this.audio_tag}
          controls
          hidden={true}
          onTimeUpdate={() => this.initProgressBar()}
          onLoadedMetadata={this.setAudioInfo}
        >
          <source src={this.audio.url} />
        </audio>
        <AudioPlayerWrapper>
          <ActionIcon
            onClick={() => (this.state.isPlaying ? this.pause() : this.play())}
            icon={this.state.isPlaying ? faPauseCircle : faPlayCircle}
            size={`lg`}
          />
          <span>{this.calculateCurrentValue(this.state.currentTime)}</span>
          <TimeProgressBar
            onClick={event => {
              this.seekTime(event)
            }}
            ref={this.time_progress_ref}
            value={this.state.currentTime}
            max={this.state.length}
          />
          <span> {this.calculateTotalValue(this.state.length)}</span>
          <ActionIcon
            onClick={() => this.toggleMute()}
            color={this.state.volume === 0 ? 'red' : 'black'}
            icon={this.state.volume === 0 ? faVolumeMute : faVolumeUp}
          />
          <VolumeProgressBar
            onClick={event => {
              this.seekVolume(event)
            }}
            ref={this.volume_progress_ref}
            value={this.state.volume}
            max={1}
          />
        </AudioPlayerWrapper>
      </AudioResourceWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}
export default connect(
  mapStateToProps,
  null
)(AudioResource)
