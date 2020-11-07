import React, { Component } from 'react'
import Navbar from '../../common/Navbar'
import { Grid, List } from 'semantic-ui-react'
import Assets from '../../../assets/Assets'
import RicList from './RicList'
import CurvetaList from './CurvetaList'
import IntracanalList from './IntracanalList'

class Pricing extends Component {
    render(){
        return(
            <div>
            <Navbar />

            <Grid.Row>
                <img src={Assets.pricingImgs.topBackground} alt="top-back" className="pricing-top-back" />
                <p className="pricing-top-title">¿Cuanto cuesta</p>
                    <p className="pricing-top-subtitle">un auxiliar</p>
                    <p className="pricing-top-subsubtitle">auditivo?</p>
                    <p className="pricing-top-subquestion">Cada oído es único y tiene necesidades auditivas particulares, no existe un aparato genérico para todos por lo tanto no hay un precio específico, siempre es importante que un profesional le realice un examen de audición y asesore cuál es el mejor auxiliar auditivo para usted.<br/>
                    En Auditivos Urquieta su auxiliar auditivo se personaliza con las características ideales para cada paciente.</p>
            </Grid.Row>

            <Grid.Row>
                <img src={Assets.pricingImgs.firstImage} alt="first-image" className="pricing-1st-img" />
            </Grid.Row>

            <Grid.Row>
                <p className="pricing-1st-title">Rango de precios</p>
                <div class="pricing-hypo-container">
                            <div class="pricing-hypo-card pricing-card1">
                                <h3 class="pricing-hypo-title">Gama básica</h3>
                                <div class="pricing-hypo-bar">
                                <div class="pricing-hypo-emptybar"></div>
                                <div class="pricing-hypo-filledbar"></div>
                                </div>
                                <div class="pricing-hypo-circle">
                                <h3 class="pricing-hypo-subtitle">$6,000</h3>
                                </div>
                            </div>
                            <div class="pricing-hypo-card pricing-card2">
                                <h3 class="pricing-hypo-title">Gama media</h3>
                                <div class="pricing-hypo-bar">
                                <div class="pricing-hypo-emptybar"></div>
                                <div class="pricing-hypo-filledbar"></div>
                                </div>
                                <div class="pricing-hypo-circle">
                                <h3 class="pricing-hypo-subtitle">$12,000</h3>
                                </div>
                            </div>
                            <div class="pricing-hypo-card pricing-card3">
                                <h3 class="pricing-hypo-title">Gama alta</h3>
                                <div class="pricing-hypo-bar">
                                <div class="pricing-hypo-emptybar"></div>
                                <div class="pricing-hypo-filledbar"></div>
                                </div>
                                <div class="pricing-hypo-circle">
                                <h3 class="pricing-hypo-subtitle">$24,000</h3>
                                </div>
                            </div>
                            <div class="pricing-hypo-card pricing-card4">
                                <h3 class="pricing-hypo-title">Gama Premium</h3>
                                <div class="pricing-hypo-bar">
                                <div class="pricing-hypo-emptybar"></div>
                                <div class="pricing-hypo-filledbar"></div>
                                </div>
                                <div class="pricing-hypo-circle">
                                <h3 class="pricing-hypo-subtitle">$48,000</h3>
                                </div>
                            </div>
                            </div>
            </Grid.Row>

            <Grid.Row className="pricing-cost"> 
            <p className="issues-nocost pricing-nocost">Sin costo</p>
            <p className="pricing-cost-subtitle">Nosotros te asesoramos</p>
            <p className="pricing-cost-subsubtitle">Contáctanos y recibe la llamada de un especialista</p>
            <img src={Assets.pricingImgs.button} alt="button" className="pricing-button1" />
            <p className="pricing-txtbtn1">Solicitar cotización</p>
            <img src={Assets.pricingImgs.button} alt="button" className="pricing-button2" />
            <p className="pricing-txtbtn2">555677 9364</p>
            </Grid.Row>

            <Grid.Row className="pricing-ear-sct">
                <img src={Assets.layoutImgs.earbutton} className="aux-1st-ear" />
                <p className="pricing-1st-txt">¿De qué depende el costo <br/> de un aparato auditivo?</p>
            </Grid.Row>

            <Grid.Row>
                <img src={Assets.pricingImgs.circle1} alt="circle1" className="pricing-circle1" />
                <img src={Assets.pricingImgs.one} alt="one" className="pricing-one" />
                <img src={Assets.pricingImgs.two} alt="two" className="pricing-two" />
                <img src={Assets.pricingImgs.three} alt="three" className="pricing-three" />
                <img src={Assets.pricingImgs.four} alt="four" className="pricing-four" />
                <img src={Assets.pricingImgs.bar} alt="bar" className="pricing-bar1" />
                <img src={Assets.pricingImgs.bar} alt="bar" className="pricing-bar2" />
                <img src={Assets.pricingImgs.bar} alt="bar" className="pricing-bar3" />
                <img src={Assets.pricingImgs.bar} alt="bar" className="pricing-bar4" />
                <p className="pricing-cost-txt1">Tipo de pérdida auditiva del paciente en<br/>base a un estudio de audición.</p>
                <p className="pricing-cost-txt2">Nivel de tecnología del aparato auditivo.</p>
                <p className="pricing-cost-txt3">Estilo de vida del paciente y necesidades<br/>particulares.</p>
                <p className="pricing-cost-txt4">Nos adaptamos a sus posibilidades<br/> económicas.</p>
            </Grid.Row>

            <Grid.Row className="pricing-table-section">
                <img src={Assets.pricingImgs.table} alt="table" className="pricing-table" />
                <img src={Assets.pricingImgs.table1} alt="table1" className="pricing-table-img1" />
                <img src={Assets.pricingImgs.table2} alt="table2" className="pricing-table-img2" />
                <img src={Assets.pricingImgs.table3} alt="table3" className="pricing-table-img3" />
                <img src={Assets.pricingImgs.device1} alt="device1" className="pricing-device1" />
                <img src={Assets.pricingImgs.device2} alt="device2" className="pricing-device2" />
                <img src={Assets.pricingImgs.device3} alt="device3" className="pricing-device3" />
                <img src={Assets.pricingImgs.ribbon1} alt="ribbon1" className="ribbon1" />
                <img src={Assets.pricingImgs.ribbon2} alt="ribbon2" className="ribbon2" />
                <img src={Assets.pricingImgs.ribbon3} alt="ribbon3" className="ribbon3" />
                <p className="ribbontxt1"><strong>$825</strong><br/>(a meses)</p>
                <p className="ribbontxt2"><strong>$3,125</strong><br/>(a meses)</p>
                <p className="ribbontxt3"><strong>$2,250</strong><br/>(a meses)</p>
                <p className="pricing-table-txt1">RIC</p>
                <p className="pricing-table-txt2">Curveta</p>
                <p className="pricing-table-txt3">Intracanal</p>
                <RicList />
                <CurvetaList />
                <IntracanalList />
            </Grid.Row>

            <Grid.Row>
            <p className="issues-nocost pricing-free">Gratis</p>
            <p className="pricing-freesub">Examen de audición +<br/>prueba de aparatos gratuito</p>
            <img src={Assets.pricingImgs.whatsbutton} alt="whats" className="whatsbutton" />
            <p className="whatstxt">55 31993438</p>
            <p className="whatssub">Enviar whatsapp</p>
            </Grid.Row>

            <Grid.Row className="pricing-ear-sct-2">
                <img src={Assets.layoutImgs.earbutton} className="aux-1st-ear" />
                <p className="pricing-2nd-txt">Nuestras marcas</p>
            </Grid.Row>

            <Grid.Row>
                <img src={Assets.pricingImgs.am} alt="am" className="pricing-am" />
                <img src={Assets.pricingImgs.phonak} alt="phonak" className="phonak" />
                <img src={Assets.pricingImgs.as} alt="as" className="pricing-as" />
                <img src={Assets.pricingImgs.bruckhoff} alt="bruckhoff" className="bruckhoff" />
                <List bulleted className="branding-list">
                    <List.Item>Calidad y tecnología alemana</List.Item>
                    <List.Item>Más de 40 años desarrollando auxiliares auditivos</List.Item>
                    <List.Item>Expertos en investigación, desarrollo y producción</List.Item>
                    <List.Item>Marcas reconocidas mundialmente</List.Item>
                </List>
                <img src={Assets.pricingImgs.largeRibbon} alt="largeribbon" className="large-ribbon" />
                <p className="ribbon-txt">Auditivos Urquieta es el único distribuidor en México</p>
                <p className="ribbon-sub">Audioservice y Bruckhoff</p>
            </Grid.Row>
            </div>

            
        )
    }
}

export default Pricing