import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
//import Sound from 'react-sound'

export default class HomePage extends PureComponent {
  render() {
    return (
        <div className = "backgroundHomepage">
        {/* <div>
        <Sound
              url = “http://66.90.93.122/ost/space-invaders-gbc-gb/pgzaqlkc/02_Select%20Your%20Ship.mp3”
              playStatus={Sound.status.PLAYING}
              autoLoad=true
        />
      </div> */}
        <h1 className = "title">.</h1>
        <div className = "containerImage"><img src="https://orig00.deviantart.net/88f9/f/2017/210/5/8/mario_and_luigi_superstar_saga_boxart_pose_render_by_nintega_dario-dbi5ay1.png"  width="500" height="333"  align="left" className = "logo"/> </div>
            <br/>
            <div className = "buttonContainer">
            <button className = "buttonHome"><Link to="/login" style={{ textDecoration: 'none' , color: 'white'}}><p className = 'login'>PLAY!</p></Link></button>
            <br/>
            <button className = "buttonNone"></button>

            </div>
            <div className = "footer"></div>
        </div>
    )
  }
}