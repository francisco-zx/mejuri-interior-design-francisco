import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Slider from 'react-slick';

//Components


class Arrow extends Component {

  render() {
    return (
      <div className='float-left col-sm-1 slider-arrow'>
        <FontAwesome
          className='SliderArrow col-sm-1 d-inline-block SliderArrow'
          name={this.props.icon}
          size='3x'
          onHover={() => this.scrollRight(this.props.scroll)}
        />
      </div>

    );
  }
}

export default Arrow;
