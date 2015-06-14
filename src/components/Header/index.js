import React from 'react';
import Nav from '../Nav';
import Search from '../Search';

export default class Header extends React.Component {
  static displayName = 'SG.Header';

  state = {
    visibleMenu: false
  };

  toggleMenu() {
    this.setState({ visibleMenu: !this.state.visibleMenu });
  }

  render() {
    return (
      <header className="sg sg-header">
        <div className="sg sg-header-inner">
          <h1 className="sg sg-header-title">
            <a className="sg sg-header-title-link" href=".">{document.title}</a>
          </h1>
          <p className="sg sg-header-copy">
            Generated by <a
              className="sg sg-header-copy-link"
              href="https://github.com/pocotan001/react-styleguide-generator"
              target="_blank"
            >
              react-sg
            </a>
          </p>
          <button
            className="sg sg-header-toggle-menu"
            type="button"
            onClick={this.toggleMenu.bind(this)}
          >
            <i className="fa fa-bars" />
          </button>
          <div className={`sg sg-header-menu${this.state.visibleMenu ? ' is-visible' : ''}`}>
            <Search defaultValue={this.props.searchQuery} />
            <Nav selectedCategory={this.props.selectedCategory} />
          </div>
        </div>
      </header>
    );
  }
}