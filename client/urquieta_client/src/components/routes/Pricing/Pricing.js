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

            <Grid.Row className="pricing-ear-sct-3">
                <img src={Assets.layoutImgs.earbutton} className="aux-1st-ear" />
                <p className="pricing-3rd-txt">Diferencias entre un amplificador<br/>y un aparato auditivo</p>
                <p className="pricing-prgp">Nosotros somos profesionales en audición. Idealmente podemos recibirlo en
                nuestra sucursal y también contamos con servicio a domicilio contamos con una
                unidad móvil que incluye cabina sonoamortiguada para garantizar un estudio de
                calidad.<br/>
                Un buen auxiliar auditivo no está por debajo de 6 mil pesos. Se trata de su salud,
                un aparato que no es para usted o no atenderse podría dañar irreparablemente su
                audición, siempre asesorarse con especialistas.</p>
            </Grid.Row>

            <Grid.Row className="difsect">
                <img src={Assets.pricingImgs.difHeader} alt="difheader" className="difs-header" />
                <img src={Assets.pricingImgs.difBack} alt="difback" className="difs-back" />
                <p className="difs-title difs-title1">Amplificador<br/>auditivo</p>
                <p className="difs-title difs-title2">Aparato<br/>auditivo</p>
                <img src={Assets.pricingImgs.difAmpli} alt="difampli" className="difs-ampli" />
                <img src={Assets.pricingImgs.difDevice} alt="difdevice" className="difs-device" />
                <img src={Assets.pricingImgs.fullStar} alt="fullstar" className="fullstar fullstar1" />
                <img src={Assets.pricingImgs.fullStar} alt="fullstar" className="fullstar fullstar2" />
                <img src={Assets.pricingImgs.fullStar} alt="fullstar" className="fullstar fullstar3" />
                <img src={Assets.pricingImgs.fullStar} alt="fullstar" className="fullstar fullstar4" />
                <img src={Assets.pricingImgs.emptyStar} alt="emptystar" className="emptystar emptystar1" />
                <img src={Assets.pricingImgs.emptyStar} alt="emptystar" className="emptystar emptystar2" />

                <p className="tabletxt tabletxt1">Venta poco regulada,<br/>sin supervisión médica</p>
                <p className="tabletxt tabletxt2">Existe riesgo de daño al<br/>oído o molestia</p>
                <p className="tabletxt tabletxt3">Apto para escuchar "más"<br/>pero no para una baja auditiva<br/>diagnosticada</p>
                <p className="tabletxt tabletxt4">Frágil</p>
                <p className="tabletxt tabletxt5">En su mayoría tiene una bocina<br/>grande que sobresale del oído más<br/>un equipo colgado tras de la oreja</p>
                <p className="tabletxt tabletxt6">Amplifica los sonidos por igual,<br/>incluído el ruido,<br/> perjudicando el oído</p>
                <p className="tabletxt tabletxt7"><strong>Adaptación bajo diagnóstico</strong><br/>Recetado por un especialista en <br/>audición después de revisar<br/> sus estudios</p>
                <p className="tabletxt tabletxt8">Mantiene tu audición sana<br/> y protegida</p>
                <p className="tabletxt tabletxt9">Escuchas lo que necesita tu audición.<br/>En bajas auditivas profundas puede<br/>ser muy potente y selectivo a la vez</p>
                <p className="tabletxt tabletxt10"><strong>Duradero</strong><br/>Uso diario de hasta + 12 hrs.<br/>Nano protección: certificación ip67</p>
                <p className="tabletxt tabletxt11"><strong>Estético</strong><br/>Incluso hay modelos invisibles.<br/>Molde a la medida exacta del oído</p>
                <p className="tabletxt tabletxt12">En bajas auditivas moderadas<br/> selecciona oír solo la voz y controla <br/>rangos que podrían causar molestia</p>

                <img src={Assets.pricingImgs.oneb} alt="oneb" className="oneb" />
                <img src={Assets.pricingImgs.twob} alt="twob" className="twob" />
                <img src={Assets.pricingImgs.threeb} alt="threeb" className="threeb" />

                <p className="pricechecktxt pricechecktxt1">Adaptación personalizada</p>
                <p className="pricechecktxt pricechecktxt2">Manipulación de<br/>compresores de sonido</p>
                <p className="pricechecktxt pricechecktxt3">Selección de frecuencias</p>

                <img src={Assets.pricingImgs.x} alt="x" className="pricingx pricingx1" />
                <img src={Assets.pricingImgs.x} alt="x" className="pricingx pricingx2" />
                <img src={Assets.pricingImgs.x} alt="x" className="pricingx pricingx3" />

                <img src={Assets.pricingImgs.check} alt="check" className="pricingcheck pricingcheck1" />
                <img src={Assets.pricingImgs.check} alt="check" className="pricingcheck pricingcheck2" />
                <img src={Assets.pricingImgs.check} alt="check" className="pricingcheck pricingcheck3" />

                <img src={Assets.pricingImgs.grayRibbon} alt="grayribbon" className="grayribbon" />
                <img src={Assets.pricingImgs.tableRibbon} alt="tableribbon" className="tableribbon" />

                <p className="tableprice tableprice1">$2,800</p>
                <p className="tableprice tableprice2">$6,000</p>
            </Grid.Row>
            </div>

            
        )
    }
}

export default Pricing