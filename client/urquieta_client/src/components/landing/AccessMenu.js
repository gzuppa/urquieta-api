import React from 'react'
import { Button, Divider } from 'semantic-ui-react'
import './landing.css'

const AccessMenu = () => (
    <Button.Group widths='3' className="AccessMenu">
    <Button className="btnAccessMenu">Examen de audición gratuito</Button>
    <Button className="btnAccessMenu">Auxiliares auditivos</Button>
    <Button className="btnAccessMenu">Precio y cotización</Button>
    <Divider vertical>And</Divider>
  </Button.Group>
)

export default AccessMenu