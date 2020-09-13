import React from 'react'
import { Grid, Form, Checkbox, Button, Image } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const FormAndMap = () => (
    <Grid columns="equal" className="formap-grid">
    <Grid.Row>
        <Grid.Column>
        <div class="formap 1">
            <div>
                <p className="title-formap">¿Sospechas que tu o un familiar no escucha bien?</p>
                <p className="subtitle-formap">Examen de audición gratis</p>
                <p className="addtitle-formap">Registrate y programa tu cita</p>
                <div>
                <Form className="formap-form">
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
                        <Checkbox label='Acepto enviar mi información para que se me contacte' />
                    </Form.Field>
                        <Button type='submit' className="formap-button">Enviar</Button>
                </Form>
                </div>
            </div>
        </div>
        </Grid.Column>
        <Grid.Column columns="equal">
            <Grid columns={2} >
                <Grid.Row>
                <Grid.Column className="map-768">
                    <Image src={Assets.generalImgs.miramontes} className="map-img map-768-mir"/>
                    <span className="map-title ">Miramontes</span>
                    <br/>
                    <span className="map-subtitle">Av. Canal de Miramontes 2761 Loc. D PB Col
                    
                        Jardínes de Coyoacán C.P. 04890, CDMX.</span>
                    <br/>
                    <span className="map-title">(55) 5677 9396</span>
                </Grid.Column>
                <Grid.Column>
                    <Image src={Assets.generalImgs.avante} className="map-img map-768-av"/>
                    <span className="map-title">Avante</span>
                    <br/>
                    <span className="map-subtitle">Av. Canal de Miramontes 2332a Col. Avante C.P.
                        04406, CDMX</span>
                    <br/>
                    <span className="map-title">(55) 5679 8390</span>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column className="map-768">
                    <Image src={Assets.generalImgs.cuernavaca} className="map-img"/>
                    <span className="map-title">Cuernavaca</span>
                    <br/>
                    <span className="map-subtitle">Blvd. Benito Juárez 58 Loc. 9 y 10 Col. Palmas, C.P.
                        62050, Cuernavaca, Morelos.</span>
                    <br/>
                    <span className="map-title">(777) 318 2339</span>
                </Grid.Column>
                <Grid.Column>
                    <Image src={Assets.generalImgs.queretaro} className="map-img"/>
                    <span className="map-title">Querétaro</span>
                    <br/>
                    <span className="map-subtitle">Av. Constituyentes 7 8c Col. Alameda C.P. 76040,
                        Querétaro, Querétaro.</span>
                    <br/>
                    <span className="map-title">(442) 212 9891</span>   
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default FormAndMap