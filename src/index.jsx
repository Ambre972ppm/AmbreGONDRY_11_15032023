import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import HousingPage from './pages/Housing Page'
import ErrorPage from './pages/404'
import About from './pages/About'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/housing-page/:id">
          <HousingPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)