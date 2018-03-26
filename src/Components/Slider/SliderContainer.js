import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


//Components
import Arrow from './Arrow';

class SliderContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      hovering: false,
      filteredList: []
    }
  }

  scroll = (speed) => {
    this.interval = setInterval(() => {
      this.Slider.children[0].scrollBy(speed, 0);
    }, 1)
  }

  filter(){
    console.log(this.props.activeFilters.designStyle.length)
        let filteredList = this.props.homes.filter((home) => {
          if(this.props.activeFilters.designStyle.length && this.props.activeFilters.qualityStandard.length ){
            return home.metaData.designStyle.some(v => this.props.activeFilters.designStyle.includes(v)) && home.metaData.qualityStandard.some(v => this.props.activeFilters.qualityStandard.includes(v))
          }else if (this.props.activeFilters.designStyle.length) {
            return home.metaData.designStyle.some(v => this.props.activeFilters.designStyle.includes(v))
          }else{
            return home.metaData.qualityStandard.some(v => this.props.activeFilters.qualityStandard.includes(v))
          }
        })
        this.setState({
          filteredList: filteredList
        })
    console.log(filteredList)
  }

  componentWillMount(){
    this.filter();
  }

  componentWillReceiveProps(){
    this.filter();
  }

  render() {
    return (
      <div className=''>
        <a
        onMouseEnter={() => {this.scroll(-2)}}
        onMouseLeave={() => clearInterval(this.interval)}
        className='clickable hidden-xs'
        >
          <Arrow icon='angle-left' />
        </a>
        <div className='col-sm-10 Slider float-left' ref={(div) => { this.Slider = div; }}>
          <div className='flex-grid' id='flex-grid' >
            {
              this.state.filteredList.length ?
                this.state.filteredList.map((home, index) => {
                  return(
                    <div className='flex-item'>
                      <img key={home._id}src={home.imageKey} width='auto' height='300px' className='flex-item-img animated fadeIn'/>
                      <FontAwesome name='heart-o' className='favorites-heart' size='2x'/>
                      <p>{home.metaData.designStyle.map((style,index) => {return(style = ' ')})}</p>
                    </div>
                  )
                })
              : !this.props.activeFilters.designStyle.length && !this.props.activeFilters.qualityStandard.length ?
                this.props.homes.map((home, index) => {
                  return(
                    <div className='flex-item'>
                      <img key={home._id}src={home.imageKey} width='auto' height='300px' className='flex-item-img animated fadeIn' alt='asd'/>
                      <FontAwesome name='heart-o' className='favorites-heart' size='2x'/>
                      <p>{home.metaData.designStyle.map((style,index) => {return(style = ' ')})}</p>
                    </div>
                  )
                })
                : <h5 className='no-results'>No results found :(</h5>
            }
          </div>
        </div>
        <a
        onMouseEnter={() => {this.scroll(2)}}
        onMouseLeave={() => clearInterval(this.interval)}
        className='clickable'>
          <Arrow icon='angle-right'/>
        </a>
      </div>
    );
  }
}

export default SliderContainer;
