import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }
 
  render() {
    return (
      <Button className='button'variant='contained' style={{color:'white'}} onClick={this.logout}>Logout</Button>
    )
  }
}