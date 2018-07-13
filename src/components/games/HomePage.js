import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class HomePage extends PureComponent {
  render() {
    return (

        <div className = "backgroundHomepage">
           <div>   <audio  autoPlay loop >
        <source src="http://66.90.93.122/ost/super-mario-bros.-1-3-anthology/gczrgwrx/1%2001%20Main%20Theme%20Overworld.mp3" type="audio/mpeg"/>
      </audio>
      </div>
          <img src="https://orig00.deviantart.net/88f9/f/2017/210/5/8/mario_and_luigi_superstar_saga_boxart_pose_render_by_nintega_dario-dbi5ay1.png" className = "logo"/>
          <div className = "buttonContainer">
            <button className="buttonHome"><Link to="/login" style={{ textDecoration: 'none' , color: 'white'}}><p className="playing">PLAY!</p></Link></button>
          </div> 
          <div className="logoImage">
            <p>.</p>
          </div>
          <div className="instructions">
            <p class='title'>Instructions:</p>
            <p><img src="https://vignette.wikia.nocookie.net/fantendo/images/2/2d/BlowMushroom3D.png/revision/latest?cb=20120908041402" width='70px'/>1 point</p>
            <p><img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717" width='70px'/>2 points</p>
            <p><img src="https://vignette.wikia.nocookie.net/mariokart/images/a/a4/GoldenMushroomMK8.png/revision/latest?cb=20140520034127"width='70px'/>4 points</p>
            <p><img src="http://oyster.ignimgs.com/mediawiki/apis.ign.com/super-mario-3d-land/thumb/f/f1/PoisonMushroom.png/228px-PoisonMushroom.png"width='70px'/>-1 point</p>
          </div> 
        </div>
    )
  }
}