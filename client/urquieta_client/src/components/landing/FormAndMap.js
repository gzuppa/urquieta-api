import React from 'react'
import { Grid, Form, Checkbox, Button } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const FormAndMap = () => (
    <Grid columns="equal">
    <Grid.Row>
        <Grid.Column>
        <div class="formap 1">
            <div>
                <p className="title-formap">¿Sospechas que tu o un familiar no escucha bien?</p>
                <p className="subtitle-formap">Examen de audición gratis</p>
                <p className="addtitle-formap">Registrate y programa tu cita</p>
                <div>
                <Form>
                    <Form.Field>
                        <input placeholder='Nombre' className="formap-input"/>
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Teléfono' className="formap-input"/>
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Correo' className="formap-input"/>
                    </Form.Field>
                    <Form.Field className="formap-checkbox">
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Form.Field className="formap-checkbox">
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field> 
                        <Button type='submit' className="formap-button">Enviar</Button>
                </Form>
                </div>
            </div>
        </div>
        </Grid.Column>
        <Grid.Column>
      
        </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default FormAndMap