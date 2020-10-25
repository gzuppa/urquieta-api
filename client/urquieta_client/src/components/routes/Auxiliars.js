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
                </Grid>
</div>
    );
  }
}
export default Auxiliars;