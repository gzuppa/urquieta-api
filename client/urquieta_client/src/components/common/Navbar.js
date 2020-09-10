import React from "react";
import './common.css'
import Assets from '../../assets/Assets'
import { Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const ROOT_PATH = '/'
const AUXILIAR_PATH = '/auxiliars'
const ABOUT_PATH = '/aboutus'
const ISSUES_PATH = '/issues'
const EXAM_PATH = '/exam'
const PRICING_PATH = '/pricing'
const KIDS_PATH = '/kids'

class Navbar extends React.Component {

    state = {
        navBackground: window.location.pathname === ROOT_PATH || AUXILIAR_PATH || ABOUT_PATH || ISSUES_PATH || EXAM_PATH || PRICING_PATH || KIDS_PATH ? '#FFFFFF' : '#245D8E'
      }

      componentDidMount () {
        if(window.location.pathname === ROOT_PATH || AUXILIAR_PATH || ABOUT_PATH || ISSUES_PATH || EXAM_PATH || PRICING_PATH || KIDS_PATH){
          document.addEventListener('scroll', () => {
            const backgroundcolor = window.scrollY < 100 ? '#FFFFFF' : '#245D8E'
            this.setState({ navBackground: backgroundcolor })
          })
        }
      }

  render() {
    const { navBackground } = this.state
    return (
        <nav className={`navbar sticky-top navbar-expand-lg ${navBackground === '#FFFFFF' ? 'navbar-dark' : 'navbar-light'} color-nav`} style={{ backgroundColor: `${navBackground}` }}>
        <div className="navbar-toggler-right">
        <a className='navbar-brand' href='/'>
            <img src={navBackground === '#FFFFFF' ? Assets.layoutImgs.logo : Assets.layoutImgs.logo} alt='logo navbar' />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
        </div>

        <div className="collapse navbar-collapse flex-column" id="navbar">
      
          <ul className="navbar-nav w-100 justify-content-center px-3 listItem">
            <li className="nav-item active">
            <Link to="/aboutus"> <span className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} >Quienes somos <span class="sr-only">(current)</span></span> </Link>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="/home">Solicitar una devolución de llamada <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="/home">Contacto <span class="sr-only">(current)</span></a>
            </li>
          </ul>
      
          <ul className="navbar-nav w-100 justify-content-center px-3 listItem">
            <li className="nav-item active">
              <Dropdown text="Servicios" className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'}>
              <Dropdown.Menu>
              <Link to="/services"> <Dropdown.Item text='Asesoría gratuita' className="drop-services-item"/> </Link>
              <Link to="/services"> <Dropdown.Item text='Adaptación y ajuste' className="drop-services-item"/> </Link>
              <Link to="/services"> <Dropdown.Item text='Postventa' className="drop-services-item"/> </Link>
              <Link to="/services"> <Dropdown.Item text='Accesorios, moldes y pilas' className="drop-services-item"/> </Link>
              <Link to="/services"> <Dropdown.Item text='Laboratorio' className="drop-services-item"/> </Link>
              </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item active">
            <Dropdown text="Pérdida auditiva" className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'}>
              <Dropdown.Menu>
              <Link to="/issues"> <Dropdown.Item text='¿Que es hipoacusia o pérdida auditiva?' className="drop-services-item"/> </Link>
              <Link to="/exam"> <Dropdown.Item text='Examen de audición' className="drop-services-item"/> </Link>
              <Link to="/issues"> <Dropdown.Item text='Tipos de pérdida auditiva' className="drop-services-item"/> </Link>
              <Link to="/issues"> <Dropdown.Item text='¿Cómo funciona el oído?' className="drop-services-item"/> </Link>
              <Link to="/issues"> <Dropdown.Item text='Microtia - atresia' className="drop-services-item"/> </Link>
              </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item active">
            <Dropdown text="Kids" className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'}>
              <Dropdown.Menu>
              <Link to="/kids"> <Dropdown.Item text='Atención pediátrica' className="drop-services-item"/> </Link>
              <Link to="/kids"> <Dropdown.Item text='Tamiz' className="drop-services-item"/> </Link>
              <Link to="/kids"> <Dropdown.Item text='Sistema de vibración ósea' className="drop-services-item"/> </Link>
              <Link to="/kids"> <Dropdown.Item text='AA para niños' className="drop-services-item"/> </Link>
              </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="/home">Solicitar cotización <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="/home">Compra online <span class="sr-only">(current)</span></a>
            </li>   
          
          </ul>
        </div>
        <a className='navbar-brand' href='/#home'>
            <img src={navBackground === '#FFFFFF' ? Assets.layoutImgs.agendacita : Assets.layoutImgs.agendacita} className='agenda' alt='logo navbar' />
          </a>

      </nav>
    );
  }
}
export default Navbar;