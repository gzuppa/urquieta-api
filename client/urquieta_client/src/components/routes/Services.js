import React, { Component } from "react";
import Navbar from '../common/Navbar'
import AccessMenu from '../landing/AccessMenu'
import { Item } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './routes.css'

class Services extends Component {
  render() {
    return (
        <div>
     <Navbar />
     <AccessMenu />
     <Item.Group>
     <Item>
      <Item.Image size='tiny' src={Assets.servicesImgs.ear} />
      <Item.Content verticalAlign='middle'>
        <p className="header-text header-services">Servicios</p>
      </Item.Content>
    </Item>
    </Item.Group>
        </div>
    );
  }
}
export default Services;