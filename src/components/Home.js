import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import EntryList from './EntryList'

class Home extends Component {
  render () {
    const entries = _.sampleSize(this.props.entries, 4).map((entry) => (
      <li key={entry.id}>
        <Link to='/entry/foo'> {entry.term} </Link>
      </li>
    ))

    return <div>
      <h3>Random Entries </h3>

      <div >
        <EntryList entries={_.sampleSize(this.props.entries, 4)} />
      </div>
    </div>
  }
}

export default Home
