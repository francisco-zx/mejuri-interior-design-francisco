import React, { Component } from 'react';
import ReactStars from 'react-stars';
//Components


class Menu extends Component {

  render() {
    return (
      <div className="Menu col-sm-4 animated fadeIn">
        <div className='filters designStyleFilters col-sm-6 d-inline-block animated fadeIn'>
          <label className='animated fadeIn' Style="animation-delay:0.1s">
            Design Styles
          </label>
          <ul className='animated fadeIn menu-list' Style="animation-delay:0.2s">
            {
              this.props.designStyle.map((d, index) => {
                return(
                  <a onClick={() => {this.props.setStyleFilter(d);this.props.updateHeader()}} className='clickable' >
                    <li
                      key={d.id}
                      className='menu-item animated fadeIn '
                      Style={"animation-delay:" + index*0.1 + "s"}
                      >
                      {d.label}
                    </li>
                  </a>
                )
              })
            }
          </ul>
        </div>
        <div className='qualityFilters filters col-sm-6 d-inline-block animated fadeIn' Style="animation-delay:0.4s">
          <label className='animated fadeIn' Style="animation-delay:0.1s">
            Quality
          </label>
          <ul className='animated fadeIn menu-list' Style="animation-delay:0.2s">
            {
              this.props.qualityStandard.map((q, index) => {
                return(
                  <a onClick={() => {this.props.setQualityFilter(q);this.props.updateHeader()}} className='clickable'>
                    <li key={q.id} className='animated fadeIn menu-item' Style={"animation-delay:" + index*0.1 + "s"}>
                      <ReactStars
                        count={5}
                        value={q.id}
                        edit={false}
                        color1={'#e2e2e2'}
                        color2={'#808080'}
                        className={'clickable'}
                      />
                    </li>
                  </a>
                )
              })
            }
          </ul>
        </div>
        {
          this.props.activeFilters.designStyle.length || this.props.activeFilters.qualityStandard.length ?
          <a onClick={() => this.props.clearFilters()} Style='color:#428bca;' className='clickable clearFilters animated fadeIn'>
            <aside><b>CLEAR</b></aside>
          </a>
          : ''
        }
      </div>
    );
  }
}

export default Menu;
