import React, { Component } from 'react'
import Divider, { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import '../App.css';
import Routes from "../Routes";

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={this.handleItemClick}
          >
            <Link to="/">Home</Link>

          </Menu.Item>

          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}
          >
            <Link to="/opt2">Option2</Link>
          </Menu.Item>

          <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.handleItemClick}
          >
            <Link to="/opt3">Option3</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}