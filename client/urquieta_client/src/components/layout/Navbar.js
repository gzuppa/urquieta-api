import React, { Component } from "react";
import { Menu } from "semantic-ui-react"
import Assets from '../../assets/Assets'
import './Layout.css'

class Navbar extends Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
       <Menu pointing secondary>
          <Menu.Item>
          <img src={Assets.navIcons.logo} className="logo" alt="logo"/>
          </Menu.Item>
          <Menu.Item
            className="menuitem"
            name='Registro'
            active={activeItem === 'register'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            className="menuitem"
            name='Login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              className="menuitem"
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
export default Navbar;