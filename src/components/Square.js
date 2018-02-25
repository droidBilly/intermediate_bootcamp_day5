import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div
        className={`square fill-${this.props.value || 0}`}
      />
    )
  }
}

export default Square
