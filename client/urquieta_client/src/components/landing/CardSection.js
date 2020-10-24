import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const CardSection = () => (
    <Grid columns='equal'>
    <Grid.Row columns={3} only="computer">
      <Grid.Column>
        <section class="hero-section">
      <div class="landing-card-grid">
    <a class="landing-card" href="#">
      <div class="landing-card__background landing-card1"></div>
      <div class="landing-card__content ">
        <p class="landing-card__category">Intracanales</p>
        <h3 class="landing-card__heading">Se coloca dentro del canal auditivo de forma discreta.</h3>
      </div>
    </a>
    <a class="landing-card" href="#">
      <div class="landing-card__background landing-card2"></div>
      <div class="landing-card__content">
        <p class="landing-card__category">Curveta</p>
        <h3 class="landing-card__heading">Mayor potencia con una batería de larga duración.Hay curvetas de diferentes tamaños y pueden cubrir desde la baja auditiva más leve
          hasta la más profunda. Existe una generación de curvetas mini, que se esconden tras la oreja</h3>
      </div>
    </a>
    <a class="landing-card" href="#">
      <div class="landing-card__background landing-card3"></div>
      <div class="landing-card__content">
        <p class="landing-card__category">vibración ósea</p>
        <h3 class="landing-card__heading">El sistema vibratorio se coloca detrás de la oreja, transforma las ondas sonoras en vibraciones y así amplica el sonido. Estimula
         directamente a la cóclea o caracol sin necesidad de que pase el sonido po el conducto auditivo.</h3>
      </div>
    </a>
  </div>
  </section>
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