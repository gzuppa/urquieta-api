import React, { Component } from 'react'
import { Grid, Container, List, Image } from 'semantic-ui-react'
import Assets from '../../assets/Assets'
import Navbar from '../common/Navbar'

class Issues extends Component {
    render(){
        return(
            <div>
            <Navbar />
            
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                    <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
                    <img src={Assets.issuesImgs.issues1} alt="ear" className="services-doctor"/>
                    <img src={Assets.layoutImgs.earbutton} alt="earbutton" className="issues-1st-btn" />
                    <span className="issues-exam-txt">Examen de audición</span>
                    </Grid.Column>
                    <Grid.Column  width={10}>
                    <Container fluid>
                    <p className="issues-paragraph issues-1st-par">
                    La audición y el equilibrio son fundamentales para nuestra vida
                    diaria, el cuidado y atención de su audición son esenciales.<br/><br/>
                    <strong>¿Cómo se diagnostica la hipoacusia?</strong><br/>
                    La hipoacusia suele ser un motivo frecuente de consulta médica.
                    Normalmente las bajas auditivas son detectadas por terceras
                    personas. Sin embargo, una de las pruebas para identificarla es
                    el estudio audiométrico o audiometría. <br/><br/>
                    <strong>Puntos a considerar</strong>
                    </p>
                    <List bulleted className="issues-paragraph">
                        <List.Item>Investigación clínica del paciente</List.Item>
                        <List.Item>Edad de detección </List.Item>
                        <List.Item>Si afecta a uno o a los dos oídos</List.Item>
                        <List.Item>Síntomas agregados familiares o perinatales</List.Item>
                        <List.Item>Desarrollo de lenguaje</List.Item>
                        <List.Item>Uso de ototóxicos</List.Item>
                    </List>
                    </Container>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>

                    </Grid.Column>
                    <Grid.Column width={8}>
                        <p className="issues-nocost">Sin costo</p>
                        <img src={Assets.issuesImgs.button} alt="button" className="issues-btn1" />
                        <p className="issues-btntxt1">Agenda tu cita <br/> GRATUITA</p>
                        <img src={Assets.issuesImgs.button} alt="button" className="issues-btn2" />
                        <p className="issues-btntxt2">55 5677 9364</p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className="bullet-section">
                        <img src={Assets.issuesImgs.bullet1} alt="bullet1" className="issues-blt1" />
                        <p className="issues-blttxt1">Agenda <br/> tu cita <br/> GRATUITA</p>
                        <img src={Assets.issuesImgs.bullet2} alt="bullet2" className="issues-blt2" />
                        <p className="issues-blttxt2">Expediente</p>
                        <img src={Assets.issuesImgs.bullet3} alt="bullet3" className="issues-blt3" />
                        <p className="issues-blttxt3">Otoscopia</p>
                        <img src={Assets.issuesImgs.bullet4} alt="bullet4" className="issues-blt4" />
                        <p className="issues-blttxt4">Audiometría</p>
                        <img src={Assets.issuesImgs.bullet5} alt="bullet5" className="issues-blt5" />
                        <p className="issues-blttxt5">Asesoría <br/>y prueba <br/> de aparatos</p>
                </Grid.Row>

                <Grid.Row>
                <img src={Assets.issuesImgs.landscape} alt="back" className="services-background issues-landscape"/>
                <img src={Assets.issuesImgs.landscapeImg} alt="ear" className="services-doctor issues-landscape"/>
                </Grid.Row>

                <Grid.Row className="info-section">
                    <Grid.Column width={6}>
                    <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
                    <img src={Assets.issuesImgs.issues2} alt="ear" className="services-doctor issues-2nd-section"/>
                    </Grid.Column>
                    <Grid.Column  width={10}>
                    <Container fluid>
                    <p className="issues-paragraph issues-1st-par">
                    Es un eficiente diagnóstico para valorar el estado de su audición, se
                    realiza cuando se sospecha pérdida auditiva. <br/>
                    Este estudio evalúa su capacidad para percibir (escuchar) tonos puros
                    para cada una de las frecuencias estudiadas, es decir, la intensidad
                    más baja a la que el oído percibe el sonido en dichas frecuencias.
                    </p>
                    <List horizontal className="issues-list">
                        <List.Item>
                        <Image src={Assets.issuesImgs.check} className="check" />
                        <List.Content className="check-txt">
                            Rápido
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image src={Assets.issuesImgs.check} className="check" />
                        <List.Content className="check-txt">
                            Confiable
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <Image src={Assets.issuesImgs.check} className="check" />
                        <List.Content className="check-txt">
                            No causa molestias
                        </List.Content>
                        </List.Item>
                    </List>
                    <p className="issues-paragraph">
                    <strong>¿Cómo se realiza?</strong>
                    </p>
                    <List animated verticalAlign='middle'>
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        La audiometría precederá de una exploración otoscópica. Realizada por un especialista en el diagnóstico auditivo 
                        </List.Content>
                        </List.Item>
                        <br/><br/>
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        Las pruebas de audiometría se llevan a cabo en una cabina audiométrica, un espacio sonoamortiguado que aísla al paciente
                        de otros sonidos del ambiente. 
                        </List.Content>
                        </List.Item>
                    </List>
                    </Container>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className="issues-3rd-row">
                    <Grid.Column width={11}>
                    <List animated verticalAlign='middle' className="issues-3rd-list">
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        A la persona a quien se le realiza la prueba se le colocan unos
                        audífonos, y el especialista usa un audiómetro para producir
                        sonidos de diferentes frecuencias e intensidades que envía al
                        paciente y se le pide a la persona que indique si puede escuchar los sonidos que se generan.  
                        </List.Content>
                        </List.Item>
                        <br/><br/>
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        La interpretación de resultados y asesoría se realizan en la
                        misma consulta. 
                        </List.Content>
                        </List.Item>
                        <br/><br/>
                        <List.Item>
                        <Image avatar src={Assets.aboutImgs.scopeicon} className="check first-list-icons" />
                        <List.Content className="issues-paragraph">
                        La audiometría no es en sí misma una técnica de prevención,
                        ya que no evita los daños congénitos, por la edad u ocasionados por la exposición al ruido, pero permite detectarlos en un
                        estado precoz de su desarrollo, y por tanto su la importancia
                        de su realización periódica
                        </List.Content>
                        </List.Item>
                        <div className="issues-advisory">
                           <br/> ¿Tiene alguna duda sobre su audición?<br/><br/>Asesoría, sin costo.
                        </div>
                        <img src={Assets.issuesImgs.button} alt="button" className="issues-btn3" />
                        <img src={Assets.generalImgs.whatsapp} alt="whatsapp" className="whatsapp-issues" />
                        <p className="issues-btntxt3">Enviar Whatsapp</p>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <img src={Assets.servicesImgs.services2} alt="ear" className="services-doctor"/>
                        <img src={Assets.servicesImgs.backgroundLeft} alt="back" className="services-background"/>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <img src={Assets.issuesImgs.landscapeInverted} alt="landscape-inv" className="landscape-inverted" />
                        <p className="landscape-1sttxt">¿Cómo <br/> oímos?</p>
                        <p className="landscape-2ndtxt">Los oídos son receptores auditivos que captan las ondas
                                                        sonoras, encargados de transmitir y transformar diferentes
                                                        tipos de energía:
                                                        Acústica: hasta que impacta el tímpano.<br/>
                                                        Mecánica: al vibrar con los huesecillos.<br/>
                                                        Hidráulica: al estimular fluidos dentro de la cóclea.
                        </p>
                    </Grid.Row>

                    <Grid.Row>
                        <div>
                        <p className="ear-1stblt">1</p>
                        <p className="ear-1sttxt">Las ondas sonoras son recogidas por el pabellón auricular</p>
                        </div>
                        <div className="ear-2nddiv">
                        <p className="ear-2ndblt">2</p>
                        <p className="ear-2ndtxt">Transmitidas a través del canal auditivo</p>
                        </div>
                        <div className="ear-3rddiv">
                        <p className="ear-3rdblt">3</p>
                        <p className="ear-3rdtxt">El tímpano comienza a vibrar y envía
                                                  de esta forma ondas sonoras a los huesecillos del oído medio</p>
                        </div>
                        <div>
                        <img src={Assets.issuesImgs.ear} alt="ear-schema" className="ear-schema" />
                        </div>
                        <div className="ear-4thdiv">
                        <p className="ear-4thblt">4</p>
                        <p className="ear-4thtxt">Una membrana transmite las vibraciones a la cóclea</p>
                        </div>
                        <div className="ear-5thdiv">
                        <p className="ear-5thblt">5</p>
                        <p className="ear-5thtxt">El nervio auditivo envía impulsos al cerebro, donde son percibidos como sonidos</p>
                        </div>
                    </Grid.Row>

                    <Grid.Row>
                    <div class="wrap">
                        <div class="tile"> 
                        <img src={Assets.servicesImgs.adaptacion}/>
                        <div class="text">
                        <h1>Oído externo.</h1>
                        <p class="animate-text">Formado por el pabellón del oído
                            (oreja) y el conducto auditivo externo
                            que termina en el tímpano. Tiene la
                            misión de recoger las ondas sonoras y
                            transmitirlas hasta el oído medio.</p>
                        </div>
                        </div>
                        <div class="tile"> 
                        <img src={Assets.servicesImgs.asesoria}/>
                        <div class="text">
                        <h1>Oído medio.</h1>
                        <p class="animate-text">Constituido por el tímpano, la caja timpánica que
                            contiene aire, y la cadena
                            de huesecillos yunque,
                            martillo y estribo, la
                            trompa de Eustaquio.</p>
                        </div>
                        </div>                        
                        <div class="tile"> 
                        <img src={Assets.servicesImgs.lab}/>
                        <div class="text">
                        <h1>Oído interno.</h1>
                        <p class="animate-text">Consta del órgano vestibular u órgano
                            del equilibrio y de un conducto con
                            forma de caracol o cóclea que es el que
                            posee la función auditiva.</p>
                        </div>
                        </div>
                        </div>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={6}>
                    <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
                    <img src={Assets.issuesImgs.issues4} alt="ear" className="issues-4th-bkg"/>
                    </Grid.Column>
                    <Grid.Column  width={10}>
                    <Container fluid>
                    <p className="issues-paragraph issues-1st-par">
                    Se dice que alguien sufre pérdida de audición cuando no es capaz
                    de oír tan bien como una persona cuyo sentido del oído es normal<br/><br/>
                    La hipoacusia es definida como una disminución de la percepción
                    auditiva. Sin embargo, puede pasar desapercibida si es leve, superficial o si se afecta un solo oído, 
                    pues se compensa con el oído sano.<br/><br/>
                    </p>
                    <img src={Assets.issuesImgs.world} alt="world" className="issues-world" />
                    <p className="issues-paragraph issues-world-paragraph">
                    El 5% Población mundial padece pérdida de audición discapacitante 
                    </p>
                    <img src={Assets.issuesImgs.calendar} alt="calendar" className="issues-calendar" />
                    <img src={Assets.issuesImgs.redPeople} alt="redpeople" className="issues-redpeople" />
                    <img src={Assets.issuesImgs.people} alt="people" />
                    <p className="issues-paragraph issues-estimate-paragraph">
                    Se estima que de aquí a 2050 más de 900 millones de personas -
                    una de cada diez - padecerá pérdida de audición.
                    </p>
                    </Container>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className="issues-3rd-row">
                    <Grid.Column width={11}>
                        <img src={Assets.issuesImgs.age} alt="age" className="issues-age" />
                        <p className="issues-paragraph issues-data-paragraph">Si bien puede ocurrir a cualquier edad , en la consulta cotidiana
                        es más común en adultos, sobretodo adultos mayores, afectando
                        notoriamente su calidad de vida</p>
                        <img src={Assets.issuesImgs.seventy} alt="70" className="issues-seventy" />
                        <p className="issues-paragraph issues-70-paragraph">En mayores de 65 años</p>
                        <img src={Assets.issuesImgs.eighty} alt="80" className="issues-seventy" />
                        <p className="issues-paragraph issues-80-paragraph">En mayores de 80 años</p>
                        <p className="issues-paragraph issues-clasification">
                        <strong>Clasificación de la hipoacusia</strong>
                        </p>
                        <p className="issues-paragraph issues-clasification">Una hipoacusia puede definirse en función de diversos criterios. </p>

                        <div class="issues-hypo-container">
                            <div class="issues-hypo-card hypo-card1">
                                <h3 class="issues-hypo-title">Intensidad</h3>
                                <div class="issues-hypo-bar">
                                <div class="issues-hypo-emptybar"></div>
                                <div class="issues-hypo-filledbar"></div>
                                </div>
                                <div class="issues-hypo-circle">
                                <ul className="hypo-list">
                                    <li>Superficial</li>
                                    <li>Media</li>
                                    <li>Severa</li>
                                    <li>Profunda</li>
                                </ul>
                                </div>
                            </div>
                            <div class="issues-hypo-card hypo-card2">
                                <h3 class="issues-hypo-title">Localización</h3>
                                <div class="issues-hypo-bar">
                                <div class="issues-hypo-emptybar"></div>
                                <div class="issues-hypo-filledbar"></div>
                                </div>
                                <div class="issues-hypo-circle">
                                <ul className="hypo-list">
                                    <li>Conductiva</li>
                                    <li>Mixta</li>
                                    <li>Neurosensorial</li>
                                </ul>
                                </div>
                            </div>
                            <div class="issues-hypo-card hypo-card3">
                                <h3 class="issues-hypo-title">Momento de aparición respecto al lenguaje</h3>
                                <div class="issues-hypo-bar">
                                <div class="issues-hypo-emptybar"></div>
                                <div class="issues-hypo-filledbar"></div>
                                </div>
                                <div class="issues-hypo-circle">
                                <ul className="hypo-list">
                                    <li>Pre-locutiva</li>
                                    <li>Post-locutiva</li>
                                </ul>
                                </div>
                            </div>
                            </div>

                    </Grid.Column>
                    <Grid.Column width={5}>
                        <img src={Assets.issuesImgs.issues5} alt="ear" className="services-doctor"/>
                        <img src={Assets.servicesImgs.backgroundLeft} alt="back" className="services-background"/>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className="issues-graphic-section">
                        <p className="issues-paragraph">
                        <strong>Gráfica audiométrica / Cuantitativa audiométrica</strong>
                        </p>
                        <p className="issues-paragraph issues-graph-pgph">
                        La audición se mide en decibelios (dB), es una medida exponencial, por lo
                        que somos capaces de diferenciar pequeñas variaciones entre ambos
                        oídos. Se considera audición normal cuando el umbral auditivo, mínima
                        audición, no sobrepasa los 20 dB, equivalente, por ejemplo, al sonido del
                        movimiento de una hoja de papel.  </p>
                        <img src={Assets.issuesImgs.graphic} alt="graphic" className="issues-graphic" />
                        <img src={Assets.issuesImgs.board} alt="board" className="issues-graphic-board" />
                        <img src={Assets.issuesImgs.bar} alt="bar" className="issues-graphic-bar" />
                        <a href="#"><img src={Assets.issuesImgs.leafs} alt="leafs" className="issues-leafs" /></a>
                        <a href="#"><img src={Assets.issuesImgs.water} alt="water" className="issues-water" /></a>
                        <a href="#"><img src={Assets.issuesImgs.clock} alt="clock" className="issues-clock" /></a>
                        <a href="#"><img src={Assets.issuesImgs.talk1} alt="talk1" className="issues-talk1" /></a>
                        <a href="#"><img src={Assets.issuesImgs.talk2} alt="talk2" className="issues-talk2" /></a>
                        <a href="#"><img src={Assets.issuesImgs.dog} alt="dog" className="issues-dog" /></a>
                        <a href="#"><img src={Assets.issuesImgs.piano} alt="piano" className="issues-piano" /></a>
                        <a href="#"><img src={Assets.issuesImgs.talk3} alt="talk3" className="issues-talk3" /></a>
                        <a href="#"><img src={Assets.issuesImgs.machine} alt="machine" className="issues-machine" /></a>
                        <a href="#"><img src={Assets.issuesImgs.moto} alt="moto" className="issues-moto" /></a>
                        <a href="#"><img src={Assets.issuesImgs.plane} alt="plane" className="issues-plane" /></a>
                        <p className="issues-graphic-texts issues-normal">Normal</p>
                        <p className="issues-graphic-texts issues-super">Superficial</p>
                        <p className="issues-graphic-texts issues-media">Media</p>
                        <p className="issues-graphic-texts issues-hard">Severa</p>
                        <p className="issues-graphic-texts issues-deep">Profunda</p>
                        <p className="issues-graphic-texts issues-rest">Restos <br/>auditivos</p>
                        <p className="issues-graphic-texts issues-lost">Anacusia</p>
                        <p className="issues-graphic-texts1 issues-normal1">0 a 20 dB</p>
                        <p className="issues-graphic-texts1 issues-super1">21 a 40 dB</p>
                        <p className="issues-graphic-texts1 issues-media1">41 a 60 dB</p>
                        <p className="issues-graphic-texts1 issues-hard1">61 a 80 dB</p>
                        <p className="issues-graphic-texts1 issues-deep1">Más de 80 dB<br/>Presencia de umbrales en no más<br/>de tres frecuencias</p>
                        <p className="issues-graphic-texts1 issues-rest1">Sin respuesta a<br/>máximas intensidades en todas<br/>las frecuencias</p>
                        <p className="issues-graphic-texts1 issues-lost1">Sin respuesta a<br/>máximas intensidades en todas<br/>las frecuencias</p>
                    </Grid.Row>

                    <Grid.Row>
                        <p className="issues-paragraph issues-topo">
                        <strong>Clasificación topográfica</strong>
                        </p>
                        <p className="issues-paragraph issues-topo-pgph">
                        La clasificación topográfica considera las hipoacusias
                        según el lugar en que se asienta la lesión que las origina.</p>
                        <img src={Assets.issuesImgs.external} alt="external" className="issues-external" />
                        <img src={Assets.issuesImgs.brain} alt="brain" className="issues-brain" />
                        <img src={Assets.issuesImgs.redArrow} alt="redArrow" className="issues-red-arrow" />
                        <img src={Assets.issuesImgs.blueArrow} alt="blueArrow" className="issues-blue-arrow" />
                    </Grid.Row>

                    <Grid.Row>
                        <img src={Assets.issuesImgs.oneRed} alt="oneRed" className="issues-one-red" />
                        <p className="issues-red-text">De transmisión<br/>o de conducción</p>
                        <img src={Assets.issuesImgs.twoYellow} alt="twoYellow" className="issues-two-yellow" />
                        <p className="issues-yellow-text">Hipoacusias<br/>mixtas</p>
                        <img src={Assets.issuesImgs.threeBlue} alt="threeBlue" className="issues-three-blue" />
                        <p className="issues-blue-text">Neurosensoriales<br/>o de percepción</p>
                    </Grid.Row>

                    
                    <Grid.Row>
                    <Grid.Column width={6}>
                    <img src={Assets.aboutImgs.background} alt="back" className="services-background"/>
                    <img src={Assets.issuesImgs.issues6} alt="ear" className="issues-4th-bkg"/>
                    </Grid.Column>
                    <Grid.Column  width={10}>
                    <Container fluid>
                    <p className="issues-paragraph issues-1st-par">
                    Malformaciones del pabellón auricular y del conducto auditivo
                    externo.<br/><br/>
                    <strong>Criptotia</strong><br/>
                    Es una malformación menor del pabellón auricular del tercio superior. Produce ausencia de la crura superior e inferior, lo que
                    provoca que el borde alto de la oreja se doble.<br/><br/>
                    <strong>Microtia</strong><br/>
                    Se considera una deformidad de severidad variable que compromete el pabellón auricular. Se caracteriza por la presencia de remanentes cartilaginosos malformados cubiertos de piel, así
                    como el lóbulo de la oreja mal posicionado. Es decir, el tamaño
                    de la oreja es menor, en proporción al rostro, porque no alcanzó
                    su desarrollo. Se presenta con tres grados de afección.<br/><br/>
                    <strong>Atresia y estenosis</strong><br/>
                    La atresia es el nulo desarrollo del conducto auditivo externo
                    asociado a displasia de la cadena osicular. En otras palabras, la
                    oreja, la parte visible del oído, no está. Cuando el conducto auditivo externo presenta un diámetro igual o inferior a cuatro milímetros se le llama estenosis.
                    </p>
                    </Container>
                    </Grid.Column>
                </Grid.Row>

                </Grid>
            </div>
        )
    }
}

export default Issues