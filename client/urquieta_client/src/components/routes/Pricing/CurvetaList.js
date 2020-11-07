import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import '../routes.css'

class CurvetaList extends Component {
    render(){
        return(
            <div>
                <List bulleted className="curveta-list">
                    <List.Item>Recomendado para presbiacusia</List.Item>
                    <List.Item>Baja auditiva severa</List.Item>
                    <List.Item>Versátil</List.Item>
                    <List.Item>Fácil de usar (motricidad)</List.Item>
                    <List.Item>Gran precio</List.Item>
                </List>
            </div>
        )
    }
}

export default CurvetaList