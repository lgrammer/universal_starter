import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import logo2 from "../img/logo2.svg";
import logo3 from "../img/logo3.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      > <div className="holder">
                    <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >            <span />
            <span />
            <span /></div>
            </div>
        
        <div className="container mobile">
          

            <Link to="/" className="logo-custom" title="Logo">
              <img src={logo3} alt="Kaldi" />
            </Link>

            {!this.state.active  ?  <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products & Services
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
      
          </div>
        </div> : null}
  
        </div>
      </nav>
         {this.state.active  ?  <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products & Services
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
      
          </div>
        </div> : null}
        </>
    );
  }
};

export default Navbar;
