import React from 'react';

const styleLuck = {
  backgroundColor: 'black',
  width: '600px',
  border: '15px solid green',
  padding: '50px',
  margin: 'auto',
  marginTop:'200px',
  color:'white',
  fontSize:'20px',
  fontWeight:'20'
}
const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '20px 40px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 50px',
  cursor: 'pointer',
}
const buttonPrimary = {
  backgroundColor: 'red',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 250px',
  cursor: 'pointer',
}
const buttonNext = {
  backgroundColor: 'blue',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '14px 250px',
  cursor: 'pointer',
}
const divStyle = {
  backgroundColor: 'black',
  width: '600px',
  border: '15px solid green',
  padding: '50px',
  margin: 'auto',
  marginTop:'200px'
}

const styleHeading = {
  textAlign:'center',
  color:'white'
}
const styleAttempts = {
  color:'white'
}
const styleLucky = {
  color:'white',
  marginLeft:'450px',
  marginTop:'20px'
}
const styleWrong = {
  color:'white',
  marginLeft:'450px'
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      complete:false,
      toggleRandom: false,
      numberOne: 0,
      numberTwo: 0,
      numberThree:0,
      luckyNumber:0,
      numberOfAttempts:0,
      luckyAttempts:0,
      wrongAttempts:0,
    }
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.generateLuckyNumber = this.generateLuckyNumber.bind(this);
    this.generateRandomNumbers = this.generateRandomNumbers.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleLastClick = this.handleLastClick.bind(this);
}
  componentDidMount(){
    this.generateRandomNumbers()
  }

  generateRandomNumbers(){
    this.setState({ numberThree:Math.floor(Math.random() * 100)})
    do {
        this.setState({numberOne:Math.floor(Math.random() * 100)})
      } while(this.state.numberOne === this.state.numberThree);
    
    do {
        this.setState({numberTwo : Math.floor(Math.random() * 100)})
      }while(this.state.numberTwo === this.state.numberThree || this.state.numberTwo === this.statenumberOne)
    this.generateLuckyNumber() 
  }

  generateLuckyNumber(){
      var numbers = [];
      numbers.push(this.state.numberOne);
      numbers.push(this.state.numberTwo);
      numbers.push(this.state.numberThree);
      this.setState({ luckyNumber : numbers[Math.floor(Math.random() * 3)] })
  }
  handleLastClick(){
    if(this.state.numberOfAttempts=== 9){
      this.setState(prevState => ({
        complete: !this.state.complete
      }))
    }
  }
  handleClickOne(){
      this.setState({ toggleRandom:!this.state.toggleRandom })
      this.setState(prevState => ({
        numberOfAttempts: prevState.numberOfAttempts+1
      }));
      if(this.state.numberOne === this.state.luckyNumber){
        this.setState(prevState => ({
          luckyAttempts: prevState.luckyAttempts+1
        }));
      }else{
        this.setState(prevState => ({
          wrongAttempts: prevState.wrongAttempts+1
        }));
      }
      this.handleLastClick()
    }
  handleClickTwo(){
    this.setState({ toggleRandom:!this.state.toggleRandom })
    this.setState(prevState => ({
      numberOfAttempts: prevState.numberOfAttempts+1
    }));
    if(this.state.numberTwo === this.state.luckyNumber){
      this.setState(prevState => ({
        luckyAttempts: prevState.luckyAttempts+1
      }));
    }else{
      this.setState(prevState => ({
        wrongAttempts: prevState.wrongAttempts+1
      }));
    }
    this.handleLastClick()
}
  handleClickThree(){
  this.setState({ toggleRandom:!this.state.toggleRandom })
  this.setState(prevState => ({
    numberOfAttempts: prevState.numberOfAttempts+1
  }));
  if(this.state.numberThree === this.state.luckyNumber){
    this.setState(prevState => ({
      luckyAttempts: prevState.luckyAttempts+1
    }));
  }else{
    this.setState(prevState => ({
      wrongAttempts: prevState.wrongAttempts+1
    }));
  }
  this.handleLastClick()
}

  handleNext(){
      this.setState({ toggleRandom:!this.state.toggleRandom })
      this.generateRandomNumbers()
  }
  render(){
    if(this.state.complete === true){
      if(this.state.luckyAttempts >= 0 && this.state.luckyAttempts <= 3){
          return(
            <div style = { styleLuck }>
              Bad Luck
            </div>
          )
        }else if(this.state.luckyAttempts >= 4 && this.state.luckyAttempts <= 6){
          return(
            <div style = { styleLuck }>
              Bad Luck
            </div>
          )
        }else{
          return(
            <div style = { styleLuck }>
              Bad Luck
            </div>
          )
        }
  }else{
    return (
    <body className="App">
      <div  style={divStyle}>
        <h1 style={ styleHeading }>Luck Calculator</h1>
        <button onClick={ this.handleClick } style={ buttonPrimary }>{  this.state.luckyNumber }</button>
        <br />
        <p style = { styleAttempts }>Attempts:{(this.state.numberOfAttempts)}/10<br /></p>
        <p style = { styleLucky }>Lucky Attempts:{(this.state.luckyAttempts)}<br /></p>
        <p style = { styleWrong }>Wrong Attempts:{(this.state.wrongAttempts)}<br /></p>
        <button onClick={ this.handleClickOne } style={ buttonStyle }>{ this.state.toggleRandom? this.state.numberOne:'?' }</button>
        <button onClick={ this.handleClickTwo } style={ buttonStyle }>{ this.state.toggleRandom? this.state.numberTwo:'?' }</button>
        <button onClick={ this.handleClickThree } style={ buttonStyle }>{ this.state.toggleRandom? this.state.numberThree:'?' }</button>
        <br />
        <button onClick={ this.handleNext } style={ buttonNext }>next</button>
      </div>
    </body>
    );
  }
}
}

export default App;
