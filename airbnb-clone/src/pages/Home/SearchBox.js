import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  state = {
    where: '',
    checkIn: '',
    checkOut: '',
    guests: 0,
  };
  // will cause a re-render
  changeWhere = (e) => {
    this.setState({ where: e.target.value });
  };
  changeCheckIn = (e) => {
    this.setState({ checkIn: e.target.value });
  };
  changeCheckOut = (e) => {
    this.setState({ checkOut: e.target.value });
  };
  changeGuests = (e) => {
    this.setState({ guests: e.target.value });
  };

  submitSearch = (e) => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.where}`)
  }
  render() {
    return (
      <div className='home-search-box col m4'>
        <h1>Book unique places to stay and things to do.</h1>

        <form onSubmit={this.submitSearch} className='search-box-form'>
          <div className='col m12'>
            <div className='form-label'>Where</div>
            <div className='input-field' id='where'>
              <input
                className='browser-default'
                onChange={this.changeWhere}
                placeholder='Anywhere'
                value={this.state.where}
                type='text'
              />
            </div>
          </div>

          <div className='col m6'>
            <div className='form-label'>Check-In</div>
            <div className='input-field' id='check-in'>
              <input
                className='browser-default'
                onChange={this.changeCheckIn}
                placeholder='Anywhere'
                value={this.state.checkIn}
                type='date'
              />
            </div>
          </div>

          <div className='col m6'>
            <div className='form-label'>Check-Out</div>
            <div className='input-field' id='check-out'>
              <input
                className='browser-default'
                onChange={this.changeCheckOut}
                placeholder='Anywhere'
                value={this.state.checkOut}
                type='date'
              />
            </div>
          </div>

          <div className='col m12'>
            <div className='form-label'>Number of Guests</div>
            <div className='input-field' id='guests'>
              <input
                className='browser-default'
                onChange={this.changeGuests}
                placeholder='Anywhere'
                value={this.state.guests}
                type='number'
              />
            </div>
          </div>

          <div className='col m12 submit-btn'>
            <div className='input-field' id='submit-btn'>
              <input
                className='btn-large waves-effect waves-light red accent-2'
                type='submit'
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
