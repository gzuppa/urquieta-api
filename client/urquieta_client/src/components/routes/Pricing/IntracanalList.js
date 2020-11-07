import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import '../routes.css'

class IntracanalList extends Component {
    render(){
        return(
            <div>
                <List bulleted className="intracanal-list">
                    <List.Item>Potencia y discreción</List.Item>
                    <List.Item>Compatibilidad con Bluetooth</List.Item>
                    <List.Item>Mayor calidad de sonido</List.Item>
                    <List.Item>Confortable dentro del oído</List.Item>
                </List>
            </div>
        )
    }
}

export default IntracanalList