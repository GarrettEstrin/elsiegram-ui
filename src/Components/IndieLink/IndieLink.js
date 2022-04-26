import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './indieLink.scss';

class IndieLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLink: false
    }
  }
  
  handleClick = (evt) => {
    const { showLink } = this.state;
    if (evt.target.classList.contains('indie-link--close') || evt.target.classList.value === '') {
      return this.handleClose();
    }
    if (showLink) {
      return window.location.assign('https://indie.elsiegram.com');
    }
    this.setState({
      showLink: true
    })
  }

  handleClose = () => {
    this.setState({
      showLink: false
    })
  }

  render() {
    const { showLink } = this.state;
    return (
      <div
        className={`indie-link ${showLink ? 'indie-link--show' : ''}`}
        onClick={this.handleClick}
      >
        {showLink && <p className='indie-link__text'>Come see me!</p>}
        {showLink && (
          <FontAwesomeIcon
            className='indie-link--close'
            icon={faTimesCircle}
          />
        )}
      </div>
    )
  }
}

export default IndieLink;