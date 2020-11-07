import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import '../routes.css'

class RicList extends Component {
    render(){
        return(
            <div>
                <List bulleted className="ric-list">
                    <List.Item>Claridad + potencia + estetica</List.Item>
                    <List.Item>Tecnología: app</List.Item>
                    <List.Item>Durabilidad (ip67)</List.Item>
                    <List.Item>Bluetooth</List.Item>
                    <List.Item>Alta fidelidad en música</List.Item>
                </List>
            </div>
        )
    }
}

export default RicList