import React from 'react'
import PropTypes from 'prop-types'

const Scroll = (props) => {
  return (
    // The double brackets are for indicating css styles for JavaScript
    <div style={ { overflowY: 'scroll', border: '5px solid black', height: '600px' } }>
      { props.children }
    </div>
  )
}

Scroll.propTypes = { children: PropTypes.node.isRequired }
export default Scroll
