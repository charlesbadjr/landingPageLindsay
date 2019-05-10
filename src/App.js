import React from 'react';
import Home from './Home';
import './App.css';
import {Image, Header } from 'Semantic-ui-React';
import Countdown from 'react-countdown-now';



const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return 
        < Completionist />;
      } else {
        return <span> {hours}:{minutes}:{seconds}</span>;
      }
    };



class App extends React.Component {
  

  


  render(){
    return (
      <div className="App">
        <Header className="App-header"> Lindsay Jungst </Header>
        
          <p>
            Adventure begins 
          </p>
          
          <Header> 
            <Countdown
                date={Date.now() + 5000}
                renderer={renderer} />
          </Header>
      
      </div>
    );
  }
}

export default App;
