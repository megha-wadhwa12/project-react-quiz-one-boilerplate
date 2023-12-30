import React, { Component } from "react";
import "./QuizComponent.css";

export default class QuizComponent extends Component {
  render() {
    return (
      <div className="quizBg">
        <div className="box">
          <h2 className="ques">Question</h2>
          <p className="quizNumber">1 of 15</p>
          <p>Which is the only mammal that can jump?</p>
          <div className="buttons">
            <button className="btn1">Dog</button>
            <button className="btn2">Cat</button>
            <button className="btn3">Goat</button>
            <button className="btn4">Lion</button>
          </div>
          <div className="stages">
            <button className="previous">Previous</button>
            <button className="next">Next</button>
            <button className="quit">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
