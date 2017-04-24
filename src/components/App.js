import React, { Component } from 'react'
import Entry from './Entry'
import Home from './Home'
import Browse from './Browse'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import { get } from './api'
import NewEntry from './NewEntry'
import Search from './Search'
import SearchForm from './SearchForm'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {
  state = {
    entries: []
  }

  componentDidMount () {
    get('/entries').then((entries) => {
      this.setState({entries})
    })
  }

  render () {
    return <Router>
      <div>
        <h1><Link to='/'>The Jabberdexicon </Link> </h1>

        <SearchForm />

        <nav>
          <ul>
            {ALPHABET.map((l) => (
              <li key={l}>
                <NavLink to={`/browse/${l}`}>{l}</NavLink>
              </li>
            ))}
            <li><NavLink to='/browse/#'> # </NavLink></li>
          </ul>
        </nav>

        <main>
          <Route exact path='/' render={(props) => (
            <Home entries={this.state.entries} {...props} />
          )} />

          <Route exact path='/browse/:to' render={(props) => (
            <Browse entries={this.state.entries} {...props} />
          )} />

          <Route path='/entry/:slug' component={Entry} />
          <Route path='/new' component={NewEntry} />
          <Route path='/search/:query' component={Search} />

        </main>

        <footer>
          <Link to='/new'> Add an Entry</Link>
        </footer>
      </div>
    </Router>
  }
}

export default App
