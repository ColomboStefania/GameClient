import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getGames, joinGame, updateGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {userId} from '../../jwt'
import Paper from 'material-ui/Paper'
import Board from './Board'
import './GameDetails.css'


class GameDetails extends PureComponent {

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  joinGame = () => this.props.joinGame(this.props.game.id)

  makeMove = (toRow, toCell) => {
    const {game, updateGame} = this.props

    const board = game.board.map(
      (row, rowIndex) => row.map((cell, cellIndex) => {
        if (rowIndex === toRow && cellIndex === toCell) return game.turn
        else return cell
      })
    )
    updateGame(game.id, board)
  }
  


  render() {
    const {game, users, authenticated, userId} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)

    const winner = game.players
      .filter(p => p.symbol === game.winner)
      .map(p => p.userId)[0]
 

    return (
      

    <Paper className="outer-paper">
      <div>   <audio  controls autoplay className = "audio">
        <source src="http://66.90.93.122/ost/super-mario-bros.-1-3-anthology/gczrgwrx/1%2001%20Main%20Theme%20Overworld.mp3" type="audio/mpeg"/>
      </audio></div>

      <p>Status: {game.status}</p>
     

      <div className = 'mario'>

          { game.score !== null &&
           game.score.filter(item => item === "o").length <= 10 &&
          <img src="https://i.pinimg.com/736x/2b/6b/cf/2b6bcf45c8a270d3563dc596bd6ba926--mario-birthday-party-birthday-games.jpg"  width="100" height="100" className = "pic"/>
          }

          { game.score !== null && game.score.filter(item => item === "x").length >= 10 &&
          <img src="https://png.pngtree.com/element_origin_min_pic/17/07/23/473f204a1589862d0264b14f926b4b59.jpg"  width="100" height="100" className = "trophy" />
          }
          { game.score !== null &&
            game.score.filter(item => item === "x").length !== null &&
          <p className='scoreText'>Mario score: {game.score.filter(item => item === "x").length} points </p>
          } 

           { game.score !== null && game.score.filter(item => item === "o").length >= 10 &&
          <img src="https://i.pinimg.com/736x/2b/6b/cf/2b6bcf45c8a270d3563dc596bd6ba926--mario-birthday-party-birthday-games.jpg"  width="100" height="100" className = "fallingpic" />
          }
          </div>


       <div className = "ScoreBoard">

          { game.score !== null &&
         game.score.filter(item => item === "x").length <= 10 &&
         <img src="http://cdn8.bigcommerce.com/s-balh3740/images/stencil/608x608/products/9370/2621/luigi__96034__23458.1354626704.jpg?c=2"  width="100" height="100"  className = "pic"/>
        } 
     
      { game.score !== null &&
         game.score.filter(item => item === "o").length !== null &&
      <p className='scoreText'>Luigi score: {game.score.filter(item => item === "o").length} points </p>
      } 

       { game.score !== null && game.score.filter(item => item === "o").length >= 10 &&
      <img src="https://png.pngtree.com/element_origin_min_pic/17/07/23/473f204a1589862d0264b14f926b4b59.jpg"  width="100" height="100"  className = "trophy"/>
      }

       { game.score !== null && game.score.filter(item => item === "x").length >= 10 &&
          <img src="http://cdn8.bigcommerce.com/s-balh3740/images/stencil/608x608/products/9370/2621/luigi__96034__23458.1354626704.jpg?c=2"  width="100" height="100" className = "fallingpic" />
          }

      {/* {
         game.score.filter(item => item === "x").length &&
      <p>Luigi score: {game.score.filter(item => item === "x").length} point </p>
      } */} 

      </div>

      <div className="ScoreBoard">

          {
            game.board[8][0] !== null && 
            <img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717" width="50" height="50"/>
          }
          {
            game.board[2][2] !== null &&
            <img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717" width="50" height="50"/>
          }
          {
            game.board[5][7] !== null &&
            <img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717" width="50" height="50"/>
          }
          {
            game.board[1][8] !== null &&
            <img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717" width="50" height="50"/>
          }
          {
            game.board[9][2] !== null &&
            <img src="https://vignette.wikia.nocookie.net/mario/images/8/8c/Mushroom.png/revision/latest?cb=20101223220717" width="50" height="50"/>
          } 
          {
            game.board[5][3] !== null &&
            <img src="https://www.mariowiki.com/images/thumb/5/57/Powerup-mini-mushroom-sm.png/200px-Powerup-mini-mushroom-sm.png" width="50" height="50"/>
          }
          {
            game.board[3][5] !== null &&
            <img src="https://vignette.wikia.nocookie.net/mariokart/images/a/a4/GoldenMushroomMK8.png/revision/latest?cb=20140520034127" width="50" height="50"/>
          }
          {
            game.board[7][5] !== null &&
            <img src="https://www.mariowiki.com/images/thumb/5/57/Powerup-mini-mushroom-sm.png/200px-Powerup-mini-mushroom-sm.png" width="50" height="50"/>
          } 
          {
            game.board[8][8] !== null &&
            <img src="https://www.mariowiki.com/images/thumb/5/57/Powerup-mini-mushroom-sm.png/200px-Powerup-mini-mushroom-sm.png" width="50" height="50"/>
          }  
          {
            game.board[3][9] !== null &&
            <img src="https://www.mariowiki.com/images/thumb/5/57/Powerup-mini-mushroom-sm.png/200px-Powerup-mini-mushroom-sm.png" width="50" height="50"/>
          } 

      </div>
          
      

      {
        game.status === 'started' &&
        player && player.symbol === game.turn &&
        <div>It's your turn!</div>
      }

      {
        game.status === 'pending' &&
        game.players.map(p => p.userId).indexOf(userId) === -1 &&
        <button  onClick={this.joinGame} >Join Game</button>
      }

      {
        winner &&
        <p>Winner: {users[winner].firstName}</p>
      }

      <hr />

      {
        game.status !== 'pending' &&
        <div className = "moregrass">
        <Board board={game.board} makeMove={this.makeMove} />
 
        </div>
      }
    </Paper>)
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users
})

const mapDispatchToProps = {
  getGames, getUsers, joinGame, updateGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails)
