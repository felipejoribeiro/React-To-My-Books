import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
// import App from '../containers/App'

const CardList = ({ robots }) => {
  return (
  <div>
    {
      // this returns list of card tags with the parameters passed
      robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        )
      })
    }
  </div>
  )
}

CardList.propTypes = {
  children: PropTypes.node.isRequired,
  robots: PropTypes.node
}

export default CardList
