import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import movies from "./data";
import MovieDetail from "./MovieDetail";

class App extends Component {
  state = {
    currentMovie: null
  };
  selectRandomMovie = movie => {
    let chosenMovie = movies[Math.floor(Math.random() * movies.length)];
    this.setState({ currentMovie: chosenMovie });
  };

  reset = () => this.setState({ currentMovie: null });

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-12">
            {this.state.currentMovie ? (
              <MovieDetail
                RandomMovie={this.state.currentMovie}
                reset={this.reset}
              />
            ) : (
              <div>
                <h2 className="Mtext"> Movies Guessing Game</h2>
                <p>Can you name the movie from the 3 hints given?!</p>
                <button
                  class="btn btn-warning"
                  onClick={() => this.selectRandomMovie(this.movies)}
                >
                  <span> Play</span> <i class="fas fa-play-circle" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
