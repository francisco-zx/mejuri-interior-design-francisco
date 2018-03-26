import React, { Component } from 'react';
import './App.css';

//data
import Data from './data.json';
//Components
import Header from './Components/Layout/Header';
import SliderContainer from './Components/Slider/SliderContainer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      homes: [],
      designStyle: [],
      qualityStandard: [],
      activeFilters:{
        designStyle: [],
        qualityStandard: []
      }
    }
    this.setStyleFilter = this.setStyleFilter.bind(this);
    this.setQualityFilter = this.setQualityFilter.bind(this);
    this.removeStyleFilter = this.removeStyleFilter.bind(this);
    this.removeQualityFilter = this.removeQualityFilter.bind(this);
  }

  componentWillMount(){
    this.setState({
      homes: Data.data,
      designStyle: Data.designStyle,
      qualityStandard: Data.qualityStandard
    })
  }

  setStyleFilter = (d) => {
    this.state.activeFilters.designStyle.indexOf(d.id) === -1 ?
      this.state.activeFilters.designStyle.push(d.id)
    :console.log('This category isx already active');
    this.setState({
      updated: 'setFilters'
    })
  }

  setQualityFilter = (q) => {
    this.state.activeFilters.qualityStandard.indexOf(q.id) === -1 ?
      this.state.activeFilters.qualityStandard.push(q.id)
    :console.log('This category is already active');
    this.setState({
      updated: 'setFilters'
    })
    console.log(this.state.activeFilters.qualityStandard)
  }

  removeStyleFilter = (d) => {
    const index = this.state.activeFilters.designStyle.indexOf(d);
    this.state.activeFilters.designStyle.splice(index, 1);
    this.setState({
      updated: 'removeFilters'
    })
  }

  removeQualityFilter = (q) => {
    const index = this.state.activeFilters.qualityStandard.indexOf(q);
    this.state.activeFilters.qualityStandard.splice(index, 1);
    this.setState({
      updated: 'removeFilters'
    })
  }

  clearFilters = () => {
    this.setState({
      activeFilters:{
        designStyle: [],
        qualityStandard:[]
      },
      asdasd: 'clearFilters'
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          designStyle={this.state.designStyle}
          qualityStandard={this.state.qualityStandard}
          activeFilters={this.state.activeFilters}
          setStyleFilter={this.setStyleFilter}
          removeStyleFilter={this.removeStyleFilter}
          setQualityFilter={this.setQualityFilter}
          removeQualityFilter={this.removeQualityFilter}
          clearFilters={this.clearFilters}
        />
        <SliderContainer
          homes={this.state.homes}
          activeFilters={this.state.activeFilters}
        />
      </div>
    );
  }
}

export default App;
