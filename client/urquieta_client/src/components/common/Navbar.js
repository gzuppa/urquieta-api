import React from "react";
import './common.css'
import Assets from '../../assets/Assets'
import { Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const ROOT_PATH = '/'

class Navbar extends React.Component {

    state = {
        navBackground: window.location.pathname === ROOT_PATH ? '#FFFFFF' : '#245D8E'
      }

      componentDidMount () {
        if(window.location.pathname === ROOT_PATH){
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
        <a className='navbar-brand' href='/#home'>
            <img src={navBackground === '#FFFFFF' ? Assets.layoutImgs.logo : Assets.layoutImgs.logo} alt='logo navbar' />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
        </div>

        <div className="collapse navbar-collapse flex-column" id="navbar">
      
          <ul className="navbar-nav w-100 justify-content-center px-3 listItem">
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="#">Quienes somos <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="#">Solicitar una devolución de llamada <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="#">Contacto <span class="sr-only">(current)</span></a>
            </li>
          </ul>
      
          <ul className="navbar-nav w-100 justify-content-center px-3 listItem">
            <li className="nav-item active">
              <Dropdown text="Servicios" className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'}>
              <Dropdown.Menu>
              <Link to="/services"> <Dropdown.Item text='Asesoría gratuita' /> </Link>
              <Link to="/services"> <Dropdown.Item text='Adaptación y ajuste' /> </Link>
              <Link to="/services"> <Dropdown.Item text='Postventa' /> </Link>
              <Link to="/services"> <Dropdown.Item text='Accesorios, moldes y pilas' /> </Link>
              <Link to="/services"> <Dropdown.Item text='Laboratorio' /> </Link>
              </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="#">Pérdida auditiva <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="#">Kids <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="#">Solicitar cotización <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className={navBackground === '#245D8E' ? 'menuItems' : 'menuItemsBlue'} href="#">Compra online <span class="sr-only">(current)</span></a>
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