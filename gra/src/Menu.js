import React, { Component } from 'react';
import Snakemenu from './Snakemenu';
import ReactDOM from 'react-dom';
import soundfile from './muzyka/wezny.mp3';
import Sound from 'react-sound';
import App from './App';

const initialState = {
  position: 0,
  play: [
    [44,48],
    [44,50],
    [44,52],
    [44,54],
    [44,56],
    [44,58],
    [44,60],
    [46,48],
    [46,50],
    [46,52],
    [46,54],
    [46,56],
    [46,58],
    [46,60],
    [48,50],
    [48,52],
    [48,54],
    [48,56],
    [48,58],
    [50,52],
    [50,54],
    [50,56],
    [52,54],
  ],
  start: [
    [10,10],
    [12,10],
    [14,10],
    [16,10],
    [18,10],
    [20,10],
    [10,12],
    [10,14],
    [10,16],
    [12,16],
    [14,16],
    [16,16],
    [18,16],
    [20,16],
    [20,18],
    [20,20],
    [20,22],
    [18,22],
    [16,22],
    [14,22],
    [12,22],
    [10,22],
    //N
    [26,10],
    [26,12],
    [26,14],
    [26,16],
    [26,18],
    [26,20],
    [26,22],
    [28,12],
    [30,14],
    [32,16],
    [34,18],
    [36,10],
    [36,12],
    [36,14],
    [36,16],
    [36,18],
    [36,20],
    [36,22],
    //A
    [42,10],
    [42,12],
    [42,14],
    [42,16],
    [44,16],
    [46,16],
    [48,16],
    [50,16],
    [42,18],
    [42,20],
    [42,22],
    [44,10],
    [46,10],
    [48,10],
    [50,10],
    [52,10],
    [52,12],
    [52,14],
    [52,16],
    [52,18],
    [52,20],
    [52,22],
    //K
    [58,10],
    [58,12],
    [58,14],
    [58,16],
    [58,18],
    [58,20],
    [58,22],
    [60,16],
    [62,14],
    [62,18],
    [64,12],
    [64,20],
    [66,10],
    [66,22],
    //E
    [72,10],
    [72,12],
    [72,14],
    [72,16],
    [72,18],
    [72,20],
    [72,22],
    [74,10],
    [76,10],
    [78,10],
    [80,10],
    [74,16],
    [76,16],
    [78,16],
    [80,16],
    [74,22],
    [76,22],
    [78,22],
    [80,22],
    //!
    [86,10],
    [86,12],
    [86,14],
    [86,16],
    [86,18],
    [86,22],
  ]
}
class Menu extends Component {
  state = initialState;
  componentDidMount() {
    document.onkeydown = this.onKeyDown;
  }
  componentDidUpdate() {
    this.start();
  }

  start() {
      ReactDOM.render(<App />, document.getElementById('root'));
  }
  render() {
    return (
      <div className="srodek">
        <Sound
          url={soundfile}
          playStatus={Sound.status.PLAYING}
          onLoading={this.handleSongLoading}
          loop={true}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleFinishedPlaying}
        />
        <div className="old-tv">
            <div className="error-noise">
              <div className="error-effect">
                <div className="old-tv-content">
                  <div className="game-area">
                    <span className="rmedit">Rick And Morty (edition)</span>
                    <span className="wynik">NAJWYŻSZY WYNIK: {localStorage.getItem("highscore")}</span>
                    <div><Snakemenu start={this.state.start}/></div>
                    <div onClick={this.start}><Snakemenu start={this.state.play}/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Menu;

