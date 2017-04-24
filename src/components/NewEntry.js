import React, { Component } from 'react'
import {post} from './api'

class NewEntry extends Component {
  _submit = (event) => {
    event.preventDefault()
    const {term, definition} = this.refs
    console.log(term.value, definition.value)

    post('/entries', {
      entry: {
        term: this.refs.term.value,
        definition: this.refs.definition.value
      }
    }).then((entry) => {
      this.props.history.push(`/entry/${entry.slug}`)
      console.log(entry)
    })
  }

  render () {
    return <div className='NewEntry'>
      <h2>Add and Entry</h2>
      <form action='#' onSubmit={this._submit}>
        <p>
          <label>Term</label>
          <input type='text' ref='term' />
        </p>
        <p>
          <label>Definitions</label>
          <textarea cols='30' rows='10' ref='definition' />
        </p>
        <p>
          <button type='submit'>Save</button>
        </p>
      </form>
    </div>
  }
}

export default NewEntry
