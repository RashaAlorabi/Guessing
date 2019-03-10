import React, { Component } from "react";
import question from "./img/q.jpg";
import movies from "./data";

class MovieDetail extends Component {
  state = {
    msg: "",
    hint: this.props.RandomMovie.hints[0],
    attempts: 2
  };
  checkGuess = async selectedMovie => {
    var userInput = document.getElementById("name").value.toLowerCase();
    if (selectedMovie.name.toLowerCase() === userInput.replace(/\s/g, "")) {
      this.setState({ msg: "You Win" });
    } else if (this.state.attempts === 0) {
      await this.setState({
        msg: "you loss"
      });
      this.printHints();
    } else {
      await this.setState({
        msg: "Try again",
        attempts: this.state.attempts - 1
      });
      this.printHints();
    }
  };

  printHints = attempts => {
    if (this.state.attempts === 2) {
      this.setState({ hint: this.props.RandomMovie.hints[0] });
    } else if (this.state.attempts === 1) {
      this.setState({ hint: this.props.RandomMovie.hints.slice(0, 2) });
    } else {
      this.setState({ hint: this.props.RandomMovie.hints });
    }
  };

  render() {
    let selectedMovie = this.props.RandomMovie;

    return (
      <div className="col-xs-10">
        <div>
          <h4
            class="btn"
            style={{ borderColor: "black", backgroundColor: "white" }}
          >
            Hints :{this.state.hint}
          </h4>
          <br />
          {this.state.msg === "You Win" || this.state.msg === "you loss" ? (
            <img src={selectedMovie.imagePoster} />
          ) : (
            <img src={question} className="img-thumbnail" />
          )}
          <br />
          you have {this.state.attempts} attempts
          <br />
          <label
            style={{
              marginTop: "20px",
              borderColor: "black",
              backgroundColor: "white"
            }}
            class="btn"
          >
            <span>Movie: </span>
            <input type="text" name="name" id="name" />
          </label>
          <br />
          <button
            style={{ display: "inline-block", marginRight: "20px" }}
            class="btn btn-warning"
            onClick={() => this.checkGuess(selectedMovie)}
          >
            <span> Go </span>
            <i class="fas fa-dice-d6" />
          </button>
          <button
            style={{ display: "inline-block" }}
            class="btn btn-warning"
            onClick={this.props.reset}
          >
            <span> Play Again </span>
            <i class="fas fa-play-circle" />
          </button>
          <p>{this.state.msg}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
