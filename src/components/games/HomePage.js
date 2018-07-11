import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class HomePage extends PureComponent {
  render() {
    return (
        <div className = "backgroundHomepage">
            <h1 className = "homepage">Welcome to MushroomLand</h1>
            <div className = "buttonContainer">
            <button className = "buttonHome"><Link to="/login"><p className = 'login'>Login and start to play!</p></Link></button>
            </div>
            <div className = "footer"></div>
        </div>
    )
  }
}