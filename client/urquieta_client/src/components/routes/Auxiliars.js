import React, { Component } from "react";
import Navbar from '../common/Navbar'
import { Grid, List } from 'semantic-ui-react'
import './routes.css'
import Assets from '../../assets/Assets'

class Auxiliars extends Component {
  render() {
    return (
        <div>
     <Navbar />
     <Grid>
                 <Grid.Row>
                    <img src={Assets.examImgs.topBackground} alt="topback" className="aux-top-background" />
                    <p className="aux-top-title">¿Qué es un</p>
                    <p className="aux-top-subtitle">auxiliar</p>
                    <p className="aux-top-subsubtitle">auditivo?</p>
                    <p className="aux-top-subquestion">Es un aparato que ayuda a mejorar la baja auditiva que sufren algunas personas 
                    por diversos factores, como edad o un padecimiento. Ayuda al paciente a mejorar la audición de forma cómoda
                    y, por tanto, a comunicarse sin problemas y realizar sus actividades diarias como cualquier persona normoyente. </p>
                </Grid.Row>

                <Grid.Row>
                    <img src={Assets.auxImgs.background} alt="background" className="aux-background" />
                </Grid.Row>

                <Grid.Row columns="equal" className="aux-prods">
                  <Grid.Column className="first-column">
                  <div class="container page-wrapper">
                      <div class="page-inner">
                          <div class="row">
                          <div class="el-wrapper">
                              <div class="box-up">
                              <img class="img" src={Assets.auxImgs.itc} alt="" />
                              <div class="img-info">
                                  <div class="info-inner">
                                  <span class="p-name">ITC</span>
                                  <span class="p-company">Intracanal</span>
                                  </div>
                              </div>
                              </div>

                              <div class="box-down">
                              <div class="h-bg">
                                  <div class="h-bg-inner"></div>
                              </div>

                              <a class="cart" href="#">
                                  <span class="price">$0.00</span>
                                  <span class="add-to-cart">
                                  <span class="txt">Comprar</span>
                                  </span>
                              </a>
                              </div>
                          </div>
                          </div>
                      </div>
                      </div>
                      </Grid.Column>

                      <Grid.Column className="second-column">
                      <div class="container page-wrapper">
                      <div class="page-inner">
                          <div class="row">
                          <div class="el-wrapper">
                              <div class="box-up">
                              <img class="img bte" src={Assets.auxImgs.bte} alt=""/>
                              <div class="img-info">
                                  <div class="info-inner">
                                  <span class="p-name">BTE</span>
                                  <span class="p-company">Curveta</span>
                                  </div>
                              </div>
                              </div>

                              <div class="box-down">
                              <div class="h-bg">
                                  <div class="h-bg-inner"></div>
                              </div>

                              <a class="cart" href="#">
                                  <span class="price">$0.00</span>
                                  <span class="add-to-cart">
                                  <span class="txt">Comprar</span>
                                  </span>
                              </a>
                              </div>
                          </div>
                          </div>
                      </div>
                      </div>
                      </Grid.Column>

                      <Grid.Column className="third-column">
                      <div class="container page-wrapper">
                      <div class="page-inner">
                          <div class="row">
                          <div class="el-wrapper">
                              <div class="box-up">
                              <img class="img bte" src={Assets.auxImgs.bte} alt=""  />
                              <div class="img-info">
                                  <div class="info-inner">
                                  <span class="p-name">RIC</span>
                                  <span class="p-company">Receptor dentro del canal</span>
                                  </div>
                              </div>
                              </div>

                              <div class="box-down">
                              <div class="h-bg">
                                  <div class="h-bg-inner"></div>
                              </div>

                              <a class="cart" href="#">
                                  <span class="price">$0.00</span>
                                  <span class="add-to-cart">
                                  <span class="txt">Comprar</span>
                                  </span>
                              </a>
                              </div>
                          </div>
                          </div>
                      </div>
                      </div>
                      </Grid.Column>                      
                </Grid.Row>

                <Grid.Row>
                  <img src={Assets.layoutImgs.earbutton} className="aux-1st-ear" />
                  <p className="aux-1st-txt">Características</p>
                </Grid.Row>

                <Grid.Row className="tree-section">
                  <Grid.Column width={5}>
                    <img src={Assets.auxImgs.circle} className="aux-circle" />
                    <img src={Assets.auxImgs.bte} className="bte-circle" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <img src={Assets.auxImgs.rightLine} className="right-line" />
                    <div className="aux-list-imgs">
                      <img src={Assets.auxImgs.clock} className="aux-clock" />
                      <img src={Assets.auxImgs.description} className="aux-1st-desc" />
                      <p className="aux-1st-txtlist">Hasta doce horas diarias de uso</p>
                      <p className="aux-1st-subtxtlist">Gracias a la flexibilidad de las funciones automáticas,<br/>disfrutar de la vida es muy fácil.</p>
                      <img src={Assets.auxImgs.app} className="aux-app" />
                      <img src={Assets.auxImgs.description} className="aux-2nd-desc" />
                      <p className="aux-2nd-txtlist">Compatibilidad con aplicaciones</p>
                      <p className="aux-2nd-subtxtlist">Con nuestras aplicaciones podrá controlar sus audífonos con<br/>el teléfono inteligente de forma cómoda a la par que discreta.</p>
                      <img src={Assets.auxImgs.volume} className="aux-volume" />
                      <img src={Assets.auxImgs.description} className="aux-3rd-desc" />
                      <p className="aux-3rd-txtlist">Regulación automática del volumen</p>
                      <p className="aux-3rd-subtxtlist">El volumen se adapta automáticamente al entorno<br/>acústico.</p>
                      <img src={Assets.auxImgs.voice} className="aux-voice" />
                      <img src={Assets.auxImgs.description} className="aux-4th-desc" />
                      <p className="aux-4th-txtlist">Capacidad de separar la voz del ruido</p>
                      <p className="aux-4th-subtxtlist">Incluso en caso de ruidos de fondo muy altos, el audífono<br/> reconoce el habla y la coloca en el primer plano.</p>
                    </div>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <img src={Assets.auxImgs.ip67} alt="ip67" className="ip67" />
                    <img src={Assets.auxImgs.ip671} alt="ip671" />
                    <img src={Assets.auxImgs.ip672} alt="ip672" />
                    <img src={Assets.auxImgs.line} alt="line" className="line" />
                    <img src={Assets.auxImgs.line} alt="line" className="line2" />
                    <img src={Assets.auxImgs.line} alt="line" className="line3" />
                    <img src={Assets.auxImgs.line} alt="line" className="line4" />
                    <div className="ip67-list">
                        <p className="ip67-txt">Protección del micrófono</p>
                        <p className="ip67-txt">ComforSeal</p>
                        <p className="ip67-txt">Sellado estanco</p>
                        <p className="ip67-txt">Revestimiento</p>
                    </div>
                </Grid.Row>

                <Grid.Row>
                <div class="auxear-box">
                    <div class="auxear-card">
                        <div class="auxear-imgBx">
                            <img src={Assets.auxImgs.ear1} alt="images"/>
                        </div>
                        <div class="auxear-details">
                            <h2>ITC<br/><span>Intracanal</span></h2>
                        </div>
                    </div>
                    
                    <div class="auxear-card">
                        <div class="auxear-imgBx">
                            <img src={Assets.auxImgs.ear2} alt="images"/>
                        </div>
                        <div class="auxear-details">
                            <h2>BTE<br/><span>Curveta</span></h2>
                        </div>
                    </div>

                    <div class="auxear-card">
                        <div class="auxear-imgBx">
                            <img src={Assets.auxImgs.ear3} alt="images"/>
                        </div>
                        <div class="auxear-details">
                            <h2>RIC<br/><span>Receptor dentro del canal</span></h2>
                        </div>
                    </div>
                </div>
                </Grid.Row>

                <Grid.Row>
                    <div className="aux-title-btn" >
                        <img src={Assets.auxImgs.title} alt="title" />
                        <p className="aux-title-txt">Sistema de vibración ósea</p>
                    </div>
                  
                    <div class="auxear-box">
                    <div class="auxear-card">
                        <div class="auxear-details">
                            <h2>Diadema</h2>
                        </div>
                        <div class="auxear-imgBx">
                            <img src={Assets.auxImgs.diadema} alt="images"/>
                        </div>
                    </div>
                    
                    <div class="auxear-card">
                        <div class="auxear-details">
                            <h2>Balerina</h2>
                        </div>
                        <div class="auxear-imgBx">
                            <img src={Assets.auxImgs.balerina} alt="images"/>
                        </div>
                    </div>

                    <div class="auxear-card">
                        <div class="auxear-details">
                            <h2>Lentes</h2>
                        </div>
                        <div class="auxear-imgBx">
                            <img src={Assets.auxImgs.lentes} alt="images"/>
                        </div>
                    </div>
                </div>
                </Grid.Row>

                <Grid.Row>
                <div class="big-card-container">
                    <div class="big-card big-u-clearfix">
                        <div class="big-card-body">
                        <span class="big-card-author big-subtle">Discreción y potencia en un mismo equipo</span>
                        <h2 class="big-card-title">Balerinas</h2>
                        <span class="big-card-description big-subtle">Esta generación de auxiliares auditivos ha revolucionado la manera de
                            usar un aparato auditivo. Se coloca detrás de la oreja, un cable delgado
                            conecta un receptor dentro del oído. Al mantener los micrófonos lejos de
                            la bocina logra mayor potencia, confort y estética. Los sistemas RIC son de
                            tecnología avanzada. Pueden ser compatibles con Bluetooth, recargables
                            o usar batería convencional.</span>
                        <div class="big-card-read">
                            <img src={Assets.auxImgs.balerina1} class="balerina-1" alt="balerina1" />
                            <img src={Assets.auxImgs.balerina2} class="balerina-2" alt="balerina2" />
                            <img src={Assets.auxImgs.balerina3} class="balerina-3" alt="balerina3" />
                        </div>
                        </div>
                        <img src={Assets.auxImgs.balerina} alt="" class="big-card-media" />
                    </div>
                    <div class="big-card-shadow"></div>
                    </div>
                </Grid.Row>

                <Grid.Row>
                <div class="big-card-container">
                    <div class="big-card big-u-clearfix">
                        <div class="big-card-body">
                        <span class="big-card-author big-subtle">Discreción y potencia en un mismo equipo</span>
                        <h2 class="big-card-title">RIC- Receptor dentro del canal</h2>
                        <span class="big-card-description big-subtle">Esta generación de auxiliares auditivos ha revolucionado la manera de
                            usar un aparato auditivo. Se coloca detrás de la oreja, un cable delgado
                            conecta un receptor dentro del oído. Al mantener los micrófonos lejos de
                            la bocina logra mayor potencia, confort y estética. Los sistemas RIC son de
                            tecnología avanzada. Pueden ser compatibles con Bluetooth, recargables
                            o usar batería convencional.</span>
                        <div class="big-card-read">
                            <img src={Assets.auxImgs.ricDevices} class="ric-devices" alt="ric-devices" />
                        </div>
                        </div>
                        <img src={Assets.auxImgs.ear1} alt="" class="big-card-media" />
                    </div>
                    <div class="big-card-shadow"></div>
                    </div>
                </Grid.Row>

                <Grid.Row>
                <div class="big-card-container">
                    <div class="big-card big-u-clearfix">
                        <div class="big-card-body">
                        <span class="big-card-author big-subtle">La mayor potencia con una batería de larga duración</span>
                        <h2 class="big-card-title">BTE - Curveta</h2>
                        <span class="big-card-description big-subtle">Se usa colgado detrás de la oreja. Un tubo delgado lo conecta a un molde
                        hecho al tamaño del conducto auditivo. Hay curvetas de diferentes tamaños y pueden cubrir desde la baja auditiva más leve hasta
                        la más profunda. Existe una generación de curvetas mini, que se esconden tras la oreja.
                        Cuentan con un tubo muy fino, prácticamente invisible, que se conecta
                        dentro del conducto auditivo.</span>
                        <div class="big-card-read">
                            <img src={Assets.auxImgs.bteDevices} class="bte-devices" alt="bte-devices" />
                        </div>
                        </div>
                        <img src={Assets.auxImgs.ear2} alt="" class="big-card-media" />
                    </div>
                    <div class="big-card-shadow"></div>
                    </div>
                </Grid.Row>
                </Grid>
</div>
    );
  }
}
export default Auxiliars;