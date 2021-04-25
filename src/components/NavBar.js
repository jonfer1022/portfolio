import React, { Fragment } from 'react';
import SideNav, { /*Toggle, Nav,*/ NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Icon from '@mdi/react';
import { mdiHomeCircleOutline, mdiAccount, mdiSchoolOutline, mdiCardAccountMail, mdiSitemap, mdiBullseyeArrow, mdiBriefcaseCheckOutline } from '@mdi/js';
import Scroll from 'react-scroll';
import './styles/navbar.scss';
// import ClickOutsideNav from './ClickOutSideNav';

function NavBar() {

  let scroll = Scroll.animateScroll;

  const handleSearchPosition = function(elemento, cantidad=0){
    let element = document.getElementById(elemento);
    scroll.scrollTo(element.offsetTop - cantidad);
  }

  return(
    <Fragment>
      {/* <ClickOutsideNav
        onClickOutside={() => {
            this.setState({ expanded: false });
        }}
      > */}
        <SideNav
        className="navbar-main"
        onSelect={(selected) => {
            // Add your code here
        }}
      > 
        <SideNav.Toggle />  {/** Etiqueta que habilita el botón que expande y contrae la navegación */}
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home" onClick={() => handleSearchPosition("home")}>
                <NavIcon>
                  <div className="navicon">
                    <Icon path={mdiHomeCircleOutline}
                      title="home"
                      size={1}
                      horizontal
                      vertical
                      rotate={180}
                      color="white"
                    />
                  </div>
                </NavIcon>
                <NavText>
                  Home
                </NavText>
            </NavItem>
            <NavItem eventKey="about-me" onClick={() => handleSearchPosition("about_me")}>
                <NavIcon>
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
            <NavItem eventKey="education" onClick={() => handleSearchPosition("education")}>
                <NavIcon>
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
            <NavItem eventKey="skills" onClick={() => handleSearchPosition("skills")}>
                <NavIcon>
                  <div className="navicon">
                    <Icon path={mdiBullseyeArrow}
                      title="Skills"
                      size={1}
                      horizontal
                      vertical
                      rotate={180}
                      color="white"
                    />
                  </div>
                </NavIcon>
                <NavText>
                  Skills
                </NavText>
            </NavItem>
            <NavItem eventKey="experience" onClick={() => handleSearchPosition("experience")}>
                <NavIcon>
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
            <NavItem eventKey="projects" onClick={() => handleSearchPosition("projects")}>
                <NavIcon>
                  <div className="navicon">
                    <Icon path={mdiBriefcaseCheckOutline}
                      title="Projects"
                      size={1}
                      horizontal
                      vertical
                      rotate={180}
                      color="white"
                    />
                  </div>
                </NavIcon>
                <NavText>
                  Projects
                </NavText>
            </NavItem>
            <NavItem eventKey="contact-me" onClick={() => handleSearchPosition("contact_me")}>
                <NavIcon>
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
      {/* </ClickOutsideNav> */}
    </Fragment>
  )
}

export default NavBar;