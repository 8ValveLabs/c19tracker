import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar'
import Hamburger from './components/Hamburger/Hamburger'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer, Label } from 'recharts';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    chartData : [],
    chartLabels : [],
    timestamp : "",
    graphHeight : document.body.clientHeight
  };

  formatIT(someData)
  {
    let formattedAray = [];
    for (let index = 0; index < someData.length; index++) 
    {
      let buildObj = { 
        'date':someData[index].date,
        'num':someData[index].numtoday
      };
      formattedAray.push(buildObj);
    }
    return formattedAray;
  }
  
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  switchCountry = (e) =>
  {
    console.log(e.target.value)
    fetch('http://127.0.0.1:5000/' + e.target.value + '/NewCases')
    .then(res => res.json())
    .then(data => this.setState(
        {
          chartData:this.formatIT(data)
        }
      )
    )
  }

  componentDidMount()
  {
    fetch('http://127.0.0.1:5000/Ontario/NewCases')
    .then(res => res.json())
    .then(data => this.setState(
        {
          chartData:this.formatIT(data)
        }
      )
    )
    this.setState(
      {
        graphHeight : '100%'
      }
    );
  }

  render()
  {
    return (
      <div className="App">
        <ResponsiveContainer width='100%' height="90%">
          <AreaChart data={this.state.chartData} label
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="date" name="Date">
              <Label value="Date" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis dataKey="num"
             scale="linear"
             label={{ value: 'New Cases', angle: -90, position: 'insideLeft' }}
            />
            <CartesianGrid strokeDasharray="4 4" />
            <Tooltip />
            <Area type="monotone" dataKey="num" stroke="#ff0000" fill="#ff0000" />
          </AreaChart>
          </ResponsiveContainer>
        <Hamburger show={this.state.sideDrawerOpen} click={this.backdropClickHandler} provinceclick={this.switchCountry}/>
          <Navbar msg="yeeet" click={this.drawerToggleClickHandler} provinceclick={this.switchCountry}/>
      </div>
    );
  }
  
}

export default App;
