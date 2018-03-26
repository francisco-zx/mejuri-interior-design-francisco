import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

//Components
import Menu from './Menu';
import ActiveFilters from './ActiveFilters';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  update = () => {
      this.setState({
        menuOpen : this.state.menuOpen
      })
  }

  handleClickMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <div className="Header col-xs-12">
        <div className="col-sm-10 offset-1 p-0">
        <FontAwesome
          size='2x'
          name='bars'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          tag='i'
          className='clickable'
          onClick={this.handleClickMenu}
        />
        {
          this.state.menuOpen ?
            <Menu
              designStyle={this.props.designStyle}
              qualityStandard={this.props.qualityStandard}
              setStyleFilter={this.props.setStyleFilter}
              setQualityFilter={this.props.setQualityFilter}
              activeFilters={this.props.activeFilters}
              updateHeader={this.update}
              clearFilters={this.props.clearFilters}
              handleClickMenu={this.handleClickMenu}
            />
          : ''
        }
        <ActiveFilters
          designStyle={this.props.designStyle}
          qualityStandard={this.props.qualityStandard}
          activeFilters={this.props.activeFilters}
          removeStyleFilter={this.props.removeStyleFilter}
          removeQualityFilter={this.props.removeQualityFilter}
          updateHeader={this.update} />
        </div>
      </div>
    );
  }
}

export default Header;
