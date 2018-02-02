import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

var canvas;
var ctx;
var x = 568;
var y = 262;
var mx = 2;
var my = 4;
var WIDTH = 568;
var HEIGHT = 262;
var key = 0;

var w = 1;
var a = 1;

class App extends Component {
  componentDidMount() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    window.onkeydown = this.keydownControl;
    const that = this;
    setInterval(()=>{
        this.draw(that)
    }, 100)
  }

  circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fill();
  }

  clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  snake() {
    if (key === 37) {
      switch (a) {
        case 1: {
          this.circle(x, y - 60, 20);
          this.circle(x, y - 40, 20);
          this.circle(x, y - 20, 20);
          this.circle(x, y, 20);
          this.circle(x - 20, y, 20);
          break;
        }
        case 2: {
          this.circle(x, y - 40, 20);
          this.circle(x, y - 20, 20);
          this.circle(x, y, 20);
          this.circle(x - 20, y, 20);
          this.circle(x - 40, y, 20);
          break;
        }
        case 3: {
          this.circle(x, y - 20, 20);
          this.circle(x, y, 20);
          this.circle(x - 20, y, 20);
          this.circle(x - 40, y, 20);
          this.circle(x - 60, y, 20);
          break;
        }
        case 4: {
          this.circle(x, y, 20);
          this.circle(x - 20, y, 20);
          this.circle(x - 40, y, 20);
          this.circle(x - 60, y, 20);
          this.circle(x - 80, y, 20);
          break;
        }
        case 5: {
          if (x + mx > WIDTH || x + mx < 0) mx = -mx;
          x += mx;
          this.circle(x, y, 20);
          this.circle(x - 20, y, 20);
          this.circle(x - 40, y, 20);
          this.circle(x - 60, y, 20);
          this.circle(x - 80, y, 20);
          break;
        }
      }
      a++;
      if (a > 4) {
        a = 5;
      }
    } else if (key === 38) {
      switch (w) {
        case 1: {
          this.circle(x - 20, y, 20);
          this.circle(x - 40, y, 20);
          this.circle(x - 60, y, 20);
          this.circle(x - 80, y, 20);
          this.circle(x - 80, y - 20, 20);
          break;
        }
        case 2: {
          this.circle(x - 40, y, 20);
          this.circle(x - 60, y, 20);
          this.circle(x - 80, y, 20);
          this.circle(x - 80, y - 20, 20);
          this.circle(x - 80, y - 40, 20);
          break;
        }
        case 3: {
          this.circle(x - 60, y, 20);
          this.circle(x - 80, y, 20);
          this.circle(x - 80, y - 20, 20);
          this.circle(x - 80, y - 40, 20);
          this.circle(x - 80, y - 60, 20);
          break;
        }
        case 4: {
          this.circle(x - 80, y, 20);
          this.circle(x - 80, y - 20, 20);
          this.circle(x - 80, y - 40, 20);
          this.circle(x - 80, y - 60, 20);
          this.circle(x - 80, y - 80, 20);
          break;
        }
        case 5: {
          if (y + my > HEIGHT || y + my < 0) my = -my;
          y += my;
          this.circle(x - 80, y, 20);
          this.circle(x - 80, y - 20, 20);
          this.circle(x - 80, y - 40, 20);
          this.circle(x - 80, y - 60, 20);
          this.circle(x - 80, y - 80, 20);
          break;
        }
      }
      w++;
      if (w > 4) {
        w = 5;
      }
    } else {
      this.circle(x, y, 20);
      this.circle(x, y - 20, 20);
      this.circle(x, y - 40, 20);
      this.circle(x, y - 60, 20);
      this.circle(x, y - 80, 20);

      if (x + mx > WIDTH || x + mx < 0) mx = -mx;
      if (y + my > HEIGHT || y + my < 0) my = -my;

      x += mx;
      y += my;
    }
  }

  draw(that) {
    console.log('111')
    that.clear();
    that.snake();

    // if (x + mx > WIDTH || x + mx < 0)
    //     mx = -mx;
    // if (y + my > HEIGHT || y + my < 0)
    //     my = -my;
    //
    // x += mx;
    // y += my;
  }

  keydownControl(e) {
    if (e.keyCode == 37) {
      a = 1;
      key = 37;
      mx = -2;
      my = 0;
    } else if (e.keyCode == 38) {
      w = 1;
      key = 38;
      mx = 0;
      my = -2;
    } else if (e.keyCode == 39) {
      key = 39;
      mx = 2;
      my = 0;
    } else if (e.keyCode == 40) {
      key = 40;
      mx = 0;
      my = 2;
    }
  }

  render() {
    return (
      <div className="App">
        <canvas id="myCanvas" width="568" height="262">
          Sorry, your browser doesn't support canvas technology.
        </canvas>
      </div>
    );
  }
}

export default App;
