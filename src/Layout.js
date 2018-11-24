import React, { Component } from 'react';
import Context from './context';
import trans from './trans';

class Layout extends Component {
  state = {
    isToggled: false
  }

  handleToggle = () => {
    this.setState({
      isToggled: !this.state.isToggled
    })
  }

  render() {
    return(

      <Context.Consumer>
        {context => {
          return(
            <div className="container">
              <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                  <a className="navbar-item" href="/">
                    <img
                      src="https://bulma.io/images/bulma-logo.png"
                      alt="Bulma: a modern CSS framework based on Flexbox"
                      width={112}
                      height={28}
                    />
                  </a>
                  <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                  >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                  </a>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item">{trans[context.state.language]['Home']}</a>
                  <div className={
                    `dropdown navbar-item ${this.state.isToggled ? 'is-active' : '' }`
                  }>
                    <div className="dropdown-trigger">
                      <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={this.handleToggle}
                      >
                        <span>en</span>
                        <span className="icon is-small">
                          <i className="fas fa-angle-down" aria-hidden="true" />
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a href="#" className={
                          `dropdown-item ${context.state.language == 'en' ? 'is-active' : '' }`
                        }
                        onClick={() => {
                          this.handleToggle();
                          context.changeLanguage('en');
                        }}
                        >
                          en
                        </a>
                        <a href="#" className={
                          `dropdown-item ${context.state.language == 'id' ? 'is-active' : '' }`
                          }
                          onClick={() => {
                            this.handleToggle();
                            context.changeLanguage('id');
                          }}
                        >
                          id
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              {this.props.children}
            </div>
          );
        }}
      </Context.Consumer>
      
    );
  }
}

export default Layout;