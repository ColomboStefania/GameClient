import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import './Rules.css'
import Paper from 'material-ui/Paper'

export default class Rules extends PureComponent {
  render() {
    return (

        <Paper className="outer-paper">
        <div >
        <h1 > Rules of the Game</h1><img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717"  width="100" height="100" className ="rulesImage"/>
        <img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717"  width="100" height="100" className ="rulesImage"/>
        <img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717"  width="100" height="100" className ="rulesImage"/>
        <img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717"  width="100" height="100" className ="rulesImage"/>
        
        <div className = "rulecontainer">
        
        <h2 className = "rulestitle">Red Mushroom 1 Point</h2>
         </div>
         <div className = "rulecontainer">
        <img src="https://www.mariowiki.com/images/thumb/5/57/Powerup-mini-mushroom-sm.png/200px-Powerup-mini-mushroom-sm.png"  width="100" height="100" className ="rulesImage"/>
        <img src="https://www.mariowiki.com/images/thumb/5/57/Powerup-mini-mushroom-sm.png/200px-Powerup-mini-mushroom-sm.png"  width="100" height="100" className ="rulesImage"/>

        <h2 className = "rulestitle">Blue Mushroom 2 Points</h2>
         </div>
         <div className = "rulecontainer">
        <img src="https://vignette.wikia.nocookie.net/mariokart/images/a/a4/GoldenMushroomMK8.png/revision/latest?cb=20140520034127"  width="100" height="100" className ="rulesImage"/>
        <h2 className = "rulestitle">Gold Mushroom 4 Points</h2>
         </div>
         <div className = "rulecontainer">
        <img src="http://oyster.ignimgs.com/mediawiki/apis.ign.com/super-mario-3d-land/thumb/f/f1/PoisonMushroom.png/228px-PoisonMushroom.png"  width="100" height="100" className ="rulesImage"/>
        <img src="http://oyster.ignimgs.com/mediawiki/apis.ign.com/super-mario-3d-land/thumb/f/f1/PoisonMushroom.png/228px-PoisonMushroom.png"  width="100" height="100" className ="rulesImage"/>
        <h2 className = "rulestitle">Poisoned Mushroom -1 Point</h2>
         </div>
         <div className = "rulecontainer">
        <img src="http://www.stickpng.com/assets/thumbs/584df3956a5ae41a83ddee07.png"  width="200" height="200" className ="rulesImage"/>
        <h2 className = "rulestitle">The player who collects 10 points first wins!</h2>
         </div>
            <br/>
            <div className = "buttonContainer">
            <button className = "buttonHome"><Link to="/login" style={{ textDecoration: 'none' , color: 'white'}}><p className = 'login'>PLAY!</p></Link></button>
            <br/>
            

            </div>
            <div className = "footer"></div>
        </div>

        </Paper>
    )
  }
}