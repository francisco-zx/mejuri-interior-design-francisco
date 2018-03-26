import React, { Component } from 'react';
import ReactStars from 'react-stars';
import FontAwesome from 'react-fontawesome';
//Components


class ActiveFilters extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillRecieveProps(){
    this.forceUpdate()
  }

  render() {
    return (
      <div className="activeFilters d-inline-block col-sm-11">
      {
        this.props.activeFilters.designStyle.map((filter, index) => {
        let filterLabel = this.props.designStyle.find((f) => {
          return f.id === filter
        }).label
        console.log(this.props.designStyle)
        return(
          <span className='badge-pill badge-secondary animated fadeIn'>
            {filterLabel} <FontAwesome name='times-circle' className='animated fadeIn clickable' onClick={() => {this.props.removeStyleFilter(filter);this.props.updateHeader()}} />
          </span>
        )
      })}
      {
        this.props.activeFilters.qualityStandard.map((filter, index) => {
        let currentFilter = this.props.qualityStandard.find((f) => {
          return f.id === filter
        })
        return(
            <span className='badge-pill badge-secondary animated fadeIn'>
            {currentFilter.label} <FontAwesome name='times-circle' className='animated fadeIn clickable' onClick={() => {this.props.removeQualityFilter(filter);this.props.updateHeader()}} />
            </span>
        )
      })}
      </div>
    );
  }
}

export default ActiveFilters;
