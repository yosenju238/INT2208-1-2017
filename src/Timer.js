var React = require('react');
import DialogAudio from './DialogAudio';

var TimeCountDown = React.createClass({
          stopNoise() {
        var myAudio1 = document.getElementById("rain");
        var myAudio2 = document.getElementById("cafe");
        var myAudio3 = document.getElementById("wind");
        var myAudio4 = document.getElementById("bird");
        var myAudio5 = document.getElementById("ocean");
        var myAudio6 = document.getElementById("frog");
        if (myAudio1.play) {
            myAudio1.pause();
        }
        if (myAudio2.play) {
            myAudio2.pause();
        }
        if (myAudio3.play) {
            myAudio3.pause();
        }
        if (myAudio4.play) {
            myAudio4.pause();
        }
        if (myAudio5.play) {
            myAudio5.pause();
        }
        if (myAudio6.play) {
            myAudio6.pause();
        }
    },
   render: function() {
     if (this.props.time == 0) {
       return this.stopNoise
     }
     if (this.props.time == null || this.props.time == 0) return <div/>
     return <h1>Time left: {this.props.time}</h1>
    }
})

var Timer = React.createClass({
  getInitialState: function () {
    return {time: null, int: null}
  },
  startTimer: function (time) {
      
    clearInterval(this.state.int)
    var _this= this
    
    var int = setInterval(function() {
       
      console.log('2: Inside of setInterval')
      var tl = _this.state.time - 1
      if (tl == 0) clearInterval(int)
      _this.setState({time: tl})
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({time: time, int: int})
  },

    render() {

        return(
            <div>
                              <audio id="rain"  loop = "loop">
                    <source src={require("./audio/rain.mp3")} />
               </audio>
               <audio id="cafe"  loop = "loop">
                    <source src={require("./audio/cafe.mp3")} />
               </audio>
               <audio id="bird"  loop = "loop">
                    <source src={require("./audio/bird.mp3")} />
               </audio>               
               <audio id="wind"  loop = "loop">
                    <source src={require("./audio/wind.mp3")} />
               </audio>
               <audio id="wind"  loop = "loop">
                    <source src={require("./audio/wind.mp3")} />
               </audio>
               <audio id="frog"  loop = "loop">
                    <source src={require("./audio/frog.mp3")} />
               </audio>
               <audio id="ocean"  loop = "loop">
                    <source src={require("./audio/ocean.mp3")} />
               </audio>  
        <div className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Ambient Noise</a>
                </div>
                <div className="collapse navbar-collapse" id="navbar-ex-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li >
                            <a href="home">Home</a>
                        </li>
                        <li class="active">
                            <a href="#">Timer</a>
                        </li>
                        <li>
                            <a href="group">Group</a>
                        </li>
                        <li>
                            <a href="#">More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     
        <div className="section text-right">
            <div className="background-image" style={{backgroundImage: 'url(' + require('./img/pocket_watch_time_clock_bokeh_1920x1080.jpg') + ')'}}></div>
            <div className="container">
                <div className="row">
					<div className="col-md-6">
                        <h3 className="text-left">Journal Article Is Noise Always Bad? Exploring the Effects of Ambient
                            Noise on Creative Cognition</h3>
                        <h1 className="text-primary">Journal of Consumer Research</h1>
                        <p className="lead text-info text-justify">“A moderate level of noise enhances creativity compared to both low and
                            high levels of noise. Moderate background noise induces distraction which
                            encourages individuals to think at a higher, abstract level, and consequently
                            exhibit higher creativity.”</p>
                    </div>
					<div className = "col-md-3">
                        <DialogAudio />
                        <TimeCountDown time={this.state.time}/>
                    </div>
					<div className="col-md-3">
                        <h1 className="text-warning">TIMER</h1>
                        <div className="btn-group-vertical">
										<Button time="60" startTimer={this.startTimer}/>
										<Button time="300" startTimer={this.startTimer}/>
										<Button time="600" startTimer={this.startTimer}/>
										<Button time="900" startTimer={this.startTimer}/>
										<Button time="1800" startTimer={this.startTimer}/>
										<Button time="2700" startTimer={this.startTimer}/>
										<Button time="3500" startTimer={this.startTimer}/>
										
										<button type="button" className="btn btn-primary disabled">Custom Time</button>
						</div>
                    </div>
				</div>
				
			</div>
                    
        </div>  
		
		<footer className="section section-primary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Best experienced with Headphones</h2>
                        <p>We hope you enjoy with those noise</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-info text-right">
                            <br/>
                            <br/>
                        </p>
                        <div className="row">
                            <div className="col-md-12 hidden-lg hidden-md hidden-sm text-left">
                                <a href="#"><i className="fa fa-3x fa-fw fa-instagram text-inverse"></i></a>
                                <a href="#"><i className="fa fa-3x fa-fw fa-twitter text-inverse"></i></a>
                                <a href="#"><i className="fa fa-3x fa-fw fa-facebook text-inverse"></i></a>
                                <a href="#"><i className="fa fa-3x fa-fw fa-github text-inverse"></i></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 hidden-xs text-right">
                                <a href="#"><i className="fa fa-3x fa-fw fa-instagram text-inverse"></i></a>
                                <a href="#"><i className="fa fa-3x fa-fw fa-twitter text-inverse"></i></a>
                                <a href="#"><i className="fa fa-3x fa-fw fa-facebook text-inverse"></i></a>
                                <a href="#"><i className="fa fa-3x fa-fw fa-github text-inverse"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
            </div>
        );
    },
});
var Button = React.createClass({
  startTimer: function (e) {
    return this.props.startTimer(this.props.time)
  },
  render: function () {
    return <button type="button" className='btn btn-primary' onClick={this.startTimer}>
      {this.props.time/60} minutes
    </button>
  }
})
export default Timer;