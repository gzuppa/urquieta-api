import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const CardSection = () => (
    <Grid columns='equal'>
    <Grid.Row columns={3} only="computer">
      <Grid.Column>
      <div className="center">
        <div className="property-card">
          <a href="#">
            <div className="property-image prop-img1">
              <div className="property-image-title">
              </div>
            </div></a>
          <div class="property-description">
            <h5 className="property-card-title"> Intracanales </h5>
            <p className="property-card-paragraph">Se coloca dentro del canal auditivo de forma discreta.
                Son adecuados para pérdida auditiva de leve a ligeramente severa.
                Se moldea para colocarse en el interior del conducto 
                auditivo adaptandose a la perfección  </p>
          </div>
          </div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div class="center">
        <div class="property-card">
          <a href="#">
            <div class="property-image prop-img2">
              <div class="property-image-title">
              </div>
            </div></a>
          <div class="property-description">
            <h5 className="property-card-title"> Curveta </h5>
            <p className="property-card-paragraph">Mayor potencia con una batería de larga duración. Hay
                curvetas de diferentes tamaños y pueden cubrir desde la
                baja auditiva más leve hasta la más profunda. Existe una 
                generación de curvetas mini, que se esconden tras la 
                oreja.</p>
          </div>
        </div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div class="center">
        <div class="property-card">
          <a href="#">
            <div class="property-image prop-img3">
              <div class="property-image-title">
              </div>
            </div></a>
          <div class="property-description">
            <h5 className="property-card-title"> Sistemas de vibración osea </h5>
            <p className="property-card-paragraph">El sistema vibratorio se coloca detrás de la oreja, transforma
                las ondas sonoras en vibraciones y así amplifica el sonido. 
                Estimula directamente a la cóclea o caracol sin necesidad de 
                que pase el sonido por el conducto auditivo.</p>
          </div>
        </div>
      </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1} only="mobile">
      <Grid.Column>
      <Card color="blue" link className="card-devices">
            <Image src={Assets.generalImgs.card1} className="card-photo"/>
            <Card.Content>
            <Card.Header className="card-header">Intracanales</Card.Header>
            <Card.Description className="card-desc">
                Se coloca dentro del canal auditivo de forma discreta.
                Son adecuados para pérdida auditiva de leve a ligeramente severa.
                Se moldea para colocarse en el interior del conducto 
                auditivo adaptandose a la perfección                                                                     
            </Card.Description>
            </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
      <Card color="blue" link className="card-devices">
            <Image src={Assets.generalImgs.card2} className="card-photo" />
            <Card.Content>
            <Card.Header className="card-header">Curveta</Card.Header>
            <Card.Description className="card-desc">
                Mayor potencia con una batería de larga duración. Hay
                curvetas de diferentes tamaños y pueden cubrir desde la
                baja auditiva más leve hasta la más profunda. Existe una 
                generación de curvetas mini, que se esconden tras la 
                oreja.
            </Card.Description>
            </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
      <Card color="blue" link className="card-devices">
            <Image src={Assets.generalImgs.card3} className="card-photo" />
            <Card.Content>
            <Card.Header className="card-header">Sistemas de vibración osea</Card.Header>
            <Card.Description className="card-desc">
                El sistema vibratorio se coloca detrás de la oreja, transforma
                las ondas sonoras en vibraciones y así amplifica el sonido. 
                Estimula directamente a la cóclea o caracol sin necesidad de 
                que pase el sonido por el conducto auditivo.
            </Card.Description>
            </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default CardSection