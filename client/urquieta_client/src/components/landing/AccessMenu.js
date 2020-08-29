import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import './landing.css'

const AccessMenu = () => (
    <Button.Group widths='3' className="AccessMenu">
    <Button className="btnAccessMenu">Examen de audición gratuito</Button>
    <Button className="btnAccessMenu">
      <Link to="/auxiliars">
      Auxiliares auditivos</Link></Button>
    <Button className="btnAccessMenu">Precio y cotización</Button>
  </Button.Group>
)

export default AccessMenu