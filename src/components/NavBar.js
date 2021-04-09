import React, { Fragment } from 'react';
import SideNav, { /*Toggle, Nav,*/ NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Icon from '@mdi/react';
import { mdiAccount, mdiSchoolOutline, mdiCardAccountMail, mdiSitemap } from '@mdi/js';
import './styles/navbar.scss';

function NavBar() {
  console.log(__dirname);
  return(
    <Fragment>
      <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
      > 
        <SideNav.Toggle />  {/** Etiqueta que habilita el botón que expande y contrae la navegación */}
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="about-me">
              <NavIcon onClick={() => console.log("HOLA")}>
                <div className="navicon">
                  <Icon path={mdiAccount}
                    title="About me"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                  />
                </div>
              </NavIcon>
              <NavText>
                About me
              </NavText>
          </NavItem>
          <NavItem eventKey="education">
              <NavIcon onClick={() => console.log("HOLA")}>
                <div className="navicon">
                  <Icon path={mdiSchoolOutline}
                    title="Education"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                  />
                </div>
              </NavIcon>
              <NavText>
                Education
              </NavText>
          </NavItem>
          <NavItem eventKey="contact-me">
              <NavIcon onClick={() => console.log("HOLA")}>
                <div className="navicon">
                  <Icon path={mdiCardAccountMail}
                    title="Contact me"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                  />
                </div>
              </NavIcon>
              <NavText>
                Contact me
              </NavText>
          </NavItem>
          <NavItem eventKey="experience">
              <NavIcon onClick={() => console.log("HOLA")}>
                <div className="navicon">
                  <Icon path={mdiSitemap}
                    title="Experience"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                  />
                </div>
              </NavIcon>
              <NavText>
                Experience
              </NavText>
          </NavItem>
          {/* <NavItem eventKey="charts">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Charts
              </NavText>
              <NavItem eventKey="charts/linechart">
                  <NavText>
                      Line Chart
                  </NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                  <NavText>
                      Bar Chart
                  </NavText>
              </NavItem>
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>
    </Fragment>
  )
}

export default NavBar;