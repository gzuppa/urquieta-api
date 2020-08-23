import React from 'react'
import { Grid, Image, Card, Icon } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import './landing.css'

const CardSection = () => (
    <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
      <Card className="card-devices">
            <Image src={Assets.generalImgs.card1} wrapped ui={false} />
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
      <Card className="card-devices">
            <Image src={Assets.generalImgs.card2} wrapped ui={false} />
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
      <Card className="card-devices">
            <Image src={Assets.generalImgs.card3} wrapped ui={false} />
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