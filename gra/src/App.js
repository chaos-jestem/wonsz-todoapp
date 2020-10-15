import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import soundfile from './muzyka/jazz.mp3';
import soundfile2 from './muzyka/rekord.mp3';
import Sound from 'react-sound';
import UIfx from 'uifx';
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 100,
  prawo: false,
  lewo: false,
  góra: false,
  dół: false,
  score: 0,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]
  ]
}
const rekord = new UIfx(
  soundfile2,
  {
    volume: 0.7, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
)
localStorage.setItem("highscore",0);
class App extends Component {
  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }
  onKeyDown = (e) => {
    e = e || window.event;
    if ((e.keyCode === 39 && this.state.lewo === false) || (e.keyCode === 39 && this.state.góra === true && this.state.lewo === false ) || (e.keyCode === 39 && this.state.dół === true && this.state.lewo === false)) {
      this.setState({direction: 'RIGHT', prawo: true, lewo: false, góra: false, dół: false});
    }
    if ((e.keyCode === 37 && this.state.prawo === false) || (e.keyCode === 37  &&  this.state.góra === true ) || (e.keyCode === 39 && this.state.dół === true)) {
      this.setState({direction: 'LEFT', prawo: false, lewo: true, góra: false, dół: false});
    }
    if ((e.keyCode === 38 && this.state.góra === false && this.state.dół === false) || (e.keyCode === 38 && this.state.prawo === true && this.state.dół === false && this.state.góra === false)) {
      this.setState({direction: 'UP', prawo: false, lewo: false, góra: true, dół: false});
    }
    if ((e.keyCode === 40 && this.state.dół === false && this.state.góra === false) || (e.keyCode === 40 && this.state.prawo === true && this.state.góra === false && this.state.dół === false)) {
      this.setState({direction: 'DOWN', prawo: false, lewo: false, góra: false, dół: true});
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    
    if (this.state.direction === 'LEFT') {
      head = [head[0] - 2, head[1]];
    }
    if (this.state.direction === 'RIGHT') {
      head = [head[0] + 2, head[1]];
    }
    if (this.state.direction === 'DOWN') {
      head = [head[0], head[1] + 2];
    }
    if (this.state.direction === 'UP') {
      head = [head[0], head[1] - 2];
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        sleep(5000);
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    let score = this.state.score;
    var storagedHighScore = localStorage.getItem("highscore");
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCoordinates(),
        score: score + 1
      })
      this.enlargeSnake();
      this.increaseSpeed();
      console.log(storagedHighScore);
    }
  }
  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 5
      })
    }
  }

  onGameOver() {
      if (this.state.score > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", this.state.score);
        rekord.play()
      }
      ReactDOM.render(<Menu />, document.getElementById('root'));
  }

  render() {
    return (
      <div>
        <Sound
          url={soundfile}
          playStatus={Sound.status.PLAYING}
          onLoading={this.handleSongLoading}
          volume={20}
          loop={true}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleFinishedPlaying}
          />
        <div className="old-tv">
          <div className="error-noise">
            <div className="error-effect">
              <div className="old-tv-content">
                <div className="game-area">
                  <span className={"appwynik"}>Wynik: {this.state.score}</span>
                  <Snake snakeDots={this.state.snakeDots}/>
                  <Food dot={this.state.food}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

