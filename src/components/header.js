import React, { Component } from 'react';


export default class Header extends Component {
  
  render() {
    let {styleState, toggleMode} = this.props; 
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-${styleState.type} navbar-${styleState.type}`}>
          <div className='container-fluid'>
            <img src="../" alt="" />
            <a className='navbar-brand primary' href='/'>
              Daily-News
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li classNamesName='nav-item'>
                  <a className='nav-link active' aria-current='page' href='/'>
                    Top Headlines
                  </a>
                </li>
                <li classNamesName='nav-item'>
                  <a className='nav-link active' aria-current='page' href='/'>
                    Business
                  </a>
                </li>
                <li classNamesName='nav-item'>
                  <a className='nav-link active' aria-current='page' href='/'>
                    TechCrunch
                  </a>
                </li>

                <li className='nav-item'>
                  <a href='/' className='nav-link' aria-disabled='false'>
                    About
                  </a>
                </li>
              </ul>
              <div class='form-check form-switch'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  role='switch'
                  id='flexSwitchCheckDefault'
                  onClick={toggleMode}
                />
                <label class={`form-check-label bg-${styleState.type}`} style={{color: styleState.color}}for='flexSwitchCheckDefault' >
                  Dark Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
