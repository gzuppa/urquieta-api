import React, { Component } from 'react'
import {List} from 'semantic-ui-react'

class Texts extends Component {
    render(){
        return(
            <div>
               <p className="backtxtk1">Campo de aplicación</p>
               <p className="backtxtk3">Apenas visible,<br/>potente rendimiento</p>
               <List bulleted className="kids-top-list">
                    <List.Item>Microtia-atresia</List.Item>
                    <List.Item>Pérdida auditiva de tipo conductivo</List.Item>
                    <List.Item>Otorrea crónica</List.Item>
                    <List.Item>Otitis media crónica</List.Item>
                    <List.Item>Otoesclerosis</List.Item>
                    <List.Item>Causas anatómicas</List.Item>
                    <List.Item>Pérdida auditiva mixta</List.Item>
                    <List.Item>Sordera unilateral (cross)</List.Item>
                </List>
            </div>
        )
    }
}

export default Texts